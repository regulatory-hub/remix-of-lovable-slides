import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast',
    description: 'Build presentations in minutes with a code-first workflow that scales beautifully.',
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Pixel-perfect 1920×1080 output with professional design tokens built in.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Embed live charts, interactive elements, and dynamic content effortlessly.',
  },
];

export default function Slide03Features() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium tracking-widest uppercase text-slide-accent mb-3">
            Highlights
          </p>
          <h2 className="text-4xl font-semibold text-slide-gray-900 mb-4">
            Three Key Strengths
          </h2>
          <div className="w-16 h-1 bg-slide-accent rounded-full" />
        </div>

        {/* Three columns */}
        <div className="flex-1 grid grid-cols-3 gap-8 items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-white rounded-lg border border-slide-gray-200 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-slide-accent-muted flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-slide-accent" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-semibold text-slide-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-lg text-slide-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
