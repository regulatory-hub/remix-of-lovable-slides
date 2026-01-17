import { 
  Plug, 
  Monitor, 
  Wifi, 
  Lightbulb, 
  Smartphone, 
  Factory, 
  Package 
} from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-semibold">Industries We Serve</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Expertise Across Multiple Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide specialized compliance solutions for a wide range of industries and product categories.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group p-6 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <industry.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
