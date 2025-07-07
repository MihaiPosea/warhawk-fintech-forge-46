
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
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/e680c993-0542-42e8-889d-82d07a206755.png')` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* White border frame */}
      <div className="absolute inset-4 border-16 border-white rounded-lg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center min-h-screen">
        <div className="space-y-8">
          {/* Main Heading - Centered */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
              Warhawk Capital
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection('divisions')} className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg font-light group rounded-full">
              Explore Divisions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="bg-white/90 border-white text-foreground hover:bg-white hover:text-foreground px-8 py-3 text-lg font-light rounded-full">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats - Moved to bottom */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">2</div>
              <div className="text-xs sm:text-sm text-white uppercase tracking-wide font-medium drop-shadow-md">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">1</div>
              <div className="text-xs sm:text-sm text-white uppercase tracking-wide font-medium drop-shadow-md">Mission</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">100%</div>
              <div className="text-xs sm:text-sm text-white uppercase tracking-wide font-medium drop-shadow-md">Hands-On</div>
            </div>
          </div>

          {/* Est. 2025 */}
          <div className="text-sm text-white/60 uppercase tracking-wider mt-6">
            Est. 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
