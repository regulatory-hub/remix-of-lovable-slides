const steps = [
  {
    number: "01",
    title: "Requirement Assessment",
    description: "Analyze product specifications, target markets, applicable standards mapping.",
  },
  {
    number: "02",
    title: "Compliance Strategy",
    description: "Define testing, certification path, documentation, and timeline requirements.",
  },
  {
    number: "03",
    title: "Execution Management",
    description: "Coordination, follow-up, approval management, and market registration.",
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Our Compliance Approach
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 bg-muted/50 rounded-lg border border-border"
            >
              {/* Number Badge */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-heading text-2xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
