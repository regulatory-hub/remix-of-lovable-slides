import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Globe2, TestTube, Shield, Zap, Radio } from "lucide-react";

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
    color: "bg-primary",
  },
  {
    icon: Globe2,
    title: "Global Certifications & Market Access",
    description: "Access international markets with globally recognized certifications and compliance marks.",
    services: globalServices,
    color: "bg-secondary",
  },
  {
    icon: TestTube,
    title: "Testing Services",
    description: "Comprehensive product testing including pre-compliance and customized testing solutions.",
    services: testingServices,
    color: "bg-accent",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Certification & Testing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From regulatory approvals to product testing, we provide end-to-end compliance services for your products.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden hover:shadow-elevated transition-all duration-300 group"
            >
              {/* Header */}
              <div className={`${category.color} p-6`}>
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {category.description}
                </p>
              </div>

              {/* Services List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{service.name}</span>
                        <span className="text-muted-foreground text-sm ml-1">— {service.description}</span>
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
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
