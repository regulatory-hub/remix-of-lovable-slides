import bisLogo from "@/assets/logos/bis-logo.png";
import isiLogo from "@/assets/logos/isi-logo.png";
import tecLogo from "@/assets/logos/tec-logo.png";
import ukcaLogo from "@/assets/logos/ukca-logo.png";
import ieceeCbLogo from "@/assets/logos/iecee-cb-logo.png";
import ceLogo from "@/assets/logos/ce-logo.png";

const logos = [
  { src: bisLogo, alt: "BIS Certification" },
  { src: isiLogo, alt: "ISI Certification" },
  { src: tecLogo, alt: "TEC Certification" },
  { src: ukcaLogo, alt: "UKCA Certification" },
  { src: ieceeCbLogo, alt: "IECEE CB Certification" },
  { src: ceLogo, alt: "CE Marking" },
];

// Double the logos for seamless infinite scroll
const allLogos = [...logos, ...logos];

export const CertificationLogosMarquee = () => {
  return (
    <section className="py-8 md:py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-sm text-muted-foreground font-medium">
          Certifications We Support
        </p>
      </div>
      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center gap-12 md:gap-20">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-12 md:h-16 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
