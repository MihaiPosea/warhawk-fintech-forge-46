
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
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b border-white/10 px-8 py-4 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">WC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-xl text-white leading-tight font-montserrat">warhawk capital</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('divisions')}
            className="text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
          >
            Divisions
          </button>
          <button 
            onClick={() => scrollToSection('showcase')}
            className="text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
          >
            Showcase
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full px-6 py-2 text-base font-light font-montserrat"
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
            className="w-10 h-10 text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20 bg-black/20 backdrop-blur-sm rounded-lg mx-4">
          <div className="space-y-2 p-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('divisions')}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
            >
              Divisions
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
            >
              Showcase
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors text-base font-light font-montserrat"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full text-base font-light font-montserrat"
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
