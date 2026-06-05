import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Globe } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
            <Shield className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Trusted Compliance Partner</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Regulatory Compliance Solutions Testing, Certification & Regulatory Compliance
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-delay-1">
            Helping manufacturers and importers meet Indian and global regulatory requirements with speed, clarity, and confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-2">
            <Button asChild variant="hero" size="xl">
              <Link to="/services">
                View Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-primary-foreground/20 animate-fade-in-delay-3">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">10-15 Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">Global Market Access</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">100+ Certifications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210, 20%, 98%)" />
        </svg>
      </div>
    </section>
  );
};
