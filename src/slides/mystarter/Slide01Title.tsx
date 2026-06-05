import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Presentation } from 'lucide-react';

export default function Slide01Title() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col justify-center items-center h-full px-20 py-16 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/20">
          <Presentation className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-light tracking-tight text-white mb-4 leading-tight">
          Your Presentation
          <br />
          <span className="font-semibold">Starts Here</span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-slide-accent mb-8 rounded-full" />

        {/* Subtitle */}
        <p className="text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-12">
          Built with SlideForge — edit these slides to tell your story
        </p>

        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-white/60">
          <span>June 2025</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>Your Name</span>
        </div>

        {/* Keyboard hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <p className="text-sm text-white/60">
            Press <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs mx-1 border border-white/20">→</kbd> to navigate
          </p>
        </div>
      </div>
    </MSSlideLayout>
  );
}
