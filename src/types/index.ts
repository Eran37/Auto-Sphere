import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
}

export interface AutomationPlatform {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
} 