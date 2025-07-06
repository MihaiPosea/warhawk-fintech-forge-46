
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Rocket, BarChart3, Shield, PieChart, TrendingUp, ArrowRight } from 'lucide-react';

const Divisions = () => {
  const currentDivisions = [
    {
      icon: Building2,
      title: "Investment Banking",
      subtitle: "WIBS - Waterloo Investment Banking Society",
      description: "Hands-on experience in financial modeling, deal execution, and market analysis, preparing students for top-tier investment banking roles.",
      features: [
        "M&A Research Reports",
        "LBO Case Studies", 
        "Industry Sector Analysis",
        "IPO Valuation Models"
      ],
      highlights: [
        "Selective 5-10 member community",
        "Bi-weekly check-ins & mock interviews",
        "Real industry-relevant projects",
        "First inter-city finance club"
      ],
      status: "Active",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      icon: Rocket,
      title: "Venture Capital",
      subtitle: "Startup Incubation & Advisory",
      description: "Acting as an incubator, advising startups through strategic guidance, due diligence, and connecting them with resources to accelerate growth.",
      features: [
        "Strategic Advisory",
        "Due Diligence",
        "Network Connections",
        "Growth Acceleration"
      ],
      highlights: [
        "End-to-end startup support",
        "Comprehensive market analysis",
        "Extensive mentor network",
        "Funding success tracking"
      ],
      status: "Active",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    }
  ];

  const futureDivisions = [
    {
      icon: BarChart3,
      title: "Quantitative Trading",
      description: "Algorithmic trading strategies and systematic investment approaches using advanced mathematical models.",
      timeline: "Fall 2024",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: Shield,
      title: "Risk Management", 
      description: "Portfolio risk assessment, stress testing, and comprehensive risk analytics for institutional-grade management.",
      timeline: "Spring 2025",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: PieChart,
      title: "Fixed Income",
      description: "Bond trading, yield curve analysis, and credit research for debt securities and structured products.",
      timeline: "Fall 2025",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: TrendingUp,
      title: "Alternative Investments",
      description: "Private equity, hedge funds, real estate, and commodity investment strategies.",
      timeline: "Spring 2026",
      color: "bg-primary/10 text-primary border-primary/20"
    }
  ];

  return (
    <section id="divisions" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Divisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive finance education across multiple specializations
          </p>
        </div>

        {/* Current Divisions */}
        <div className="space-y-8 mb-20">
          <h3 className="text-2xl font-bold text-center">Active Divisions</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {currentDivisions.map((division, index) => (
              <Card key={index} className="card-hover bg-card border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <division.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={division.color}>
                      {division.status}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{division.title}</CardTitle>
                    <p className="text-sm text-primary font-medium">{division.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{division.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Key Projects</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {division.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-2">Highlights</h5>
                      <div className="space-y-1">
                        {division.highlights.map((highlight, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            • {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    Join Division
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Divisions */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Coming Soon</h3>
            <p className="text-muted-foreground">
              Expanding our expertise across all major finance sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {futureDivisions.map((division, index) => (
              <Card key={index} className="bg-card border-border opacity-80 hover:opacity-100 transition-opacity">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <division.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={division.color}>
                      {division.timeline}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{division.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{division.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
