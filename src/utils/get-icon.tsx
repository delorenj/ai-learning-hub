import { Terminal, Brain, Database, Lightbulb, FileText } from "lucide-react";

const iconMap = {
  Terminal,
  Brain, 
  Database,
  Lightbulb,
  FileText
};

export function getIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || FileText;
}