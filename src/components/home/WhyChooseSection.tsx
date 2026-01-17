import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  Handshake, 
  Building, 
  Award,
  ArrowRight,
  CheckCircle2 
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "10-15 Years Experience",
    description: "Deep expertise in global compliance and certification across multiple industries and markets.",
  },
  {
    icon: Users,
    title: "Quick & Simplified Process",
    description: "We remove complexity with transparent, efficient processes that save you time and resources.",
  },
  {
    icon: Handshake,
    title: "Single-Point Coordination",
    description: "One dedicated team handles all aspects of your certification journey from start to finish.",
  },
  {
    icon: Building,
    title: "Strong Lab Network",
    description: "Partnerships with accredited laboratories worldwide for comprehensive testing capabilities.",
  },
  {
    icon: Award,
    title: "Trusted by Industry Leaders",
    description: "Manufacturers, importers, and tender suppliers rely on our expertise for market access.",
  },
];

const highlights = [
  "BIS-CRS & ISI Certification",
  "CE & UKCA Marking",
  "FCC Compliance",
  "EMC/EMI Testing",
  "Safety Testing",
  "RF Testing",
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <span className="text-sm font-semibold">Why Choose Us</span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Your Partner for <span className="text-gradient">Simplified Compliance</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                QnS Testing Lab combines deep industry expertise with a client-first approach to make regulatory compliance straightforward and stress-free.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-4">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Reasons Cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group flex gap-4 p-5 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent group-hover:to-accent/80 transition-all">
                  <reason.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
