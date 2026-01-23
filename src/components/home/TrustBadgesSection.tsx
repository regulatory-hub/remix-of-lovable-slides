import { Award, Building2, Globe, Users } from "lucide-react";

const badges = [
  { icon: Award, label: "ISO 17025 Accredited" },
  { icon: Building2, label: "BIS Recognized Lab" },
  { icon: Globe, label: "Global Certifications" },
  { icon: Users, label: "500+ Clients Served" },
];

export const TrustBadgesSection = () => {
  return (
    <section className="py-8 md:py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <badge.icon className="h-6 w-6 md:h-7 md:w-7 text-accent" />
              </div>
              <span className="font-medium text-foreground text-xs md:text-sm">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
