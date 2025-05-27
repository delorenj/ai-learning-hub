import React from "react";
import DynamicCard from "@/components/DynamicCard";
import { getContentItems } from "@/lib/content";
import Navbar from "@/components/Navbar";

export default function HowToPage() {
  const howtoItems = getContentItems('howto');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How-To Guides
          </h1>
          <p className="text-xl text-gray-600">
            Step-by-step guides to help you master AI development
          </p>
        </div>

        {howtoItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howtoItems.map((item) => (
              <DynamicCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            <p>No how-to guides available yet. Add some .mdx files to the content/howto directory!</p>
          </div>
        )}
      </main>
    </div>
  );
}