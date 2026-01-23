import { Award, Building2, Globe, FileCheck, Shield, Users } from "lucide-react";

const badges = [
  { icon: FileCheck, label: "BIS-CRS Experts" },
  { icon: Shield, label: "ISI Certification" },
  { icon: Globe, label: "CE & CB Certified" },
  { icon: Award, label: "WPC ETA Approved" },
  { icon: Building2, label: "TEC/MTCTE Support" },
  { icon: Users, label: "500+ Clients Served" },
];

export const TrustBadgesSection = () => {
  return (
    <section className="py-6 md:py-10 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Single-window partner message */}
        <p className="text-center text-sm md:text-base text-muted-foreground mb-6">
          <span className="font-semibold text-foreground">Single-Window Compliance Partner</span> — From pre-compliance to market launch
        </p>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 p-3 md:p-4 text-center hover:bg-accent/5 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <badge.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              </div>
              <span className="font-medium text-foreground text-[10px] md:text-xs leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
