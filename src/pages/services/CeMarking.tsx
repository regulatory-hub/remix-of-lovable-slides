import { Zap } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const CeMarking = () => (
  <ServicePageLayout
    icon={Zap}
    title="CE Marking"
    tagline="Mandatory conformity marking for products sold in the EU/EEA"
    description="CE marking demonstrates that a product meets EU health, safety, and environmental protection requirements. BISCRS handles directive identification, testing coordination with notified bodies, technical file preparation, and Declaration of Conformity."
    keyPoints={[
      "Mandatory for EU/EEA market entry",
      "Directive & standard identification",
      "Testing with notified bodies",
      "Technical file preparation",
      "Declaration of Conformity (DoC)",
      "Post-market compliance support",
    ]}
    process={[
      { step: "Directive Mapping", text: "Identify applicable EU directives (LVD, EMC, RED, RoHS, etc.)." },
      { step: "Standard Selection", text: "Determine harmonized standards for testing." },
      { step: "Product Testing", text: "Coordinate testing with an EU notified body." },
      { step: "Technical File", text: "Compile all test reports, risk assessments, and documentation." },
      { step: "DoC & CE Mark", text: "Issue Declaration of Conformity and apply CE marking." },
    ]}
    applicableProducts={[
      "Power Supplies & Adapters",
      "LED Lighting Products",
      "Household Appliances",
      "IT & Telecom Equipment",
      "Medical Devices",
      "Machinery",
      "Toys & Children's Products",
      "Low Voltage Equipment",
      "Audio/Video Equipment",
      "Industrial Controls",
    ]}
  />
);

export default CeMarking;
