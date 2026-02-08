import { CheckCircle2, Clock, Users, Network, Shield, Award } from "lucide-react";

const reasons = [
  { icon: Award, title: "10–15 Years of Global Compliance Expertise" },
  { icon: Clock, title: "Quick, Simplified & Transparent Processes" },
  { icon: Users, title: "Single-Point Coordination" },
  { icon: Network, title: "Strong Partner Laboratory Network" },
  { icon: Shield, title: "Trusted by Manufacturers & Importers" },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Why Clients Trust QnS Testing Lab
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-200"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <reason.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-foreground">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
