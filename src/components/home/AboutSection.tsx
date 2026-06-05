import { Building2, Users, Globe2, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { icon: Building2, value: "10-15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Globe2, value: "4+", label: "Major Markets" },
  { icon: Award, value: "1000+", label: "Certifications" },
];

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutTeam}
                alt="BISCRS Consultant team working on electronic testing"
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-card rounded-xl shadow-elevated p-4 md:p-6 border border-border/50 max-w-[180px] md:max-w-[200px]">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">15+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years of Industry Excellence</div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-20 md:w-24 h-20 md:h-24 bg-accent/10 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-28 md:w-32 h-28 md:h-32 bg-secondary/10 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-5 md:space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
              <span className="text-sm font-semibold">About BISCRS Consultant</span>
            </div>
            
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-gradient">BISCRS</span> — Our Philosophy
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                BISCRS stands for <strong className="text-foreground">Regulatory Compliance Solutions</strong> — a philosophy that defines how we approach testing, certification, and regulatory compliance.
              </p>
              <p>
                In today's complex regulatory environment, manufacturers and importers often struggle with changing standards, unclear requirements, multiple authorities, and tight market timelines. <strong className="text-foreground">BISCRS Consultant was created to remove this complexity</strong> and provide a clear, structured, and reliable path to compliance.
              </p>
              <p>
                Our team brings <strong className="text-foreground">10 to 15 years of hands-on experience</strong> managing global compliance applications, product testing, and certifications across <strong className="text-foreground">India, Europe, the USA, and other regulated markets</strong>. This experience allows us to anticipate challenges, avoid common mistakes, and deliver compliance solutions that are accurate, efficient, and practical.
              </p>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 md:p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <stat.icon className="h-4 w-4 md:h-5 md:w-5 text-accent mx-auto mb-2" />
                  <div className="font-heading text-lg md:text-xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
