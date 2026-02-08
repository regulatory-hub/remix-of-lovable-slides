import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileCheck, Shield, Radio, Globe2, Leaf, Zap, TestTube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "bis-crs",
    icon: FileCheck,
    title: "BIS-CRS Certification",
    description: "Bureau of Indian Standards Compulsory Registration for electronics and IT products sold in India.",
    details: [
      "Applicable to electronics, IT products, and components under CRS orders",
      "End-to-end application management with BIS",
      "Sample testing coordination with BIS-recognized labs",
      "Registration renewal and compliance maintenance",
    ],
  },
  {
    id: "isi",
    icon: Shield,
    title: "ISI Certification",
    description: "Mandatory licensing under BIS for products impacting public safety, health, and infrastructure.",
    details: [
      "Covers electrical, mechanical, and construction products",
      "Factory inspection and audit coordination",
      "Complete documentation preparation",
      "License renewal and surveillance support",
    ],
  },
  {
    id: "wpc-eta",
    icon: Radio,
    title: "WPC ETA Certification",
    description: "Equipment Type Approval for wireless products like Wi-Fi, Bluetooth, and IoT devices.",
    details: [
      "RF testing and SAR testing coordination",
      "WPC ETA application and follow-up",
      "Dealer possession license support",
      "Import license assistance",
    ],
  },
  {
    id: "tec-mtcte",
    icon: Globe2,
    title: "TEC / MTCTE Certification",
    description: "Mandatory testing and certification for telecom equipment connected to Indian networks.",
    details: [
      "Product categorization and standard identification",
      "Testing at TEC-recognized laboratories",
      "MTCTE portal registration and application",
      "Certificate renewal support",
    ],
  },
  {
    id: "epr",
    icon: Leaf,
    title: "EPR Certification",
    description: "Extended Producer Responsibility compliance for electronic and plastic waste management.",
    details: [
      "EPR registration with CPCB",
      "Annual return filing and documentation",
      "Compliance strategy development",
      "Liaison with pollution control boards",
    ],
  },
  {
    id: "ce",
    icon: Zap,
    title: "CE & CB Certification",
    description: "CE marking for EU markets and IECEE CB Scheme for multi-market access.",
    details: [
      "Directive and standard identification",
      "Testing coordination with notified bodies",
      "Technical file and DoC preparation",
      "CB test report and certificate procurement",
    ],
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

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Regulatory Certifications & Testing Services
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg max-w-2xl">
              QnS Testing Lab provides end-to-end testing, certification, and regulatory consulting services for electrical, electronic, wireless, and consumer products.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8 md:space-y-12">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 p-6 md:p-8 bg-card rounded-xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 ml-16">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Testing Services */}
          <div className="mt-12 bg-muted/50 rounded-xl p-6 md:p-8" id="testing">
            <div className="flex items-center gap-2 mb-4">
              <TestTube className="h-5 w-5 text-accent" />
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Testing Services
              </h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Accurate testing that supports certification, tenders, and performance claims.
            </p>
            <div className="flex flex-wrap gap-2">
              {testingServices.map((test) => (
                <span
                  key={test}
                  className="px-4 py-2 bg-background rounded-full text-sm text-foreground border border-border"
                >
                  {test}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need help with certification?</p>
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

export default Services;
