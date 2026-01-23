import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cpu, 
  Monitor, 
  Wifi, 
  Lightbulb, 
  ShoppingBag, 
  Factory, 
  Package 
} from "lucide-react";
import industriesImage from "@/assets/industries-products.jpg";

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

export const IndustriesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div>
            {/* Header */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
                <span className="text-sm font-semibold">Industries We Serve</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Compliance Solutions Across Industries
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                We support a wide range of industries where regulatory compliance is essential for market access and legal sale.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="group flex items-start gap-3 p-3 md:p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-200"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <industry.icon className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm md:text-base font-semibold text-foreground mb-0.5">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" size="default" className="group">
              <Link to="/industries">
                View All Industries
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={industriesImage}
                alt="Various electronic and electrical products we certify"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
