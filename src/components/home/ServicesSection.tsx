import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe2, TestTube, CheckCircle } from "lucide-react";

const indianServices = [
  { name: "BIS-CRS", description: "Compulsory Registration Scheme" },
  { name: "ISI Certification", description: "Indian Standards Institute Mark" },
  { name: "WPC ETA", description: "Wireless Planning & Coordination" },
  { name: "TEC / MTCTE", description: "Telecom Equipment Certification" },
  { name: "EPR Certification", description: "Extended Producer Responsibility" },
];

const globalServices = [
  { name: "CE Marking", description: "European Conformity" },
  { name: "CB Certification", description: "IECEE Scheme" },
  { name: "IEC Standards Testing", description: "International Standards" },
  { name: "FCC", description: "US Federal Communications" },
  { name: "UKCA", description: "UK Conformity Assessed" },
];

const testingServices = [
  { name: "Electrical Safety", description: "Product Safety Testing" },
  { name: "EMC / EMI", description: "Electromagnetic Compatibility" },
  { name: "RF Testing", description: "Radio Frequency Tests" },
  { name: "LM-79 Photometric", description: "LED Performance Testing" },
  { name: "IP Testing", description: "Ingress Protection Rating" },
];

const serviceCategories = [
  {
    icon: Shield,
    title: "Indian Regulatory Approvals",
    description: "Meet mandatory Indian regulatory requirements for legal sale, import, tenders, and government procurement.",
    services: indianServices,
    color: "from-primary to-primary/80",
    iconBg: "bg-primary",
  },
  {
    icon: Globe2,
    title: "Global Certifications & Market Access",
    description: "Access international markets with globally recognized certifications and compliance marks.",
    services: globalServices,
    color: "from-secondary to-secondary/80",
    iconBg: "bg-secondary",
  },
  {
    icon: TestTube,
    title: "Testing Services",
    description: "Comprehensive product testing including pre-compliance and customized testing solutions.",
    services: testingServices,
    color: "from-accent to-accent/80",
    iconBg: "bg-accent",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Certification & Testing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From regulatory approvals to product testing, we provide end-to-end compliance services to help you enter markets confidently.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Services List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-start gap-3 group/item">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground group-hover/item:text-primary transition-colors">{service.name}</span>
                        <span className="text-muted-foreground text-sm block">{service.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
