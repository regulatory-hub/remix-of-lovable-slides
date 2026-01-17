import { Building2, Users, Globe2, Award } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
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
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-gradient p-6 rounded-2xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
