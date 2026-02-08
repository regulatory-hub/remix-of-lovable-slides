import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustBadgesSection } from "@/components/home/TrustBadgesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CertificationLogosMarquee } from "@/components/home/CertificationLogosMarquee";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <TrustBadgesSection />
      <AboutSection />
      <WhyChooseSection />
      <CertificationLogosMarquee />
      <CTASection />
    </Layout>
  );
};

export default Index;
