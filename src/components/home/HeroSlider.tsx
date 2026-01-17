import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroLabTesting from "@/assets/hero-lab-testing.jpg";
import heroGlobalCompliance from "@/assets/hero-global-compliance.jpg";
import heroCertification from "@/assets/hero-certification.jpg";

const slides = [
  {
    id: 1,
    image: heroLabTesting,
    badge: "State-of-the-Art Testing",
    headline: "Quick & Simplified Testing, Certification & Regulatory Compliance",
    subheadline: "Helping manufacturers and importers meet Indian and global regulatory requirements with speed, clarity, and confidence.",
  },
  {
    id: 2,
    image: heroGlobalCompliance,
    badge: "Global Market Access",
    headline: "Certifications for India, Europe, USA & Beyond",
    subheadline: "Navigate complex international regulations with our expert guidance. CE, FCC, BIS, UKCA - we handle it all.",
  },
  {
    id: 3,
    image: heroCertification,
    badge: "Trusted Compliance Partner",
    headline: "From Pre-Compliance to Market Launch",
    subheadline: "End-to-end support for your product certification journey. Single-window coordination for all your compliance needs.",
  },
];

const trustIndicators = [
  { icon: CheckCircle, text: "10-15 Years Experience" },
  { icon: Globe, text: "Global Market Access" },
  { icon: Shield, text: "100+ Certifications" },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-[90vh] flex items-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            key={`badge-${currentSlide}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in"
          >
            <Shield className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              {slides[currentSlide].badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            key={`headline-${currentSlide}`}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight"
          >
            {slides[currentSlide].headline}
          </h1>

          {/* Subheadline */}
          <p
            key={`subheadline-${currentSlide}`}
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl animate-fade-in-delay-1"
          >
            {slides[currentSlide].subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-delay-2">
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
          <div className="flex flex-wrap gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-in-delay-3">
            {trustIndicators.map((indicator) => (
              <div
                key={indicator.text}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <indicator.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={() => handleManualNavigation(prevSlide)}
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleManualNavigation(() => setCurrentSlide(index));
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary-foreground"
                    : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleManualNavigation(nextSlide)}
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210, 20%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
};
