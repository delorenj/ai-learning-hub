// Simple content data structure for dynamic cards
export interface ContentItem {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  iconColor: string;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  category: string;
  href?: string;
}

export const sampleContent: ContentItem[] = [
  {
    title: "AI Command Line Tools",
    description: "Learn how to set up and use AI from the command line.",
    icon: "Terminal",
    iconColor: "text-blue-600",
    badgeText: "New",
    badgeVariant: "secondary",
    category: "Guide",
    href: "/guides/ai-cli-tools"
  },
  {
    title: "Project-Based Memory",
    description: "Add memory capabilities to your Cursor threads.",
    icon: "Brain", 
    iconColor: "text-purple-600",
    badgeText: "Popular",
    badgeVariant: "secondary",
    category: "Guide",
    href: "/guides/project-memory"
  },
  {
    title: "RAG Applications",
    description: "Create and fine-tune Retrieval-Augmented Generation applications.",
    icon: "Database",
    iconColor: "text-green-600",
    category: "Tutorial",
    href: "/tutorials/rag-applications"
  },
  {
    title: "Prompt Engineering",
    description: "Implement best practices for prompt engineering.",
    icon: "Lightbulb",
    iconColor: "text-yellow-600", 
    category: "Guide",
    href: "/guides/prompt-engineering"
  }
];