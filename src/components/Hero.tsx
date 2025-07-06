
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden p-8">
      {/* Clean black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* White border frame */}
      <div className="absolute inset-8 border-4 border-white rounded-lg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white drop-shadow-lg">
              <span className="block text-slate-50">WARHAWK</span>
              <span className="block font-extralight">CAPITAL</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              The bridge connecting top finance talent across{' '}
              <span className="font-medium text-yellow-300">Laurier</span> and{' '}
              <span className="font-medium text-yellow-300">Waterloo</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
            Warhawk Capital unites top students from Laurier and Waterloo to gain hands-on experience in competitive areas of finance. Through specialized divisions and a shared standard of excellence, we're building a community of future leaders.
          </p>

          {/* Stats - Made even larger and more prominent */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 pb-8">
            <div className="text-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-3">2</div>
              <div className="text-xl sm:text-2xl text-white uppercase tracking-wide font-medium drop-shadow-md">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-3">1</div>
              <div className="text-xl sm:text-2xl text-white uppercase tracking-wide font-medium drop-shadow-md">Mission</div>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-3">100%</div>
              <div className="text-xl sm:text-2xl text-white uppercase tracking-wide font-medium drop-shadow-md">Hands-On</div>
            </div>
          </div>

          {/* CTA Buttons - Moved below stats */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection('divisions')} className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg font-light group rounded-full">
              Explore Divisions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="bg-white/90 border-white text-foreground hover:bg-white hover:text-foreground px-8 py-3 text-lg font-light rounded-full">
              Learn More
            </Button>
          </div>

          {/* Est. 2025 */}
          <div className="text-sm text-white/60 uppercase tracking-wider">
            Est. 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
