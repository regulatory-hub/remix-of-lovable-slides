import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Clock, Users, Network, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10–15 Years of Global Compliance Expertise",
    description: "Hands-on experience managing compliance across India, Europe, USA, and other regulated markets.",
  },
  {
    icon: Clock,
    title: "Quick, Simplified & Transparent Processes",
    description: "Clear timelines, predictable costs, and streamlined workflows that save you time.",
  },
  {
    icon: Users,
    title: "Single-Point Coordination",
    description: "One dedicated contact for your entire compliance journey from start to finish.",
  },
  {
    icon: Network,
    title: "Strong Partner Laboratory Network",
    description: "Established relationships with BIS-recognized and internationally accredited testing labs.",
  },
  {
    icon: Shield,
    title: "Trusted by Manufacturers & Importers",
    description: "Proven track record with OEMs, brand owners, and tender suppliers across industries.",
  },
];

const stats = [
  { value: "10-15+", label: "Years Experience" },
  { value: "500+", label: "Products Certified" },
  { value: "20+", label: "Countries Covered" },
  { value: "100%", label: "Success Rate" },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Why Clients Trust QnS Testing Lab
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            We remove the complexity of regulatory compliance and provide a clear, structured, and reliable path to market access.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Reasons List */}
          <div className="space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-200"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <reason.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-6">
              Our Track Record
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                <strong className="text-primary-foreground">Quick and Simplified</strong> — a philosophy that defines how we approach testing, certification, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
