import { Shield } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const IsiCertification = () => (
  <ServicePageLayout
    icon={Shield}
    title="ISI Certification"
    tagline="BIS product licensing for safety-critical electrical & mechanical products"
    description="ISI mark certification is a mandatory BIS license for products impacting public safety. BISCRS manages factory inspections, lab testing, and the complete licensing process with BIS."
    keyPoints={[
      "Mandatory for safety-critical products",
      "Factory inspection coordination",
      "Complete documentation preparation",
      "License renewal & surveillance support",
      "Covers electrical, mechanical & construction items",
      "Grant & scheme-based support",
    ]}
    process={[
      { step: "Standard Identification", text: "Determine the applicable Indian Standard for your product." },
      { step: "Testing", text: "Get samples tested at a NABL/BIS lab." },
      { step: "Application Submission", text: "File the ISI license application with BIS." },
      { step: "Factory Inspection", text: "Coordinate the BIS factory audit." },
      { step: "License Issued", text: "Receive ISI mark license for manufacturing/import." },
    ]}
    applicableProducts={[
      "Switches & Sockets",
      "Wires & Cables",
      "MCBs & RCCBs",
      "Ceiling Fans",
      "Water Heaters",
      "Electric Irons",
      "Plugs & Connectors",
      "Transformers",
      "Helmets",
      "Steel Products",
    ]}
  />
);

export default IsiCertification;
