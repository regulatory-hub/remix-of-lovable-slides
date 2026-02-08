import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold">Contact Us</span>
          </div>
          
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
            Ready to Simplify Your Compliance Journey?
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            From BIS-CRS and ISI certification to CE marking and global market access — we provide end-to-end support for all your regulatory needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10">
            <Button asChild variant="accent" size="lg" className="text-sm md:text-base">
              <a href="https://wa.me/917082130463" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="text-sm md:text-base">
              <a href="mailto:compliance@qnstl.com">
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                Email Us
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-primary-foreground/70 text-sm">
            <a href="https://wa.me/917082130463" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 70821 30463</span>
            </a>
            <a href="mailto:compliance@qnstl.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>compliance@qnstl.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
