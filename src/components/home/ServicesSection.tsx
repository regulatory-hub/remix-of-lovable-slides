import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Shield, Globe2, Radio, Leaf, Zap, TestTube } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "BIS-CRS Certification",
    description: "Bureau of Indian Standards Compulsory Registration for electronics and IT products sold in India.",
  },
  {
    icon: Shield,
    title: "ISI Certification",
    description: "Mandatory licensing under BIS for products impacting public safety, health, and infrastructure.",
  },
  {
    icon: Radio,
    title: "WPC ETA Certification",
    description: "Equipment Type Approval for wireless products like Wi-Fi, Bluetooth, and IoT devices.",
  },
  {
    icon: Globe2,
    title: "TEC / MTCTE Certification",
    description: "Mandatory testing and certification for telecom equipment connected to Indian networks.",
  },
  {
    icon: Leaf,
    title: "EPR Certification",
    description: "Extended Producer Responsibility compliance for electronic and plastic waste management.",
  },
  {
    icon: Zap,
    title: "CE & CB Certification",
    description: "CE marking for EU markets and IECEE CB Scheme for multi-market access.",
  },
];

const testingServices = [
  "Electrical Safety Testing",
  "EMC / EMI Testing",
  "RF Testing",
  "LM-79 Photometric Testing",
  "IP Ingress Protection Testing",
  "Pre-Compliance Testing",
];

export const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <span className="text-sm font-semibold">What We Do</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Regulatory Certifications & Testing Services
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
            BISCRS Consultant provides end-to-end testing, certification, and regulatory consulting services for electrical, electronic, wireless, and consumer products.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
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

        {/* Testing Services */}
        <div className="bg-muted/50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="h-5 w-5 text-accent" />
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                  Testing Services
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                Accurate testing that supports certification, tenders, and performance claims.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {testingServices.map((test) => (
                <span
                  key={test}
                  className="px-3 py-1.5 bg-background rounded-full text-xs md:text-sm text-foreground border border-border"
                >
                  {test}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
