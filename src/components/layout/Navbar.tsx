import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceSubItems = [
  { name: "Indian Regulatory Approvals", href: "/services#indian-regulatory" },
  { name: "BIS-CRS Certification", href: "/services#bis-crs" },
  { name: "ISI Certification", href: "/services#isi" },
  { name: "WPC ETA Certification", href: "/services#wpc-eta" },
  { name: "TEC / MTCTE Certification", href: "/services#tec-mtcte" },
  { name: "EPR Certification", href: "/services#epr" },
  { name: "Global Certifications", href: "/services#global" },
  { name: "CE Marking", href: "/services#ce" },
  { name: "CB Certification", href: "/services#cb" },
  { name: "Testing Services", href: "/services#testing" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true, subItems: serviceSubItems },
  { name: "Industries", href: "/industries" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => location.pathname === href;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-heading text-2xl font-bold text-primary">QnS</span>
              <span className="font-heading text-lg font-medium text-muted-foreground">Testing Lab</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-md block",
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-elevated py-2 z-50 animate-fade-in"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                    <div className="border-t border-border mt-2 pt-2 mx-2">
                      <Link
                        to="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-2 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="default" size="lg">
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-colors rounded-md",
                          isActive(item.href)
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.name}
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileServicesOpen && "rotate-180"
                        )} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-4 py-2 space-y-1">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 text-sm font-medium transition-colors rounded-md block",
                        isActive(item.href)
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Button asChild variant="default" className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
