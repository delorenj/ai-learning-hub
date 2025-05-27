import { getContentFiles, getSerializedContentItem, getContentCategories } from '@/lib/content';
import MDXContent from '@/components/MDXContent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { getIcon } from '@/utils/get-icon';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ContentPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories = getContentCategories();
  const paths: { category: string; slug: string }[] = [];
  
  for (const category of categories) {
    const slugs = getContentFiles(category);
    for (const slug of slugs) {
      paths.push({ category, slug });
    }
  }
  
  return paths;
}

export async function generateMetadata({ params }: ContentPageProps) {
  const content = await getSerializedContentItem(params.category, params.slug);
  
  if (!content) {
    return {
      title: 'Content Not Found',
      description: 'The requested content could not be found.'
    };
  }
  
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    authors: content.metadata.author ? [{ name: content.metadata.author }] : undefined,
  };
}

export default async function ContentPage({ params }: ContentPageProps) {
  const content = await getSerializedContentItem(params.category, params.slug);
  
  if (!content) {
    notFound();
  }
  
  const Icon = getIcon(content.metadata.icon || "FileText");
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with breadcrumbs and metadata */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href={`/${params.category}`} className="hover:text-gray-700 capitalize">
              {params.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{content.metadata.title}</span>
          </nav>
          
          {/* Content header */}
          <div className="flex items-start gap-4">
            <Icon className={`h-12 w-12 ${content.metadata.iconColor || "text-gray-600"} flex-shrink-0`} />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {content.metadata.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {content.metadata.description}
              </p>
              
              {/* Metadata badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {content.metadata.difficulty && (
                  <Badge variant="outline" className="text-sm">
                    {content.metadata.difficulty}
                  </Badge>
                )}
                {content.metadata.badgeText && (
                  <Badge variant={content.metadata.badgeVariant || "secondary"}>
                    {content.metadata.badgeText}
                  </Badge>
                )}
                {content.metadata.tags?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Additional metadata */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {content.metadata.estimatedTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{content.metadata.estimatedTime}</span>
                  </div>
                )}
                {content.metadata.author && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{content.metadata.author}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href={`/${params.category}`} className="inline-block mb-6">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {params.category}
            </Button>
          </Link>
          
          {/* MDX Content */}
          <Card>
            <CardContent className="p-8">
              <MDXContent source={content.mdxSource} />
            </CardContent>
          </Card>
          
          {/* Footer navigation */}
          <div className="mt-8 pt-8 border-t">
            <Link href={`/${params.category}`}>
              <Button variant="outline" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Browse More {params.category} Content
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}