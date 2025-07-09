import React from "react";
import Navbar from "@/components/Navbar";
import { getContentItems } from "@/lib/content";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HowToPage() {
  // Get actual content from filesystem instead of mock data
  const howtoItems = getContentItems('howto');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How-To Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Step-by-step guides to help you master AI development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {howtoItems.map((item) => (
            <Link 
              key={item.slug}
              href={`/howto/${item.slug}`}
              className="block"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col p-6 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className={`mr-3 ${item.metadata.iconColor || "text-blue-500 dark:text-blue-400"}`}>
                    {getIconEmoji(item.metadata.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.metadata.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.metadata.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.metadata.tags?.map((tag, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {item.metadata.estimatedTime && (
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                      {item.metadata.estimatedTime}
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <div className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 text-sm flex justify-between items-center">
                    View guide
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Show message if no content */}
        {howtoItems.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8 p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/50 max-w-2xl mx-auto">
            <p>No how-to guides available yet. Add some .mdx files to the content/howto directory!</p>
          </div>
        )}
      </main>
    </div>
  );
}

// Helper function to get emoji based on icon name
function getIconEmoji(icon?: string) {
  switch (icon) {
    case "Terminal":
      return "🖥️";
    case "FileText":
      return "📄";
    case "Lightbulb":
      return "💡";
    case "Database":
      return "🗄️";
    default:
      return "📝";
  }
}
