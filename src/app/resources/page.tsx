import React from "react";
import DynamicCard from "@/components/DynamicCard";
import { getContentItems } from "@/lib/content";
import Navbar from "@/components/Navbar";

export default function ResourcesPage() {
  const resourceItems = getContentItems('resources');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600">
            Useful tools and resources for AI development
          </p>
        </div>

        {resourceItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resourceItems.map((item) => (
              <DynamicCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            <p>No resources available yet. Add some .mdx files to the content/resources directory!</p>
          </div>
        )}
      </main>
    </div>
  );
}