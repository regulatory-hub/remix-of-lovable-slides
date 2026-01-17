import { 
  Plug, 
  Monitor, 
  Wifi, 
  Lightbulb, 
  Smartphone, 
  Factory, 
  Package 
} from "lucide-react";
import industriesProducts from "@/assets/industries-products.jpg";

const industries = [
  {
    icon: Plug,
    title: "Electrical & Electronic Products",
    description: "Switches, wires, appliances, and electrical equipment",
  },
  {
    icon: Monitor,
    title: "IT & AV Equipment",
    description: "Computers, displays, audio-visual systems",
  },
  {
    icon: Wifi,
    title: "Telecom & Networking",
    description: "Routers, modems, and communication devices",
  },
  {
    icon: Lightbulb,
    title: "Lighting & LED Products",
    description: "LED lamps, luminaires, and lighting controls",
  },
  {
    icon: Smartphone,
    title: "Consumer & Lifestyle",
    description: "Home appliances and consumer electronics",
  },
  {
    icon: Factory,
    title: "Industrial & Laboratory",
    description: "Industrial equipment and lab instruments",
  },
  {
    icon: Package,
    title: "Importers, OEMs & Brand Owners",
    description: "Support for importers and brand compliance",
  },
];

export const IndustriesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <span className="text-sm font-semibold">Industries We Serve</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Expertise Across <span className="text-gradient">Multiple Sectors</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide specialized compliance solutions for a wide range of industries and product categories.
              </p>
            </div>

            {/* Industries List */}
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <div
                  key={industry.title}
                  className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-card hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <industry.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={industriesProducts}
                alt="Various electronic and electrical products we certify"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-6 bg-primary text-primary-foreground rounded-xl shadow-elevated p-5">
              <div className="text-3xl font-heading font-bold">7+</div>
              <div className="text-sm opacity-90">Industry Sectors</div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
            <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-secondary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
