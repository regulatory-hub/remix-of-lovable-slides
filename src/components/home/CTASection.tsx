import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 cta-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-full md:max-w-2xl text-center md:text-left">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 md:mb-4 italic">
            Simplify Your Regulatory Compliance Journey
          </h2>
          <p className="text-primary-foreground/75 mb-6 md:mb-8 text-sm md:text-base">
            Talk to compliance professionals who manage certification — not just testing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <Button asChild variant="accent" size="default" className="w-full sm:w-auto">
              <Link to="/contact">
                Book Consultation
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="default" className="w-full sm:w-auto">
              <Link to="/contact">
                Contact Experts
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
