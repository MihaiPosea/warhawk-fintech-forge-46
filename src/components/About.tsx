
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, TrendingUp, Award, ArrowRight } from 'lucide-react';
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
      icon: TrendingUp,
      title: "Real-World Experience",
      description: "Hands-on experience in trading, modeling, due diligence, and risk analysis"
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
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Warhawk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developing future finance leaders through innovative collaboration and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
            <div className="flex items-center justify-center p-12">
              <img 
                src="/lovable-uploads/3af49b36-b4ff-4f97-a73a-27e50bcdf01a.png" 
                alt="Warhawk Capital Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
