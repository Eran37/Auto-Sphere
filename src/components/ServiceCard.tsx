import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons];

  return (
    <div className="card-gradient rounded-lg p-6 hover:scale-105 transition-transform duration-300 silver-border neon-glow flex flex-col items-center">
      <div className="flex justify-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-md bg-gradient-to-r from-[#00f7ff] via-[#94a3b8] to-[#b400ff] text-white mb-4">
          {Icon && <Icon className="h-8 w-8" />}
        </div>
      </div>
      <h3 className="text-xl font-medium text-gray-100 mb-3 silver-highlight text-center">{service.title}</h3>
      <p className="text-lg text-gray-300 mb-5 text-center">{service.description}</p>
      <div className="space-y-3 w-full">
        {service.examples.map((example, index) => (
          <div key={index} className="flex items-center justify-center text-base text-gray-400">
            <LucideIcons.CheckCircle className="h-5 w-5 text-[#94a3b8] ml-2" />
            <span className="text-center">{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}