import { Radio } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

const WpcEta = () => (
  <ServicePageLayout
    icon={Radio}
    title="WPC ETA Certification"
    tagline="Equipment Type Approval for wireless & radio frequency devices"
    description="WPC ETA is mandatory for any wireless product operating in India. QnS handles RF testing, SAR testing, and the complete WPC application process for Wi-Fi, Bluetooth, IoT and cellular devices."
    keyPoints={[
      "Required for all RF/wireless products",
      "RF & SAR testing coordination",
      "WPC portal application & follow-up",
      "Dealer possession license support",
      "Import license assistance",
      "Frequency allocation guidance",
    ]}
    process={[
      { step: "Frequency Check", text: "Verify your product's operating frequency against Indian spectrum allocation." },
      { step: "RF Testing", text: "Conduct RF and SAR testing at an approved lab." },
      { step: "Application Filing", text: "Submit ETA application on the WPC portal." },
      { step: "WPC Review", text: "Handle queries and coordinate with WPC officials." },
      { step: "ETA Certificate", text: "Receive approval to sell wireless products in India." },
    ]}
    applicableProducts={[
      "Wi-Fi Routers",
      "Bluetooth Devices",
      "Smart Home Devices",
      "IoT Sensors",
      "GPS Trackers",
      "Wireless Earbuds",
      "Drones",
      "Two-Way Radios",
      "NFC Devices",
      "Cellular Modules",
    ]}
  />
);

export default WpcEta;
