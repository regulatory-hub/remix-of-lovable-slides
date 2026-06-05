import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { ArrowRight, Mail } from 'lucide-react';

export default function Slide04CTA() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col justify-center items-center h-full px-20 py-16 text-center">
        {/* Kicker */}
        <p className="text-sm font-medium tracking-widest uppercase text-slide-accent-light mb-6">
          Next Steps
        </p>

        {/* Headline */}
        <h2 className="text-5xl font-semibold text-white mb-6 leading-tight max-w-3xl">
          Ready to Make It Yours?
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-white/70 font-light max-w-2xl leading-relaxed mb-12">
          Customize these slides, add your content, and deliver a presentation that stands out.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-slide-accent rounded-lg">
            <span className="text-white font-medium text-lg">Get Started</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </div>

          <div className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-lg">
            <Mail className="w-5 h-5 text-white/80" />
            <span className="text-white/80 text-lg">hello@example.com</span>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <p className="text-sm text-white/40">
            Edit <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">src/slides/mystarter/</code> to customize
          </p>
        </div>
      </div>
    </MSSlideLayout>
  );
}
