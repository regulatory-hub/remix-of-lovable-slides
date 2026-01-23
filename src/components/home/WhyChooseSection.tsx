import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckSquare, ArrowRight } from "lucide-react";

const reasons = [
  "Single point compliance ownership",
  "Faster certification timelines",
  "Transparent process & cost clarity",
  "Reduced testing failures & rework",
  "Strong regulatory interpretation capability",
];

const stats = [
  { value: "15+", label: "Years Compliance Experience" },
  { value: "500+", label: "Products Supported" },
  { value: "20+", label: "Product Categories" },
  { value: "Global", label: "Regulatory Exposure" },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Why Clients Choose QnS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reasons List */}
          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3">
                <CheckSquare className="h-5 w-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}

            <div className="pt-6">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-wrap items-stretch">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 min-w-[120px] p-6 text-center ${
                  index < stats.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <div className="font-heading text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
