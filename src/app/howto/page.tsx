import React from "react";
import Navbar from "@/components/Navbar";

// Mock data for the How-To page
const mockHowtoItems = [
  {
    slug: "gptme",
    title: "How to Use GPTME",
    description: "Learn how to use GPTME for terminal-based AI assistance and automation",
    icon: "Terminal",
    iconColor: "text-green-600",
    badgeText: "Popular",
    badgeVariant: "secondary",
    difficulty: "beginner",
    tags: ["AI", "Terminal", "Automation"],
    estimatedTime: "15 min"
  },
  {
    slug: "memory-bank-mcp",
    title: "How to Install and Configure Memory Bank MCP",
    description: "A beginner's guide to setting up @delorenj/memory-bank-mcp in Cursor and Codex",
    icon: "Database",
    iconColor: "text-purple-600",
    difficulty: "beginner",
    tags: ["AI", "MCP", "Memory Bank", "Cursor", "Codex"],
    estimatedTime: "25 min"
  },
  {
    slug: "next-js-mdx",
    title: "Using MDX with Next.js",
    description: "A comprehensive guide to integrating MDX content in your Next.js application",
    icon: "FileText",
    iconColor: "text-blue-600",
    difficulty: "intermediate",
    tags: ["Next.js", "MDX", "React"],
    estimatedTime: "20 min"
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Best Practices",
    description: "Learn the best practices for using Tailwind CSS in your projects",
    icon: "Lightbulb",
    iconColor: "text-yellow-600",
    tags: ["CSS", "Tailwind", "Frontend"],
    estimatedTime: "10 min"
  }
];

export default function HowToPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockHowtoItems.map((item) => (
            <div 
              key={item.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <div className={`mr-3 ${item.iconColor || "text-gray-600"}`}>
                  {item.icon === "Terminal" && "🖥️"}
                  {item.icon === "FileText" && "📄"}
                  {item.icon === "Lightbulb" && "💡"}
                  {item.icon === "Database" && "🗄️"}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags?.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {item.estimatedTime && (
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                    {item.estimatedTime}
                  </span>
                )}
              </div>
              <div className="mt-auto">
                <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 text-sm flex justify-between items-center">
                  View guide
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}