
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, TrendingUp, Award, Building, Building2 } from 'lucide-react';

const Reports = () => {
  return (
    <section className="section-padding bg-secondary/20">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-left space-y-8 mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold scroll-fade-in">
            <span className="text-foreground">Explore</span> <span className="gradient-text">our work.</span>
          </h2>
          <div className="w-full h-px bg-border"></div>
          <div className="text-2xl font-bold text-primary tracking-wider uppercase mb-4">
            Investment Banking Division
          </div>
        </div>

        {/* Update Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-left">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Reports Coming Soon</h3>
          <p className="text-muted-foreground max-w-2xl">
            Our Investment Banking Division is hard at work producing comprehensive market analysis, 
            M&A research reports, and industry insights. Check back soon to explore our latest research 
            and financial modeling work.
          </p>
        </div>

        {/* Preview of Report Types */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            {
              icon: TrendingUp,
              title: "Flagship M&A Pitch", 
              description: "Comprehensive M&A pitch presentations showcasing strategic acquisition opportunities",
              division: "Investment Banking"
            },
            {
              icon: Award,
              title: "Industry Analysis",
              description: "Deep-dive sector research and trends",
              division: "Investment Banking"
            }
          ].map((report, index) => (
            <Card key={index} className="bg-card border-border opacity-60 relative">
              <CardContent className="p-6 text-left space-y-4">
                <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
                  <report.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">{report.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{report.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reports;
