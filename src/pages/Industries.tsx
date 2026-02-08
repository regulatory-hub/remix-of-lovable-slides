import { Layout } from "@/components/layout/Layout";
import { Cpu, Monitor, Wifi, Lightbulb, ShoppingBag, Factory, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Cpu,
    title: "Electrical & Electronic Products",
    description: "Power supplies, adapters, motors, switches, and electronic components.",
  },
  {
    icon: Monitor,
    title: "IT & AV Equipment",
    description: "Computers, monitors, printers, audio-video equipment, and peripherals.",
  },
  {
    icon: Wifi,
    title: "Telecom & Networking Products",
    description: "Routers, modems, telecom devices, and network infrastructure equipment.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & LED Products",
    description: "LED luminaires, drivers, lamps, and lighting control systems.",
  },
  {
    icon: ShoppingBag,
    title: "Consumer & Lifestyle Products",
    description: "Home appliances, personal care devices, and consumer electronics.",
  },
  {
    icon: Factory,
    title: "Industrial & Laboratory Equipment",
    description: "Industrial machinery, testing equipment, and laboratory instruments.",
  },
  {
    icon: Package,
    title: "Importers, OEMs & Brand Owners",
    description: "Compliance support for businesses importing or manufacturing products.",
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
              <span className="text-sm font-semibold">Industries We Serve</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Compliance Solutions Across Industries
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg max-w-2xl">
              We support a wide range of industries where regulatory compliance is essential for market access and legal sale.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <industry.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need compliance support for your industry?</p>
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

export default Industries;
