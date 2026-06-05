import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { CheckCircle } from 'lucide-react';

const points = [
  'This is your overview slide — set the stage for your audience',
  'Replace these bullets with your key message or agenda items',
  'Keep text concise: one idea per bullet for maximum impact',
  'Use the sidebar on the left to jump between slides',
];

export default function Slide02Overview() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-slide-accent mb-3">
            Overview
          </p>
          <h2 className="text-4xl font-semibold text-slide-gray-900 mb-4">
            What We Will Cover
          </h2>
          <div className="w-16 h-1 bg-slide-accent rounded-full" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-6 max-w-4xl">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-slide-accent-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-slide-accent" strokeWidth={2} />
                </div>
                <p className="text-2xl text-slide-gray-700 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 border-t border-slide-gray-200">
          <p className="text-sm text-slide-gray-400">
            Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slide-gray-100 text-slide-gray-600 font-mono text-xs">G</kbd> to see all slides at once
          </p>
        </div>
      </div>
    </MSSlideLayout>
  );
}
