import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Map, TestTube, FileCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Product & Market Understanding",
    description: "We study your product design, features, and target markets to identify compliance requirements.",
  },
  {
    number: "02",
    icon: Map,
    title: "Regulation Mapping",
    description: "Identification of applicable standards, directives, and approvals needed for your target markets.",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Testing & Documentation",
    description: "Coordination of testing with accredited labs and preparation of all technical documents.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Certification & Submission",
    description: "Complete application management, submission, and follow-up with regulatory authorities.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Market Launch & Maintenance",
    description: "Support for market registration, renewals, and ongoing regulatory maintenance.",
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <span className="text-sm font-semibold">How We Work</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Structured & Transparent Process
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Our structured and transparent process ensures predictable outcomes from initial assessment to market launch.
          </p>
        </div>

        {/* Steps - Timeline Layout */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-4 md:p-5 bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
              >
                {/* Step Number with Icon */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
                      <step.icon className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </div>
                    {/* Number badge */}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.number.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 transform translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-accent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <Button asChild size="lg" className="group">
            <Link to="/how-we-work">
              Learn More About Our Process
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
