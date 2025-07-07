
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
        <div className="space-y-7">
          {/* Main Heading - Enhanced and Dynamic */}
          <div className="space-y-5">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light drop-shadow-md uppercase tracking-widest font-inter">
              Welcome to
            </p>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight drop-shadow-lg font-inter leading-none">
                <span className="text-white">WARHAWK </span>
                <span className="text-yellow-400">CAPITAL</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md font-inter">
              Warhawk Capital is the student-led fund bridging top finance talent from Laurier and Waterloo through hands-on experience and a shared standard of excellence.
            </p>
          </div>

          {/* Stats - Moved lower and tighter spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-1 font-inter">2</div>
              <div className="text-sm sm:text-base lg:text-lg text-white uppercase tracking-wide font-medium drop-shadow-md font-inter">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-1 font-inter">1</div>
              <div className="text-sm sm:text-base lg:text-lg text-white uppercase tracking-wide font-medium drop-shadow-md font-inter">Mission</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-1 font-inter">100%</div>
              <div className="text-sm sm:text-base lg:text-lg text-white uppercase tracking-wide font-medium drop-shadow-md font-inter">Hands-On</div>
            </div>
          </div>

        </div>

        {/* CTA Buttons - Moved higher and tighter spacing */}
        <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 w-full">
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection('divisions')} className="bg-foreground hover:bg-foreground/90 text-background px-7 py-3 text-base font-light group rounded-full font-inter">
              Explore Divisions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="bg-white/90 border-white text-foreground hover:bg-white hover:text-foreground px-7 py-3 text-base font-light rounded-full font-inter">
              Learn More
            </Button>
          </div>

          {/* Est. 2025 */}
          <div className="text-sm text-white/60 uppercase tracking-wider mt-4 font-inter">
            Est. 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
