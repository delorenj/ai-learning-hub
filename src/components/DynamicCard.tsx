import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/utils/get-icon";
import { ContentItem } from "@/lib/content";

interface DynamicCardProps {
  item: ContentItem;
}

export default function DynamicCard({ item }: DynamicCardProps) {
  const Icon = getIcon(item.metadata.icon || "FileText");
  const hoverColorMap: Record<string, string> = {
    "text-blue-600": "group-hover:bg-blue-50",
    "text-purple-600": "group-hover:bg-purple-50", 
    "text-green-600": "group-hover:bg-green-50",
    "text-yellow-600": "group-hover:bg-yellow-50"
  };

  const hoverClass = hoverColorMap[item.metadata.iconColor || ""] || "group-hover:bg-gray-50";

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <Icon className={`h-6 w-6 ${item.metadata.iconColor || "text-gray-600"} mr-3`} />
        <div className="flex-1">
          <CardTitle className="flex items-center justify-between">
            {item.metadata.title}
            <div className="flex gap-2">
              {item.metadata.difficulty && (
                <Badge variant="outline" className="text-xs">
                  {item.metadata.difficulty}
                </Badge>
              )}
              {item.metadata.badgeText && (
                <Badge variant={item.metadata.badgeVariant || "secondary"}>
                  {item.metadata.badgeText}
                </Badge>
              )}
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {item.metadata.description}
        </CardDescription>
        {(item.metadata.tags || item.metadata.estimatedTime) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.metadata.tags?.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {item.metadata.estimatedTime && (
              <Badge variant="outline" className="text-xs text-gray-500">
                {item.metadata.estimatedTime}
              </Badge>
            )}
          </div>
        )}
        <Button variant="ghost" className={`w-full justify-between ${hoverClass}`}>
          View {item.category}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}