
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Calendar, ArrowRight } from 'lucide-react';

const Showcase = () => {
  const placeholderStartups = [
    {
      name: "TechFlow Solutions",
      industry: "FinTech",
      stage: "Series A",
      description: "AI-powered financial analytics platform for institutional investors",
      openings: ["Software Engineer Intern", "Product Manager", "Data Scientist"],
      status: "Currently Being Updated"
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

  return (
    <section id="showcase" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Startup <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover innovative startups partnered with our Venture Capital Division. 
            These companies represent the future of technology and innovation, seeking 
            talented students for internships, co-founder opportunities, and full-time positions.
          </p>
        </div>

        {/* Update Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Updates in Progress</h3>
          <p className="text-muted-foreground">
            We're working on bringing you exciting startup opportunities. Check back soon for featured companies.
          </p>
        </div>

        {/* Placeholder Startup Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {placeholderStartups.map((startup, index) => (
            <Card key={index} className="card-hover bg-card border-border relative overflow-hidden">
              {/* Status Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold">Currently Being Updated</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>

              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/40 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {startup.stage}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl">{startup.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{startup.industry}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{startup.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium">Open Positions:</span>
                  </div>
                  <div className="space-y-1">
                    {startup.openings.map((opening, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground pl-6">
                        • {opening}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full" disabled>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Partner with Warhawk</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Are you a startup looking for talented students? Join our showcase and connect 
              with the next generation of finance and technology leaders.
            </p>
          </div>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 group"
          >
            Submit Your Startup
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
