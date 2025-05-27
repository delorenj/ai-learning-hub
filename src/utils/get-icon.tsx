import { Terminal, Brain, Database, Lightbulb, FileText, GraduationCap } from "lucide-react";

const iconMap = {
  Terminal,
  Brain, 
  Database,
  Lightbulb,
  FileText,
  GraduationCap
};

export function getIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || FileText;
}