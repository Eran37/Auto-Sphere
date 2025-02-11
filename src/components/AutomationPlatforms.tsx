import React from "react";
import { platforms } from "../data/automationPlatforms";
import type { AutomationPlatform } from "../types/mongodb";
import { LucideIcon } from "lucide-react";

interface PlatformCardProps {
  platform: {
    name: string;
    description: string;
    icon: LucideIcon;
  };
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  const Icon = platform.icon;
  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
      <p className="text-gray-400">{platform.description}</p>
    </div>
  );
};

export default function AutomationPlatforms() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          הפלטפורמות שלנו
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
