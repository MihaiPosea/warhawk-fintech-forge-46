
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Building2, Rocket, BarChart3, Shield, PieChart, TrendingUp, ArrowRight, Linkedin, Target, Users, Award, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Divisions = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (divisionTitle: string) => {
    setOpenSections(prev => ({
      ...prev,
      [divisionTitle]: !prev[divisionTitle]
    }));
  };

  const currentDivisions = [
    {
      icon: Building2,
      title: "Investment Banking",
      subtitle: "WIBS - Waterloo Investment Banking Society",
      description: "Hands-on experience in financial modeling, deal execution, and market analysis, preparing students for top-tier investment banking roles.",
      learnMore: {
        whyWIBS: {
          title: "Why WIBS?",
          points: [
            {
              icon: Target,
              title: "Selective and Focused Community",
              description: "A highly selective group of top Laurier & Waterloo students committed to breaking into top tier investment banking and private equity roles. WIBS will launch as a small invite-only society limited to 5-10 members to maintain quality and focus."
            },
            {
              icon: Users,
              title: "Structured Accountability & Support", 
              description: "During recruiting cycles members are required to stay disciplined with bi-weekly check-ins, mock interviews, and technical training to keep their networking, interview prep, and deal knowledge on track. This all feeds into the end goal of producing well-prepared candidates who will have the ability to pursue prestigious career opportunities, while aiding each other in the process."
            },
            {
              icon: Award,
              title: "Resume-Boosting Projects",
              description: "Work on real, industry-relevant initiatives like M&A research reports, LBO case studies, and various other (TBD) applications that enhance technical skills and provide credible resume entries."
            }
          ]
        },
        reportsProjects: {
          title: "Reports & Projects",
          projects: [
            {
              title: "M&A Research Reports",
              description: "Comprehensive analysis of merger and acquisition opportunities across various sectors"
            },
            {
              title: "LBO Case Studies", 
              description: "Detailed leveraged buyout analysis and financial modeling exercises"
            },
            {
              title: "Industry Sector Analysis",
              description: "Deep-dive research into emerging markets and industry trends"
            },
            {
              title: "IPO Valuation Models",
              description: "Financial modeling and valuation frameworks for public offerings"
            }
          ]
        },
        differentiation: "WIBS will be the first club to focus solely on sell-side/IB tasks instead of combining it in with equity research and stock pitches. WIBS will also be the first inter-city finance club, aiming to attract the highest performers from both schools."
      },
      founders: [
        {
          name: "Martin Mcconkey",
          role: "Co-Founder, Investment Banking Team Lead",
          image: "/lovable-uploads/506f68a3-2b30-48d4-807a-3808dded96ab.png",
          linkedin: "https://www.linkedin.com/in/martinmcco/"
        },
        {
          name: "Jennifer Peter",
          role: "Co-Founder, Investment Banking Team Lead", 
          image: "/lovable-uploads/ddcac406-e02d-4671-bff3-a916584c2c1c.png",
          linkedin: "https://www.linkedin.com/in/jennifer-peter/"
        }
      ]
    },
    {
      icon: Rocket,
      title: "Venture Capital",
      subtitle: "Startup Incubation & Advisory",
      description: "Acting as an incubator, advising startups through strategic guidance, due diligence, and connecting them with resources to accelerate growth.",
      learnMore: {
        description: "Our Venture Capital Division acts as an incubator, advising startups and founders through strategic guidance, conducting thorough due diligence, and connecting them with the right people and resources to accelerate their growth.",
        quote: "We are simply getting you on the ground running.",
        process: {
          title: "Our Process",
          steps: [
            {
              step: 1,
              title: "Startups Reach Out",
              description: "Startups contact Warhawk Capital's Venture Capital Division seeking guidance and support for their growth journey."
            },
            {
              step: 2,
              title: "Strategic Advisory",
              description: "We provide comprehensive strategic guidance, market analysis, and business development support tailored to each startup's needs."
            },
            {
              step: 3,
              title: "Due Diligence",
              description: "Our team conducts thorough due diligence, evaluating market potential, financial projections, and growth strategies."
            },
            {
              step: 4,
              title: "Network Connection",
              description: "We connect startups with the right people, mentors, and resources within our extensive network to accelerate growth."
            },
            {
              step: 5,
              title: "Funding Success",
              description: "Startups secure funding and achieve their growth milestones with our comprehensive support and guidance."
            }
          ]
        }
      },
      founders: [
        {
          name: "Mihai Posea",
          role: "Co-Founder, Venture Capital Division Lead",
          image: "/lovable-uploads/e7a6b031-44e9-400c-a456-99c7f3e61e4c.png",
          linkedin: "https://www.linkedin.com/in/mihaiposea/"
        },
        {
          name: "Gabriel Pogrin",
          role: "Co-Founder, Venture Capital Division Lead",
          image: "/lovable-uploads/6c3aa9ac-789b-4edb-a8ef-17fe8a72ef97.png",
          linkedin: "https://www.linkedin.com/in/gabrielpogrin/"
        }
      ]
    }
  ];

  const handleJoinDivision = (divisionTitle: string) => {
    const slug = divisionTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/division/${slug}`);
  };

  return (
    <section id="divisions" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-left space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-in">
            Our <span className="gradient-text">Divisions</span>
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {currentDivisions.map((division, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <division.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl">{division.title}</CardTitle>
                  <p className="text-sm text-accent font-medium">{division.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{division.description}</p>
                
                {/* Collapsible Learn More Section */}
                <Collapsible 
                  open={openSections[division.title]} 
                  onOpenChange={() => toggleSection(division.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Learn More
                      <ChevronDown className={`h-4 w-4 transition-transform ${openSections[division.title] ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 mt-4 bg-secondary/30 rounded-lg p-4">
                    {division.learnMore.whyWIBS && (
                      <div className="space-y-3">
                        <h6 className="font-medium text-sm">{division.learnMore.whyWIBS.title}</h6>
                        <div className="space-y-3">
                          {division.learnMore.whyWIBS.points.map((point, idx) => (
                            <div key={idx} className="flex gap-3">
                              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <point.icon className="h-4 w-4 text-accent" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">{point.title}</p>
                                <p className="text-xs text-muted-foreground">{point.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {division.learnMore.description && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{division.learnMore.description}</p>
                        {division.learnMore.quote && (
                          <p className="text-sm font-medium italic">"{division.learnMore.quote}"</p>
                        )}
                      </div>
                    )}

                    {division.learnMore.process && (
                      <div className="space-y-2">
                        <h6 className="font-medium text-sm">{division.learnMore.process.title}</h6>
                        <div className="grid grid-cols-1 gap-2">
                          {division.learnMore.process.steps.map((step, idx) => (
                            <div key={idx} className="flex gap-2 items-start">
                              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-black">{step.step}</span>
                              </div>
                              <div>
                                <p className="font-medium text-xs">{step.title}</p>
                                <p className="text-xs text-muted-foreground">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {division.learnMore.reportsProjects && (
                      <div className="space-y-2">
                        <h6 className="font-medium text-sm">{division.learnMore.reportsProjects.title}</h6>
                        <div className="grid grid-cols-1 gap-2">
                          {division.learnMore.reportsProjects.projects.map((project, idx) => (
                            <div key={idx} className="bg-white/50 rounded-lg p-2">
                              <p className="font-medium text-xs">{project.title}</p>
                              <p className="text-xs text-muted-foreground">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {division.learnMore.differentiation && (
                      <div className="pt-2 border-t border-border">
                        <h6 className="font-medium text-sm mb-1">Differentiation</h6>
                        <p className="text-xs text-muted-foreground">{division.learnMore.differentiation}</p>
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>

                {/* Founders Section */}
                <div>
                  <h5 className="font-semibold mb-3">Meet Our Founders</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {division.founders.map((founder, idx) => (
                      <div key={idx} className="text-left space-y-2">
                        <div className="w-20 h-20 rounded-full border-2 border-accent/20 overflow-hidden">
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{founder.name}</p>
                          <p className="text-xs text-muted-foreground">{founder.role}</p>
                          <a 
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-accent hover:text-accent/80 transition-colors mt-1"
                          >
                            <Linkedin className="h-3 w-3" />
                            <span className="text-xs">LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => handleJoinDivision(division.title)}
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
    </section>
  );
};

export default Divisions;
