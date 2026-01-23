import { Shield, FileCheck, Zap, Radio, Activity, Leaf, Award } from "lucide-react";

const frameworks = [
  { icon: Shield, label: "BIS (India)" },
  { icon: FileCheck, label: "IEC Standards" },
  { icon: null, label: "CE Marking", customIcon: "CE" },
  { icon: Radio, label: "EMC Compliance" },
  { icon: Zap, label: "Electrical Safety" },
  { icon: Activity, label: "Energy Efficiency" },
  { icon: Leaf, label: "Environmental Compliance" },
  { icon: Award, label: "Quality Standards" },
];

export const IndustriesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 border border-primary/30 rounded-lg transform rotate-12" />
        <div className="absolute top-20 right-20 w-48 h-48 border border-primary/20 rounded-lg transform -rotate-6" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Regulatory Frameworks We Manage
          </h2>
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {frameworks.map((framework) => (
            <div
              key={framework.label}
              className="group flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                {framework.customIcon ? (
                  <span className="font-heading font-bold text-primary text-sm">{framework.customIcon}</span>
                ) : framework.icon ? (
                  <framework.icon className="h-5 w-5 text-primary" />
                ) : null}
              </div>
              <span className="font-medium text-foreground text-sm">
                {framework.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
