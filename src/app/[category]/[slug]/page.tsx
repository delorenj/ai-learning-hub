import { getSerializedContentItem } from '@/lib/content';
import MDXContent from '@/components/MDXContent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { getIcon } from '@/utils/get-icon';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

interface ContentPageProps {
  params: {
    category: string;
    slug: string;
  };
}

// Force dynamic rendering - content will be loaded on each request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: ContentPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const content = await getSerializedContentItem(resolvedParams.category, resolvedParams.slug);
  
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
  const resolvedParams = await params;
  const content = await getSerializedContentItem(resolvedParams.category, resolvedParams.slug);
  
  if (!content) {
    notFound();
  }
  
  const Icon = getIcon(content.metadata.icon || "FileText");
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Header with breadcrumbs and metadata */}
      <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link>
            <span>/</span>
            <Link href={`/${resolvedParams.category}`} className="hover:text-gray-700 dark:hover:text-gray-200 capitalize">
              {resolvedParams.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{content.metadata.title}</span>
          </nav>
          
          {/* Content header */}
          <div className="flex items-start gap-4">
            <Icon className={`h-12 w-12 ${content.metadata.iconColor || "text-gray-600 dark:text-gray-400"} flex-shrink-0`} />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {content.metadata.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {content.metadata.description}
              </p>
              
              {/* Metadata badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {content.metadata.difficulty && (
                  <Badge variant="outline" className="text-sm dark:border-gray-700">
                    {content.metadata.difficulty}
                  </Badge>
                )}
                {content.metadata.badgeText && (
                  <Badge variant={content.metadata.badgeVariant || "secondary"}>
                    {content.metadata.badgeText}
                  </Badge>
                )}
                {content.metadata.tags?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm dark:border-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Additional metadata */}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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
          <Link href={`/${resolvedParams.category}`} className="inline-block mb-6">
            <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {resolvedParams.category}
            </Button>
          </Link>
          
          {/* MDX Content */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <MDXContent source={content.mdxSource} />
            </CardContent>
          </Card>
          
          {/* Footer navigation */}
          <div className="mt-8 pt-8 border-t dark:border-gray-800">
            <Link href={`/${resolvedParams.category}`}>
              <Button variant="outline" className="w-full dark:border-gray-700 dark:hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Browse More {resolvedParams.category} Content
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}