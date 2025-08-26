import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Updates", href: "#updates" },
    { name: "Documents", href: "#documents" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 mission-control-panel bg-card/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="./lovable-uploads/53bc61bd-11d8-4900-90a8-fcab89812def.png"
                alt="Team MERCuRy Mission Logo" 
                className="h-12 w-12 object-contain"
              />
              <h1 className="text-xl font-bold text-gradient-primary">
                Team MERCuRy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={item.name === "Contact" ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-foreground hover:text-primary transition-colors duration-200"}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={item.name === "Contact" ? "block px-3 py-2 text-primary font-semibold bg-primary/10 rounded" : "block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
