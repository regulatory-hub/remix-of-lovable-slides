import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroLabTesting from "@/assets/hero-lab-testing.jpg";
import heroGlobalCompliance from "@/assets/hero-global-compliance.jpg";
import heroCertification from "@/assets/hero-certification.jpg";

const slides = [
  {
    id: 1,
    image: heroLabTesting,
    headline: "Regulatory Compliance Solutions",
    subline: "Regulatory Compliance",
    description: "We help manufacturers and importers navigate complex testing and certification requirements — efficiently, accurately, and transparently.",
  },
  {
    id: 2,
    image: heroGlobalCompliance,
    headline: "India & Global",
    subline: "Market Access",
    description: "BIS-CRS, ISI, WPC ETA, TEC/MTCTE for India. CE, CB, FCC, UKCA for international markets. One partner for all your compliance needs.",
  },
  {
    id: 3,
    image: heroCertification,
    headline: "From Pre-Compliance",
    subline: "To Market Launch",
    description: "End-to-end support from early design stages through final certification, market launch, and ongoing regulatory maintenance.",
  },
];

const certifications = ["BIS-CRS", "ISI", "WPC", "TEC", "CE", "CB"];

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

  const handlePrev = () => {
    setIsAutoPlaying(false);
    prevSlide();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    nextSlide();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden hero-gradient">
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 tech-pattern opacity-30" />
      
      {/* Background Image with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-20" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}

      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 right-20 w-64 h-64 border border-accent/20 rounded-full" />
        <div className="absolute top-32 right-32 w-48 h-48 border border-accent/30 rounded-full" />
        {/* Shield Icon */}
        <div className="absolute top-1/4 right-[15%] hidden lg:flex items-center justify-center w-32 h-32 border-2 border-accent/40 rounded-full bg-accent/10">
          <Shield className="h-16 w-16 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32 min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center">
        <div className="max-w-full md:max-w-2xl">
          {/* Company Name Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4 animate-fade-in">
            <span className="text-xs md:text-sm font-semibold">BISCRS Consultant</span>
          </div>

          {/* Headline */}
          <h1
            key={`headline-${currentSlide}`}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-2 animate-fade-in leading-tight"
          >
            {slides[currentSlide].headline}
          </h1>
          <h2
            key={`subline-${currentSlide}`}
            className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground/90 mb-4 md:mb-6 animate-fade-in-delay-1"
          >
            {slides[currentSlide].subline}
          </h2>

          {/* Description */}
          <p
            key={`description-${currentSlide}`}
            className="text-sm sm:text-base lg:text-lg text-primary-foreground/75 mb-6 md:mb-8 max-w-xl animate-fade-in-delay-2 leading-relaxed"
          >
            {slides[currentSlide].description}
          </p>

          {/* Certifications - Scrollable on mobile */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-6 md:mb-10 animate-fade-in-delay-2">
            {certifications.map((cert, index) => (
              <span key={cert} className="flex items-center gap-1 text-primary-foreground/80 text-xs sm:text-sm">
                {index > 0 && <span className="text-primary-foreground/40 mr-1 md:mr-3 hidden sm:inline">|</span>}
                <Check className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                {cert}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-delay-3">
            <Button asChild variant="accent" size="lg" className="text-sm md:text-base">
              <a href="https://wa.me/917082130463" target="_blank" rel="noopener noreferrer">
                Request Consultation
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="text-sm md:text-base">
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4">
          <button
            onClick={handlePrev}
            className="p-2 md:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all duration-200 hover:scale-110 border border-primary-foreground/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5 md:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-6 md:w-8 bg-accent"
                    : "w-1.5 md:w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 md:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all duration-200 hover:scale-110 border border-primary-foreground/20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
