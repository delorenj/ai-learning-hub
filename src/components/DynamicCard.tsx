import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/utils/get-icon";
import { ContentItem } from "@/lib/content";
import Link from "next/link";

interface DynamicCardProps {
  item: ContentItem;
}

export default function DynamicCard({ item }: DynamicCardProps) {
  const Icon = getIcon(item.metadata.icon || "FileText");
  
  // Color mapping for icons and hover effects
  const colorMap: Record<string, { icon: string, border: string, bg: string }> = {
    "text-blue-500": { 
      icon: "text-blue-500", 
      border: "group-hover:border-blue-500/50", 
      bg: "group-hover:bg-blue-900/20" 
    },
    "text-purple-500": { 
      icon: "text-purple-500", 
      border: "group-hover:border-purple-500/50", 
      bg: "group-hover:bg-purple-900/20" 
    },
    "text-green-500": { 
      icon: "text-green-500", 
      border: "group-hover:border-green-500/50", 
      bg: "group-hover:bg-green-900/20" 
    },
    "text-yellow-500": { 
      icon: "text-yellow-500", 
      border: "group-hover:border-yellow-500/50", 
      bg: "group-hover:bg-yellow-900/20" 
    },
    "text-red-500": { 
      icon: "text-red-500", 
      border: "group-hover:border-red-500/50", 
      bg: "group-hover:bg-red-900/20" 
    },
  };

  const colorStyle = colorMap[item.metadata.iconColor || ""] || {
    icon: "text-blue-500",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-900/20"
  };

  return (
    <Card className={`bg-gray-900 border border-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group ${colorStyle.border}`}>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className={`p-2 rounded-md bg-gray-800 ${colorStyle.icon}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 ml-3">
          <CardTitle className="flex items-center justify-between text-white">
            {item.metadata.title}
            <div className="flex gap-2">
              {item.metadata.difficulty && (
                <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">
                  {item.metadata.difficulty}
                </Badge>
              )}
              {item.metadata.badgeText && (
                <Badge variant={item.metadata.badgeVariant || "secondary"} className="text-xs">
                  {item.metadata.badgeText}
                </Badge>
              )}
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-gray-400">
          {item.metadata.description}
        </CardDescription>
        {(item.metadata.tags || item.metadata.estimatedTime) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.metadata.tags?.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-gray-700 text-gray-400">
                {tag}
              </Badge>
            ))}
            {item.metadata.estimatedTime && (
              <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">
                {item.metadata.estimatedTime}
              </Badge>
            )}
          </div>
        )}
        <Link href={`/${item.category}/${item.slug}`}>
          <Button 
            variant="ghost" 
            className={`w-full justify-between text-gray-300 hover:text-white ${colorStyle.bg}`}
          >
            View {item.category}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
