import { FileCheck } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const BisCrs = () => (
  <ServicePageLayout
    icon={FileCheck}
    title="BIS-CRS Certification"
    tagline="Compulsory Registration for electronics & IT products sold in India"
    description="BIS-CRS (Compulsory Registration Scheme) is mandatory for electronics and IT products before they can be sold in India. BISCRS handles the complete registration process — from lab testing to BIS portal submission and approval."
    keyPoints={[
      "Mandatory for electronics & IT goods",
      "End-to-end BIS application management",
      "Testing at BIS-recognized labs",
      "Registration renewal support",
      "Import clearance documentation",
      "Fast-track processing available",
    ]}
    process={[
      { step: "Product Evaluation", text: "Identify applicable IS standards for your product." },
      { step: "Sample Testing", text: "Coordinate testing at a BIS-recognized laboratory." },
      { step: "Application Filing", text: "Submit application on the BIS portal with test reports." },
      { step: "BIS Review", text: "Follow up with BIS for queries and approval." },
      { step: "Registration Granted", text: "Receive R-number for product sale in India." },
    ]}
    applicableProducts={[
      "Adapters & Chargers",
      "LED Drivers",
      "Power Banks",
      "Smart Watches",
      "Laptops & Tablets",
      "Monitors & Displays",
      "Printers",
      "Set-Top Boxes",
      "Electronic Toys",
      "Cameras",
    ]}
  />
);

export default BisCrs;
