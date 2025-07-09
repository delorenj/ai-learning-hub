import React from "react";
import DynamicCard from "@/components/DynamicCard";
import { getContentItems } from "@/lib/content";
import Navbar from "@/components/Navbar";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TipSnipsPage() {
  const tipsnipItems = getContentItems('tipsnips');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tip Snips
          </h1>
          <p className="text-xl text-gray-600">
            Quick tips and snippets for everyday development
          </p>
        </div>

        {tipsnipItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tipsnipItems.map((item) => (
              <DynamicCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            <p>No tip snips available yet. Add some .mdx files to the content/tipsnips directory!</p>
          </div>
        )}
      </main>
    </div>
  );
}