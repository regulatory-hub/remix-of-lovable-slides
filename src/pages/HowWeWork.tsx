import { Layout } from "@/components/layout/Layout";
import { Search, Map, TestTube, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const HowWeWork = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
              <span className="text-sm font-semibold">How We Work</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Structured & Transparent Process
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg max-w-2xl">
              Our structured and transparent process ensures predictable outcomes from initial assessment to market launch.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-6 p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number.replace("0", "")}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.65rem] top-[4.5rem] bottom-[-1.5rem] w-0.5 bg-border hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Ready to get started?</p>
            <Button asChild variant="default" size="lg">
              <a href="https://wa.me/917082130463" target="_blank" rel="noopener noreferrer">
                Get Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowWeWork;
