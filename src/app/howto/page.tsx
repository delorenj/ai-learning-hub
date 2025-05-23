"use client";

import React from "react";
import { ContentCard } from "@/components/ui/content-card";

const howToCards = [
  {
    title: "Getting Started",
    description: "Learn how to set up your environment and begin using the platform.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
  {
    title: "Create Your First Project",
    description: "Step-by-step guide to creating and managing your first project.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6"
        />
      </svg>
    ),
  },
  {
    title: "Invite Team Members",
    description: "How to add collaborators and manage team permissions.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="8" cy="12" r="3" />
        <circle cx="16" cy="12" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
  },
  {
    title: "Explore Features",
    description: "Overview of key features and how to leverage them for productivity.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <polygon
          points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "FAQ & Troubleshooting",
    description: "Find answers to common questions and resolve issues quickly.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16v.01M12 8a4 4 0 0 1 4 4c0 1.5-1 2.5-2 3"
        />
      </svg>
    ),
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