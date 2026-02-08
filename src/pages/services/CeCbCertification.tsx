import { Zap } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const CeCbCertification = () => (
  <ServicePageLayout
    icon={Zap}
    title="CE & CB Certification"
    tagline="CE marking for EU markets and IECEE CB Scheme for global access"
    description="CE marking is required to sell products in the European Union. The IECEE CB Scheme enables multi-country acceptance of test reports. QnS manages directive identification, testing, and documentation for both."
    keyPoints={[
      "CE marking for EU market entry",
      "CB Scheme for global market access",
      "Directive & standard identification",
      "Testing with notified bodies",
      "Technical file & DoC preparation",
      "CB test report procurement",
    ]}
    process={[
      { step: "Directive Mapping", text: "Identify applicable EU directives and harmonized standards." },
      { step: "Product Testing", text: "Coordinate testing with a notified body / CB test lab." },
      { step: "Documentation", text: "Prepare the technical file and Declaration of Conformity." },
      { step: "CE Marking", text: "Apply CE mark and prepare for market entry." },
      { step: "CB Report", text: "Obtain CB test report for acceptance in 50+ countries." },
    ]}
    applicableProducts={[
      "Power Supplies",
      "Lighting Products",
      "Household Appliances",
      "Medical Devices",
      "Industrial Equipment",
      "IT Equipment",
      "Audio/Video Products",
      "Toys",
      "Machinery",
      "Low Voltage Equipment",
    ]}
  />
);

export default CeCbCertification;
