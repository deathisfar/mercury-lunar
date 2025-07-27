import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Updates", href: "#updates" },
    { name: "Documents", href: "#documents" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient-primary">
              Team MERCuRy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering lunar construction technology through innovative 
              polymer-regolith cement systems and automated mixing solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">CAN-RGX VIII</Badge>
              <Badge variant="outline">McMaster University</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:2010.aminnazari@gmail.com"
                  className="hover:text-primary transition-colors text-sm"
                >
                  2010.aminnazari@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+14168331785"
                  className="hover:text-primary transition-colors text-sm"
                >
                  +1 (416) 833-1785
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  McMaster University<br />
                  1280 Main St W<br />
                  Hamilton, ON L8S 4L8
                </span>
              </div>
            </div>
          </div>

          {/* Social & Updates */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Stay Connected</h4>
            <p className="text-muted-foreground text-sm">
              Follow our progress and join the lunar construction revolution.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/20 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2025 Team MERCuRy. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Advancing lunar construction technology at McMaster University
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <Badge variant="outline" className="text-xs">
                🌙 Built for the Moon
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;