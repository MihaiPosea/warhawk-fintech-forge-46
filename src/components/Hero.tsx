
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
        <div className="space-y-12">
          {/* Main Heading - Enhanced and Dynamic */}
          <div className="space-y-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/80 font-light drop-shadow-md uppercase tracking-widest font-bahnschrift">
              Welcome to
            </p>
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-8xl lg:text-[12rem] xl:text-[14rem] font-bold tracking-tight drop-shadow-lg font-bahnschrift leading-none">
                <span className="text-white">WARHAWK </span>
                <span className="text-yellow-400">CAPITAL</span>
              </h1>
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white max-w-6xl mx-auto leading-relaxed drop-shadow-md font-montserrat">
              Warhawk Capital is the student-led fund bridging top finance talent from Laurier and Waterloo through hands-on experience and a shared standard of excellence.
            </p>
          </div>

          {/* Stats - Moved higher and larger */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 font-montserrat">2</div>
              <div className="text-lg sm:text-xl lg:text-2xl text-white uppercase tracking-wide font-medium drop-shadow-md font-montserrat">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 font-montserrat">1</div>
              <div className="text-lg sm:text-xl lg:text-2xl text-white uppercase tracking-wide font-medium drop-shadow-md font-montserrat">Mission</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 font-montserrat">100%</div>
              <div className="text-lg sm:text-xl lg:text-2xl text-white uppercase tracking-wide font-medium drop-shadow-md font-montserrat">Hands-On</div>
            </div>
          </div>

        </div>

        {/* CTA Buttons - Moved lower and larger */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection('divisions')} className="bg-foreground hover:bg-foreground/90 text-background px-12 py-4 text-xl font-light group rounded-full font-montserrat">
              Explore Divisions
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="bg-white/90 border-white text-foreground hover:bg-white hover:text-foreground px-12 py-4 text-xl font-light rounded-full font-montserrat">
              Learn More
            </Button>
          </div>

          {/* Est. 2025 */}
          <div className="text-lg text-white/60 uppercase tracking-wider mt-8 font-montserrat">
            Est. 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
