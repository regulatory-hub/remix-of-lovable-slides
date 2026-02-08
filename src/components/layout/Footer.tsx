import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "BIS-CRS Certification", href: "/services#bis-crs" },
  { name: "ISI Certification", href: "/services#isi" },
  { name: "CE Marking", href: "/services#ce" },
  { name: "WPC ETA Certification", href: "/services#wpc-eta" },
  { name: "TEC / MTCTE", href: "/services#tec-mtcte" },
  { name: "CB Certification", href: "/services#cb" },
  { name: "EPR Certification", href: "/services#epr" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="font-heading text-2xl font-bold">QnS</span>
              <span className="font-heading text-lg font-medium opacity-80">Testing Lab</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Quick & Simplified — Your trusted partner for testing, certification, and regulatory compliance. Helping manufacturers and importers navigate complex regulations with speed and clarity.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:info@qnstestinglab.com" className="flex items-start gap-3 hover:opacity-100 transition-opacity">
                <Mail className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">info@qnstestinglab.com</span>
              </a>
              <a href="tel:+917082130463" className="flex items-start gap-3 hover:opacity-100 transition-opacity">
                <Phone className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">+91 70821 30463</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} QnS Testing Lab. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
