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
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            What We Do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
