import { Search, Map, FileText, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Product & Market Understanding",
    description: "We study your product design, features, and target markets to identify the best compliance pathway.",
  },
  {
    number: "02",
    icon: Map,
    title: "Regulation Mapping",
    description: "We identify all applicable standards, directives, and approvals required for your target markets.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Testing & Documentation",
    description: "We coordinate product testing with accredited labs and prepare all required technical documentation.",
  },
  {
    number: "04",
    icon: Award,
    title: "Certification & Market Access",
    description: "We support you through certification, market launch, and ongoing compliance maintenance.",
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process ensures efficient compliance from initial assessment to market access.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 rounded-full hero-gradient flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <span className="font-heading text-xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
