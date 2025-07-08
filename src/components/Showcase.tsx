
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Calendar, ArrowRight, BarChart3, Shield, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Showcase = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const placeholderStartups = [
    {
      name: "Polarity",
      industry: "Frontier AI research & deployment",
      stage: "Pre-seed",
      description: "Polarity is an autonomous multi-agent engine that maps your whole codebase, understands inter-file dependencies, and fixes technical debt automatically. Developers keep shipping features while Polarity quietly optimizes, documents, and safeguards code quality in every commit; no manual intervention needed.",
      openings: ["Engineer", "Marketer"],
      status: "Active",
      logo: "/lovable-uploads/3ed3e4ec-f779-470f-81e7-86b95b2e1594.png",
      location: "Waterloo, ON",
      founded: "June 2025",
      funding: "$153k at $5M valuation",
      oneLiner: "Autonomously perfects entire codebases, with SOTA Accuracy",
      website: "https://www.polarity.cc/"
    },
    {
      name: "GreenVest Capital",
      industry: "Sustainable Finance", 
      stage: "Seed",
      description: "ESG-focused investment platform connecting retail investors with green opportunities",
      openings: ["Co-founder (CTO)", "Full-stack Developer", "Marketing Intern"],
      status: "Currently Being Updated"
    },
    {
      name: "QuantEdge Analytics",
      industry: "Trading Tech",
      stage: "Pre-seed",
      description: "Machine learning algorithms for high-frequency trading and risk management",
      openings: ["Quantitative Analyst", "ML Engineer Intern", "Research Associate"],
      status: "Currently Being Updated"
    }
  ];

  const futureDivisions = [
    {
      icon: BarChart3,
      title: "Quantitative Trading",
      description: "Algorithmic trading strategies and systematic investment approaches using advanced mathematical models.",
      color: "bg-muted/50 text-muted-foreground border-muted"
    },
    {
      icon: Shield,
      title: "Risk Management", 
      description: "Portfolio risk assessment, stress testing, and comprehensive risk analytics for institutional-grade management.",
      color: "bg-muted/50 text-muted-foreground border-muted"
    },
    {
      icon: PieChart,
      title: "More to Come",
      description: "Additional specialized divisions will be announced as we continue to expand our comprehensive finance education platform.",
      color: "bg-muted/50 text-muted-foreground border-muted"
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Startup Showcase Section */}
      <section id="showcase" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-left space-y-4 mb-16">
            <div className="text-2xl font-bold text-primary tracking-wider uppercase mb-4">
              Venture Capital Division
            </div>
          </div>

          {/* Black container with white margins */}
          <div className="bg-black text-white rounded-2xl px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div className="text-left space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold scroll-fade-in">
                Startup <span className="gradient-text">Showcase</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-5xl leading-relaxed">
                Discover innovative startups partnered with our Venture Capital Division. 
                These companies represent the future of technology and innovation, seeking 
                talented students for internships, co-founder opportunities, and full-time positions.
              </p>
            </div>

            {/* Startup Cards */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {placeholderStartups.map((startup, index) => (
                <div 
                  key={index} 
                  className="relative h-[420px] perspective-1000 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                    flippedCards.includes(index) ? 'rotate-y-180' : ''
                  }`}>
                    
                    {/* Front Side */}
                    <Card className="absolute inset-0 w-full h-full bg-white/5 border-white/20 backface-hidden">
                      {startup.status === "Currently Being Updated" && (
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10">
                          <div className="text-center space-y-2">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                              <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <p className="font-semibold text-white">Currently Being Updated</p>
                            <p className="text-sm text-white/70">Coming Soon</p>
                          </div>
                        </div>
                      )}

                      <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
                        <div className="flex-1 flex items-center justify-center w-full">
                          {startup.logo ? (
                            <img 
                              src={startup.logo} 
                              alt={startup.name} 
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                console.error('Image failed to load:', startup.logo);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <Building className="h-32 w-32 text-white" />
                          )}
                        </div>
                        
                        <p className="text-white/60 text-sm mt-4">Click to learn more</p>
                      </CardContent>
                    </Card>

                    {/* Back Side */}
                    <Card className="absolute inset-0 w-full h-full bg-white/5 border-white/20 backface-hidden rotate-y-180">
                      <CardContent className="flex flex-col h-full p-6 text-left space-y-4">
                        <div className="flex-1 flex flex-col justify-center space-y-4">
                          <h3 className="text-2xl font-bold text-white">{startup.name}</h3>
                          
                          {startup.oneLiner && (
                            <p className="text-lg font-semibold text-white/90 leading-tight">{startup.oneLiner}</p>
                          )}
                          
                          <div className="flex items-center space-x-3">
                            <p className="text-base text-white/80">{startup.industry}</p>
                            <Badge variant="outline" className="text-sm border-white/50 text-white/80 px-3 py-1">
                              {startup.stage}
                            </Badge>
                          </div>
                          
                          <p className="text-white/90 text-base leading-relaxed">{startup.description}</p>
                          
                          {startup.location && startup.founded && (
                            <div className="text-sm text-white/70">
                              📍 {startup.location} • Founded {startup.founded}
                            </div>
                          )}

                          {startup.funding && (
                            <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                              <div className="text-lg font-bold text-white">{startup.funding}</div>
                              <div className="text-sm text-white/70">Current Valuation & Funding</div>
                            </div>
                          )}
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-base">
                              <Users className="h-4 w-4 text-white" />
                              <span className="font-medium text-white">Open Positions:</span>
                            </div>
                            <div className="text-base text-white/80">
                              {startup.openings.join(" • ")}
                            </div>
                          </div>
                        </div>

                        {startup.website && (
                          <Button 
                            variant="outline" 
                            className="bg-white border-white text-black hover:bg-gray-100 text-base py-2 px-4 mt-3" 
                            disabled={startup.status === "Currently Being Updated"}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(startup.website, '_blank');
                            }}
                          >
                            Visit Website
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

          {/* Call to Action */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Partner with Warhawk</h3>
              <p className="text-white/80 max-w-3xl text-lg leading-relaxed">
                Are you a startup looking for talented students? Join our showcase and connect 
                with the next generation of finance and technology leaders.
              </p>
            </div>
              <Button 
                size="lg"
                onClick={() => navigate('/submit-startup')}
                className="bg-accent hover:bg-accent/90 text-black px-10 py-4 group text-lg font-semibold"
              >
              Submit Your Startup
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Divisions Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-left space-y-8 mb-8">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold scroll-fade-in">
              <span className="text-foreground">Coming</span> <span className="gradient-text">Soon</span>
            </h3>
            <div className="w-full h-px bg-border"></div>
            <p className="text-muted-foreground">
              Expanding our expertise across additional finance sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureDivisions.map((division, index) => (
              <Card key={index} className="bg-card border-border opacity-60">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center">
                      <division.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Badge className={division.color}>
                      Coming Soon
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
      </section>
    </>
  );
};

export default Showcase;
