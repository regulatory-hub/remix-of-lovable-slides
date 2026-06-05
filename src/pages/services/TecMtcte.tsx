import { Globe2 } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const TecMtcte = () => (
  <ServicePageLayout
    icon={Globe2}
    title="TEC / MTCTE Certification"
    tagline="Mandatory testing for telecom equipment connected to Indian networks"
    description="TEC (Telecom Engineering Centre) certification under the MTCTE scheme is mandatory for telecom products in India. BISCRS manages product categorization, lab testing, and portal registration."
    keyPoints={[
      "Mandatory for telecom equipment",
      "Product categorization support",
      "Testing at TEC-recognized labs",
      "MTCTE portal registration",
      "Certificate renewal support",
      "Import permit assistance",
    ]}
    process={[
      { step: "Product Classification", text: "Identify the TEC category and applicable standards." },
      { step: "Lab Testing", text: "Coordinate testing at a TEC-recognized laboratory." },
      { step: "Portal Registration", text: "Register on the MTCTE portal and upload documents." },
      { step: "Application Review", text: "Follow up with TEC for review and approval." },
      { step: "Certificate Issued", text: "Receive MTCTE certificate for market access." },
    ]}
    applicableProducts={[
      "Routers & Modems",
      "Switches & Hubs",
      "VoIP Phones",
      "GPON Equipment",
      "Optical Fiber Cables",
      "SIP Devices",
      "PBX Systems",
      "Network Interfaces",
      "SDH/PDH Equipment",
      "Telecom Batteries",
    ]}
  />
);

export default TecMtcte;
