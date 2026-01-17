import { Building2, Users, Globe2, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { icon: Building2, value: "10-15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Globe2, value: "20+", label: "Countries Covered" },
  { icon: Award, value: "1000+", label: "Certifications" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutTeam}
                alt="QnS Testing Lab team working on electronic testing"
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-card rounded-xl shadow-elevated p-6 border border-border/50 max-w-[200px]">
              <div className="text-4xl font-heading font-bold text-gradient mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years of Industry Excellence</div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
              <span className="text-sm font-semibold">About QnS Testing Lab</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Your Trusted <span className="text-gradient">Compliance Partner</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                QnS Testing Lab was created to remove the complexity manufacturers and importers face due to changing standards, unclear requirements, multiple authorities, and tight market timelines.
              </p>
              <p>
                With <strong className="text-foreground">10–15 years of hands-on experience</strong>, our team manages global compliance applications, product testing, and certifications across <strong className="text-foreground">India, Europe, the USA, and other regulated markets</strong>.
              </p>
              <p>
                We act as a <strong className="text-foreground">single-window compliance partner</strong>, supporting customers from early design and pre-compliance stages through certification, market launch, and ongoing regulatory maintenance.
              </p>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <stat.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                  <div className="font-heading text-xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
