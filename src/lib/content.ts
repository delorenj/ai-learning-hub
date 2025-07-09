import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export interface ContentMetadata {
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  badgeText?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];
  estimatedTime?: string;
  author?: string;
  publishedAt?: string;
  featured?: boolean;
}

export interface ContentItem {
  slug: string;
  category: string;
  metadata: ContentMetadata;
  content: string;
  filepath: string;
}

export interface SerializedContentItem extends Omit<ContentItem, 'content'> {
  mdxSource: MDXRemoteSerializeResult;
}

// In production standalone mode, content is mounted at /app/content
// In development, it's relative to process.cwd()
const CONTENT_DIR = process.env.NODE_ENV === 'production' 
  ? '/app/content'
  : path.join(process.cwd(), 'content');
const CONTENT_CATEGORIES = ['howto', 'tipsnips', 'resources'];

/**
 * Get all .mdx files from a specific content category directory
 */
export function getContentFiles(category: string): string[] {
  const categoryDir = path.join(CONTENT_DIR, category);
  
  if (!fs.existsSync(categoryDir)) {
    return [];
  }
  
  return fs.readdirSync(categoryDir)
    .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')
    .map(file => file.replace('.mdx', ''));
}

/**
 * Get content item by category and slug
 */
export function getContentItem(category: string, slug: string): ContentItem | null {
  const filepath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
  
  if (!fs.existsSync(filepath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    category,
    metadata: data as ContentMetadata,
    content,
    filepath
  };
}

/**
 * Get all content items from a specific category
 */
export function getContentItems(category: string): ContentItem[] {
  const slugs = getContentFiles(category);
  
  return slugs
    .map(slug => getContentItem(category, slug))
    .filter((item): item is ContentItem => item !== null);
}

/**
 * Get all content items from all categories
 */
export function getAllContentItems(): ContentItem[] {
  return CONTENT_CATEGORIES.flatMap(category => getContentItems(category));
}

/**
 * Get available content categories
 */
export function getContentCategories(): string[] {
  return CONTENT_CATEGORIES.filter(category => {
    const categoryDir = path.join(CONTENT_DIR, category);
    return fs.existsSync(categoryDir);
  });
}

/**
 * Get content summary for each category
 */
export function getContentSummary() {
  return CONTENT_CATEGORIES.map(category => ({
    category,
    count: getContentFiles(category).length,
    items: getContentItems(category)
  }));
}

/**
 * Serialize MDX content for rendering
 */
export async function getSerializedContentItem(category: string, slug: string): Promise<SerializedContentItem | null> {
  const contentItem = getContentItem(category, slug);
  
  if (!contentItem) {
    return null;
  }
  
  const mdxSource = await serialize(contentItem.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ],
    },
  });
  
  return {
    slug: contentItem.slug,
    category: contentItem.category,
    metadata: contentItem.metadata,
    filepath: contentItem.filepath,
    mdxSource
  };
}

/**
 * Get all serialized content items from a category (useful for static generation)
 */
export async function getAllSerializedContentItems(category: string): Promise<SerializedContentItem[]> {
  const slugs = getContentFiles(category);
  const serializedItems = await Promise.all(
    slugs.map(slug => getSerializedContentItem(category, slug))
  );
  
  return serializedItems.filter((item): item is SerializedContentItem => item !== null);
}