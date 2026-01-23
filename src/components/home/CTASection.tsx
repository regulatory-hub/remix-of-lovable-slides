import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 cta-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 italic">
            Simplify Your Regulatory Compliance Journey
          </h2>
          <p className="text-primary-foreground/75 mb-8">
            Talk to compliance professionals who manage certification — not just testing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">
                Book Compliance Consultation
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">
                Contact Our Experts
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
