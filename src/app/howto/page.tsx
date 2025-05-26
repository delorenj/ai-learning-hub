"use client";

import React from "react";
import { ContentCard } from "@/components/ui/content-card";
import { Play, FolderPlus, UserPlus, Star, HelpCircle } from "lucide-react";

const howToCards = [
  {
    title: "Getting Started",
    description: "Learn how to set up your environment and begin using the platform.",
    icon: <Play className="w-8 h-8 text-primary" />,
  },
  {
    title: "Create Your First Project",
    description: "Step-by-step guide to creating and managing your first project.",
    icon: <FolderPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Invite Team Members",
    description: "How to add collaborators and manage team permissions.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Explore Features",
    description: "Overview of key features and how to leverage them for productivity.",
    icon: <Star className="w-8 h-8 text-primary" />,
  },
  {
    title: "FAQ & Troubleshooting",
    description: "Find answers to common questions and resolve issues quickly.",
    icon: <HelpCircle className="w-8 h-8 text-primary" />,
  },
];

export default function HowToPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">How-To Guides</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {howToCards.map((card, idx) => (
          <ContentCard
            key={idx}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </main>
  );
}