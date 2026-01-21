import { Search, Map, FileText, Award, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Product & Market Understanding",
    description: "We study your product design, features, and target markets to identify the best compliance pathway.",
    color: "bg-primary",
  },
  {
    number: "02",
    icon: Map,
    title: "Regulation Mapping",
    description: "We identify all applicable standards, directives, and approvals required for your target markets.",
    color: "bg-secondary",
  },
  {
    number: "03",
    icon: FileText,
    title: "Testing & Documentation",
    description: "We coordinate product testing with accredited labs and prepare all required technical documentation.",
    color: "bg-accent",
  },
  {
    number: "04",
    icon: Award,
    title: "Certification & Market Access",
    description: "We support you through certification, market launch, and ongoing compliance maintenance.",
    color: "bg-primary",
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Our structured and transparent process ensures predictable outcomes from initial assessment to market access.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-32 left-[12%] right-[12%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Arrow between steps (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}

                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 h-full group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`relative z-10 w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <span className="font-heading text-xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/10 transition-colors">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
