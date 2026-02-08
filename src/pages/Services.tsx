import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileCheck, Shield, Radio, Globe2, Leaf, Zap, TestTube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { id: "bis-crs", icon: FileCheck, title: "BIS-CRS Certification", description: "Compulsory Registration for electronics & IT products sold in India.", href: "/services/bis-crs" },
  { id: "isi", icon: Shield, title: "ISI Certification", description: "Mandatory licensing for safety-critical electrical & mechanical products.", href: "/services/isi" },
  { id: "wpc-eta", icon: Radio, title: "WPC ETA Certification", description: "Equipment Type Approval for wireless & RF devices.", href: "/services/wpc-eta" },
  { id: "tec-mtcte", icon: Globe2, title: "TEC / MTCTE Certification", description: "Mandatory testing for telecom equipment in India.", href: "/services/tec-mtcte" },
  { id: "epr", icon: Leaf, title: "EPR Certification", description: "Extended Producer Responsibility for e-waste & plastic waste.", href: "/services/epr" },
  { id: "ce", icon: Zap, title: "CE & CB Certification", description: "CE marking for EU and CB Scheme for global market access.", href: "/services/ce-cb" },
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
              End-to-end testing, certification, and regulatory consulting for electrical, electronic, wireless, and consumer products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-muted/50 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <TestTube className="h-5 w-5 text-accent" />
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">Testing Services</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Accurate testing that supports certification, tenders, and performance claims.
            </p>
            <div className="flex flex-wrap gap-2">
              {testingServices.map((test) => (
                <span key={test} className="px-4 py-2 bg-background rounded-full text-sm text-foreground border border-border">
                  {test}
                </span>
              ))}
            </div>
          </div>

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
