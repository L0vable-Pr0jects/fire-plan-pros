import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Flame } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "صفحه اصلی" },
    { href: "#services", label: "خدمات" },
    { href: "#portfolio", label: "نمونه کارها" },
    { href: "#contact", label: "ارتباط باما" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <nav dir="rtl" className="flex items-center gap-[5%] h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-serif text-2xl font-semibold text-foreground">
              IKGA
              {/* <span className="text-accent">Pro</span> */}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-xl hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            {/* <Button variant="accent" size="lg">
              Get a Quote
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="accent" size="lg" className="mt-2">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
