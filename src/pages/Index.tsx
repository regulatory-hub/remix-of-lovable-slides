import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <HowWeWorkSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
