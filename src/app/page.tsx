import Navbar from "@/components/Navbar";
import DynamicCard from "@/components/DynamicCard";
import { getContentItems } from "@/lib/content";

export default function Home() {
  // Get featured content from filesystem
  const featuredContent = [
    ...getContentItems('howto').filter(item => item.metadata.featured),
    ...getContentItems('tipsnips').filter(item => item.metadata.featured),
    ...getContentItems('resources').filter(item => item.metadata.featured)
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Triumph AI Hub
          </h1>
          <p className="text-xl text-gray-600">
            Your source of guides, and a place to share ideas.
          </p>
        </div>

        {/* Featured content from filesystem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredContent.map((item) => (
            <DynamicCard key={`${item.category}-${item.slug}`} item={item} />
          ))}
        </div>
        
        {/* Show message if no featured content */}
        {featuredContent.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p>No featured content available yet. Add some .mdx files to the content directory!</p>
          </div>
        )}
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>AI Workflow Workshop © 2025</p>
        </div>
      </footer>
    </div>
  );
}