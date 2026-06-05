import { Leaf } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const EprCertification = () => (
  <ServicePageLayout
    icon={Leaf}
    title="EPR Certification"
    tagline="Extended Producer Responsibility for e-waste & plastic waste compliance"
    description="EPR registration with CPCB is mandatory for producers, importers, and brand owners of electronics and plastic products. BISCRS handles the complete registration, annual filing, and compliance process."
    keyPoints={[
      "Mandatory for producers & importers",
      "CPCB registration & filing",
      "Annual return documentation",
      "Compliance strategy development",
      "Liaison with pollution control boards",
      "E-waste & plastic waste coverage",
    ]}
    process={[
      { step: "Category Assessment", text: "Identify if your product falls under e-waste or plastic waste EPR." },
      { step: "Documentation", text: "Prepare the required documents and action plan." },
      { step: "CPCB Application", text: "Submit EPR registration application on the CPCB portal." },
      { step: "Review & Approval", text: "Coordinate with CPCB for queries and approval." },
      { step: "Compliance Maintained", text: "Annual filing and target fulfilment support." },
    ]}
    applicableProducts={[
      "Laptops & Computers",
      "Mobile Phones",
      "Batteries",
      "Packaging Materials",
      "Plastic Containers",
      "Consumer Electronics",
      "LED Lamps",
      "Refrigerators",
      "Washing Machines",
      "Printed Circuit Boards",
    ]}
  />
);

export default EprCertification;
