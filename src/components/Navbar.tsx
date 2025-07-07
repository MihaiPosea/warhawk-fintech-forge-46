
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change navbar style when scrolled past hero section (approximately 80vh)
      setIsScrolled(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-sm border-b px-8 py-4 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 border-gray-200 shadow-sm' 
        : 'bg-transparent border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 backdrop-blur-sm border rounded-full flex items-center justify-center transition-colors duration-300 ${
            isScrolled 
              ? 'bg-foreground/10 border-gray-300' 
              : 'bg-white/10 border-white/20'
          }`}>
            <span className={`font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>WC</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-medium text-xl leading-tight font-montserrat transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>warhawk capital</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className={`transition-colors text-base font-light font-montserrat ${
              isScrolled 
                ? 'text-muted-foreground hover:text-foreground' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('divisions')}
            className={`transition-colors text-base font-light font-montserrat ${
              isScrolled 
                ? 'text-muted-foreground hover:text-foreground' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Divisions
          </button>
          <button 
            onClick={() => scrollToSection('showcase')}
            className={`transition-colors text-base font-light font-montserrat ${
              isScrolled 
                ? 'text-muted-foreground hover:text-foreground' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Showcase
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`transition-colors text-base font-light font-montserrat ${
              isScrolled 
                ? 'text-muted-foreground hover:text-foreground' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className={`backdrop-blur-sm border rounded-full px-6 py-2 text-base font-light font-montserrat transition-all duration-300 ${
              isScrolled 
                ? 'bg-accent hover:bg-accent/90 text-accent-foreground border-accent' 
                : 'bg-white/10 border-white/20 hover:bg-white/20 text-white'
            }`}
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
            className={`w-10 h-10 transition-colors duration-300 ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4 pt-4 border-t backdrop-blur-sm rounded-lg mx-4 transition-all duration-300 ${
          isScrolled 
            ? 'border-gray-200 bg-white/90' 
            : 'border-white/20 bg-black/20'
        }`}>
          <div className="space-y-2 p-4">
            <button 
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-3 py-2 transition-colors text-base font-light font-montserrat ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('divisions')}
              className={`block w-full text-left px-3 py-2 transition-colors text-base font-light font-montserrat ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Divisions
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className={`block w-full text-left px-3 py-2 transition-colors text-base font-light font-montserrat ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Showcase
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-3 py-2 transition-colors text-base font-light font-montserrat ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className={`w-full backdrop-blur-sm border rounded-full text-base font-light font-montserrat transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground border-accent' 
                    : 'bg-white/10 border-white/20 hover:bg-white/20 text-white'
                }`}
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
