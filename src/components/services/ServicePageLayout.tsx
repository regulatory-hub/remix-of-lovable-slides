import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  process: { step: string; text: string }[];
  applicableProducts: string[];
}

export const ServicePageLayout = ({
  icon: Icon,
  title,
  tagline,
  description,
  keyPoints,
  process,
  applicableProducts,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4"
            >
              ← All Services
            </Link>
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
              {title}
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg">{tagline}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Key Points */}
          <div className="grid sm:grid-cols-2 gap-3">
            {keyPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="space-y-4">
            {process.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.step}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable Products */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Applicable Products</h2>
          <div className="flex flex-wrap gap-2">
            {applicableProducts.map((product) => (
              <span
                key={product}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm text-foreground border border-border"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">Need help with {title}?</p>
          <Button asChild variant="default" size="lg">
            <a href="https://wa.me/917082130463" target="_blank" rel="noopener noreferrer">
              Get Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
