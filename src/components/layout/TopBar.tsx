import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <a 
              href="mailto:info@qnstestinglab.com" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>info@qnstestinglab.com</span>
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-3.5 w-3.5" />
              <span>Delhi NCR, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70 mr-2">Follow Us:</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
