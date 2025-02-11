import React from 'react';
import * as LucideIcons from 'lucide-react';
import { AutomationPlatform } from '../types';
import { automationPlatforms } from '../data/automationPlatforms';

export default function AutomationPlatforms() {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold gradient-text sm:text-4xl">
            אוטומציה מותאמת לעסק שלך
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            פתרונות פשוטים שחוסכים לך זמן וכסף
          </p>
          <p className="mt-2 text-gray-400">
            הנה כמה דוגמאות איך אוטומציה יכולה לעזור לעסק שלך
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationPlatforms.map((platform) => {
            const Icon = LucideIcons[platform.icon as keyof typeof LucideIcons];
            
            return (
              <div key={platform.id} className="card-gradient rounded-lg p-8 hover:scale-105 transition-transform duration-300 border border-gray-800 neon-glow flex flex-col items-center">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-md bg-gradient-to-r from-[#00f7ff] to-[#b400ff] text-white">
                    {Icon && <Icon className="h-8 w-8" />}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4 text-center">{platform.name}</h3>
                <p className="text-lg text-gray-300 mb-6 text-center">{platform.description}</p>
                <div className="flex flex-col items-center space-y-4 mt-auto">
                  {platform.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center w-full">
                      <div className="w-8 flex-shrink-0 flex justify-center">
                        <LucideIcons.Bot className="h-5 w-5 text-[#00f7ff]" />
                      </div>
                      <span className="text-base text-gray-400 text-center">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#00f7ff] to-[#b400ff] hover:opacity-90 transition-opacity duration-300 neon-glow"
          >
            <LucideIcons.Bot className="ml-2 h-5 w-5" />
            רוצה לשמוע איך אוטומציה יכולה לעזור לעסק שלך?
          </a>
        </div>
      </div>
    </section>
  );
}