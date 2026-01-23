import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustBadgesSection } from "@/components/home/TrustBadgesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <TrustBadgesSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <HowWeWorkSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
