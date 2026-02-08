import { Globe } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const CbCertification = () => (
  <ServicePageLayout
    icon={Globe}
    title="CB Certification"
    tagline="IECEE CB Scheme for multi-country acceptance of test reports"
    description="The CB Scheme is an international system for mutual acceptance of test reports among 50+ participating countries. A single CB test report can be used to obtain national certifications worldwide, saving time and cost. QnS manages the entire process from lab coordination to report procurement."
    keyPoints={[
      "Accepted in 50+ countries",
      "Single test report, multiple markets",
      "Reduces duplicate testing costs",
      "Speeds up global market entry",
      "Covers safety & EMC standards",
      "Recognized by national certification bodies",
    ]}
    process={[
      { step: "Scope Assessment", text: "Identify target countries and applicable CB categories." },
      { step: "Standard Alignment", text: "Map IEC standards and national deviations." },
      { step: "CB Testing", text: "Coordinate testing at a CBTL (CB Testing Laboratory)." },
      { step: "CB Report", text: "Obtain the CB test report and CB certificate." },
      { step: "National Conversion", text: "Use CB report to obtain national certifications in target markets." },
    ]}
    applicableProducts={[
      "Power Supplies",
      "Lighting Equipment",
      "Household Appliances",
      "IT Equipment",
      "Audio/Video Products",
      "Medical Electrical Equipment",
      "Batteries & Chargers",
      "Industrial Equipment",
      "Office Equipment",
      "Measuring Instruments",
    ]}
  />
);

export default CbCertification;
