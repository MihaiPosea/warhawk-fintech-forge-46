
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md border border-gray-300 rounded-full px-6 py-3 shadow-lg z-50 max-w-4xl w-full mx-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background font-medium text-sm">WC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg text-foreground leading-tight">warhawk capital</span>
            <span className="text-xs text-muted-foreground leading-tight">est. 2024</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('divisions')}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
          >
            Divisions
          </button>
          <button 
            onClick={() => scrollToSection('showcase')}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
          >
            Showcase
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 py-2 text-sm font-light"
          >
            Join Us
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-300">
          <div className="space-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('divisions')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
            >
              Divisions
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
            >
              Showcase
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full text-sm font-light"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
