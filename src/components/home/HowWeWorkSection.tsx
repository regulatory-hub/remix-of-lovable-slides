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
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Our Compliance Approach
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-4 md:p-6 bg-muted/50 rounded-lg border border-border"
            >
              {/* Number Badge */}
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="font-heading text-xl md:text-2xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
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
