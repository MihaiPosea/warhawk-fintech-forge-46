
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

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
      {/* Hero Image Background with margin and rounded corners */}
      <div 
        style={{
          backgroundImage: 'url(/lovable-uploads/a0ef2dd5-ac29-471e-9318-acb5269c1974.png)'
        }} 
        className="absolute inset-8 bg-cover bg-center bg-no-repeat rounded-3xl" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300">
            <TrendingUp className="h-4 w-4 text-foreground" />
            <span className="text-sm font-light text-foreground">Student-Led Capital Fund</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white drop-shadow-lg">
              <span className="block text-slate-50">warhawk</span>
              <span className="block font-extralight ">student capital</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              Bridging the Gap Between Top Finance Talent at{' '}
              <span className="font-medium text-yellow-300">Laurier</span> and{' '}
              <span className="font-medium text-yellow-300">Waterloo</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
            A student-led, inter-university capital fund combining Laurier's finance strengths 
            with Waterloo's technical edge. Gain hands-on experience in investment research, 
            trading, modeling, due diligence, and risk analysis.
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl font-medium text-white drop-shadow-lg">2</div>
              <div className="text-sm text-white uppercase tracking-wide font-light drop-shadow-md">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-white drop-shadow-lg">5+</div>
              <div className="text-sm text-white uppercase tracking-wide font-light drop-shadow-md">Divisions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-white drop-shadow-lg">100%</div>
              <div className="text-sm text-white uppercase tracking-wide font-light drop-shadow-md">Hands-On</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
