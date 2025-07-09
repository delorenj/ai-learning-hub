'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Custom MDX components for rich content
const mdxComponents = {
  // Custom image component with proper handling
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) return null;
    
    return (
      <div className="my-6">
        <img
          src={src}
          alt={alt || ""}
          className="rounded-lg mx-auto max-w-full h-auto"
          loading="lazy"
          {...props}
        />
        {alt && alt !== "" && (
          <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>
        )}
      </div>
    );
  },
  
  // Custom code block with syntax highlighting
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <Card className="my-4">
      <CardContent className="p-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm" {...props}>
          {children}
        </pre>
      </CardContent>
    </Card>
  ),
  
  // Custom code inline
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  
  // Custom headings with proper styling
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-medium mt-4 mb-2 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h3>
  ),
  
  // Custom paragraph styling
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  
  // Custom list styling
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 pl-6 space-y-2 text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 pl-6 space-y-2 text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="list-disc" {...props}>
      {children}
    </li>
  ),
  
  // Custom blockquote
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </blockquote>
  ),
  
  // Custom table styling
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props}>
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-semibold" {...props}>
      {children}
    </th>
  ),
  
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" {...props}>
      {children}
    </td>
  ),
  
  // Custom components for interactive elements
  Badge: ({ children, variant = "secondary", ...props }: { children: React.ReactNode; variant?: "default" | "secondary" | "destructive" | "outline" }) => (
    <Badge variant={variant} {...props}>
      {children}
    </Badge>
  ),
  
  // TODO component for development notes
  TODO: ({ children }: { children: React.ReactNode }) => (
    <Card className="my-4 border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-yellow-700">TODO</Badge>
          <span className="text-yellow-800 dark:text-yellow-200">{children}</span>
        </div>
      </CardContent>
    </Card>
  ),

  // Video component for embedding videos
  Video: ({ src, title, width = "100%", height = "400", ...props }: { 
    src: string; 
    title?: string; 
    width?: string; 
    height?: string;
    [key: string]: any;
  }) => {
    // Check if it's a YouTube URL
    const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
    const isVimeo = src.includes('vimeo.com');
    
    if (isYouTube) {
      // Extract video ID and create embed URL
      const videoId = src.includes('youtu.be') 
        ? src.split('youtu.be/')[1]?.split('?')[0]
        : src.split('watch?v=')[1]?.split('&')[0];
      
      return (
        <Card className="my-6">
          <CardContent className="p-0">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title || "Demo Video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                {...props}
              />
            </div>
          </CardContent>
        </Card>
      );
    }
    
    if (isVimeo) {
      // Extract video ID from Vimeo URL
      const videoId = src.split('vimeo.com/')[1]?.split('?')[0];
      
      return (
        <Card className="my-6">
          <CardContent className="p-0">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                title={title || "Demo Video"}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                {...props}
              />
            </div>
          </CardContent>
        </Card>
      );
    }
    
    // Default to HTML5 video for direct video files
    return (
      <Card className="my-6">
        <CardContent className="p-0">
          <video
            src={src}
            controls
            width={width}
            height={height}
            className="w-full rounded-lg"
            title={title}
            {...props}
          >
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>
    );
  },
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  className?: string;
}

function MDXContentInner({ source, className }: MDXContentProps) {
  return (
    <div className={`prose prose-gray max-w-none dark:prose-invert ${className || ''}`}>
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  );
}

// Export as dynamic component to prevent SSR issues
export default dynamic(() => Promise.resolve(MDXContentInner), {
  ssr: false
});