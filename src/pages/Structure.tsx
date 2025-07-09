
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Rocket, BarChart3, Shield, ArrowLeft, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Structure = () => {
  const navigate = useNavigate();

  const activeDivisions = [
    {
      icon: Building2,
      title: "Investment Banking",
      subtitle: "WIBS",
      status: "Active",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      icon: Rocket,
      title: "Venture Capital",
      subtitle: "Startup Advisory",
      status: "Active",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    }
  ];

  const futureDivisions = [
    {
      icon: BarChart3,
      title: "Quantitative Trading",
      subtitle: "Algo Trading",
      status: "Coming Soon",
      color: "bg-muted/50 text-muted-foreground border-muted"
    },
    {
      icon: Shield,
      title: "Risk Management",
      subtitle: "Portfolio Risk",
      status: "Coming Soon", 
      color: "bg-muted/50 text-muted-foreground border-muted"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Our <span className="gradient-text">Structure</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organized like a modern financial institution with specialized divisions
            </p>
          </div>
        </div>
      </div>

      {/* Structure Diagram */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Executive Level */}
          <div className="text-center mb-12">
          <Card className="inline-block bg-accent/10 border-accent/20">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                <img src="/src/assets/wc-logo.png" alt="Warhawk Capital Logo" className="w-full h-full object-contain" />
              </div>
                <h3 className="text-xl font-bold">Warhawk Student Capital</h3>
                <p className="text-muted-foreground">Executive Leadership</p>
              </CardContent>
            </Card>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-16 bg-border"></div>
          </div>

          {/* Active Divisions */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-center mb-8">Active Divisions</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {activeDivisions.map((division, index) => (
                  <Card key={index} className="card-hover bg-card border-border">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <division.icon className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{division.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{division.subtitle}</p>
                      <Badge className={division.color}>
                        {division.status}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Future Divisions */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-8 text-muted-foreground">Upcoming Divisions</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {futureDivisions.map((division, index) => (
                  <Card key={index} className="bg-card border-border opacity-50">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <division.icon className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg text-muted-foreground">{division.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{division.subtitle}</p>
                      <Badge className={division.color}>
                        {division.status}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* More to Come */}
            <div className="text-center">
              <Card className="inline-block bg-card border-border opacity-30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MoreHorizontal className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-muted-foreground mb-2">More to Come</h3>
                  <p className="text-muted-foreground">Additional divisions in development</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
