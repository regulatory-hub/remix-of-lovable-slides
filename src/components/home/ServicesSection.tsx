import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ClipboardCheck, Globe2 } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Regulatory Advisory",
    description: "Interpret standards, define compliance routes, and eliminate certification uncertainty.",
  },
  {
    icon: ClipboardCheck,
    title: "Certification Management",
    description: "End-to-end coordination of testing, documentation, submission, and approval.",
  },
  {
    icon: Globe2,
    title: "Market Access Strategy",
    description: "Right certification, right sequence, right market — without delays or surprises.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            What We Do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-4 md:p-6 bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
