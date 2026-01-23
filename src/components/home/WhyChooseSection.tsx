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
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Why Clients Choose QnS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Reasons List */}
          <div className="space-y-3 md:space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-2 md:gap-3">
                <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-accent shrink-0" />
                <span className="text-foreground font-medium text-sm md:text-base">{reason}</span>
              </div>
            ))}

            <div className="pt-4 md:pt-6">
              <Button asChild size="default" className="group w-full sm:w-auto">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:items-stretch">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 min-w-[100px] md:min-w-[120px] p-4 md:p-6 text-center bg-card rounded-lg md:bg-transparent md:rounded-none ${
                  index < stats.length - 1 ? "md:border-r md:border-border" : ""
                }`}
              >
                <div className="font-heading text-2xl md:text-3xl font-bold text-accent mb-1">
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
