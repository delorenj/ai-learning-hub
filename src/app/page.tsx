import Navbar from "@/components/Navbar";
import DynamicCard from "@/components/DynamicCard";
import { sampleContent } from "@/data/content-items";

export default function Home() {
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

        {/* Dynamic content cards - now data-driven */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sampleContent.map((item, index) => (
            <DynamicCard key={index} item={item} />
          ))}
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>AI Workflow Workshop © 2025</p>
        </div>
      </footer>
    </div>
  );
}