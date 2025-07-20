
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Inter-University Collaboration",
      description: "Uniting top students from Wilfrid Laurier and University of Waterloo"
    },
    {
      icon: Target,
      title: "Multi-Strategy Focus",
      description: "Structured like a modern fund with Investment Banking and Venture Capital arms"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Building practical skills for careers in public and private markets"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-left space-y-4 mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Warhawk</span>
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Bridging Excellence Across Universities</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Warhawk Student Capital is a student-led, inter-university capital fund that combines 
              the best of both worlds: Laurier's renowned finance program with Waterloo's technical 
              innovation. Our unique approach creates opportunities for students to gain practical 
              experience in investment research, trading, modeling, and due diligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond technical development, Warhawk fosters exploration, networking, and professional 
              growth. As we expand, new divisions will be added to reflect the evolving world of 
              finance and prepare students to lead it.
            </p>
            <Button 
              onClick={() => navigate('/structure')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground group mt-6"
            >
              Our Structure
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center p-8">
              <img 
                src="/lovable-uploads/3af49b36-b4ff-4f97-a73a-27e50bcdf01a.png" 
                alt="Warhawk Capital Logo"
                className="w-full h-full object-contain scale-150"
              />
            </div>
          </div>
        </div>

        
        {/* Stats as tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="text-center p-8 bg-card border-border">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 font-inter">2</div>
            <div className="text-lg sm:text-xl text-muted-foreground uppercase tracking-wide font-medium font-inter">Universities</div>
          </Card>
          <Card className="text-center p-8 bg-card border-border">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 font-inter">1</div>
            <div className="text-lg sm:text-xl text-muted-foreground uppercase tracking-wide font-medium font-inter">Mission</div>
          </Card>
          <Card className="text-center p-8 bg-card border-border">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 font-inter">100%</div>
            <div className="text-lg sm:text-xl text-muted-foreground uppercase tracking-wide font-medium font-inter">Hands-On</div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;
