import Navbar from "@/components/Navbar";
import DynamicCard from "@/components/DynamicCard";
import { getContentItems } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Get featured content from filesystem
  const featuredContent = [
    ...getContentItems('howto'),
    ...getContentItems('tipsnips').filter(item => item.metadata.featured),
    ...getContentItems('resources').filter(item => item.metadata.featured)
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 dark:opacity-100 opacity-30" />
          
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-10 w-10 text-blue-500 dark:text-blue-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              AI Learning Hub
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
            Your comprehensive resource for AI knowledge, guides, and best practices. 
            Learn, share, and master artificial intelligence together.
          </p>
          
          <div className="flex gap-4 mt-4">
            <Link href="/howto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none px-6 py-6">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/30 px-6 py-6">
                Browse Resources
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Content Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Featured Content</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((item) => (
              <DynamicCard key={`${item.category}-${item.slug}`} item={item} />
            ))}
          </div>
          
          {/* Show message if no featured content */}
          {featuredContent.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8 p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/50">
              <p>No featured content available yet. Add some .mdx files to the content directory!</p>
            </div>
          )}
        </div>
        
        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <CategoryCard 
            title="How-To Guides" 
            description="Step-by-step tutorials to master AI concepts and techniques"
            href="/howto"
            icon={<BookIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />}
          />
          <CategoryCard 
            title="Tip Snips" 
            description="Quick tips and code snippets for common AI tasks"
            href="/tipsnips"
            icon={<ZapIcon className="h-8 w-8 text-purple-500 dark:text-purple-400" />}
          />
          <CategoryCard 
            title="Resources" 
            description="Curated collection of tools, libraries and datasets"
            href="/resources"
            icon={<DatabaseIcon className="h-8 w-8 text-green-500 dark:text-green-400" />}
          />
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p>AI Learning Hub © 2025</p>
        </div>
      </footer>
    </div>
  );
}

// Icons for categories
function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

// Category Card Component
function CategoryCard({ 
  title, 
  description, 
  href, 
  icon 
}: { 
  title: string; 
  description: string; 
  href: string; 
  icon: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white/50 dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all hover:border-blue-500/50 group">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
          <span>Explore</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
