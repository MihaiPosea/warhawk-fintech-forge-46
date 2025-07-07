
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, TrendingUp, Award, Building, Building2 } from 'lucide-react';

const Reports = () => {
  return (
    <section className="section-padding bg-secondary/20">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold scroll-fade-in">
            <span className="gradient-text">Explore our work...</span>
          </h2>
          <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">
            Investment Banking Division
          </div>
        </div>

        {/* Update Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Reports Coming Soon</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our Investment Banking Division is hard at work producing comprehensive market analysis, 
            M&A research reports, and industry insights. Check back soon to explore our latest research 
            and financial modeling work.
          </p>
        </div>

        {/* Preview of Report Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: FileText,
              title: "M&A Research Reports",
              description: "Comprehensive merger and acquisition analysis",
              division: "Investment Banking"
            },
            {
              icon: TrendingUp,
              title: "LBO Case Studies", 
              description: "Detailed leveraged buyout financial modeling",
              division: "Investment Banking"
            },
            {
              icon: Award,
              title: "Industry Analysis",
              description: "Deep-dive sector research and trends",
              division: "Investment Banking"
            },
            {
              icon: Building,
              title: "IPO Valuations",
              description: "Public offering valuation frameworks",
              division: "Investment Banking"
            }
          ].map((report, index) => (
            <Card key={index} className="bg-card border-border opacity-60 relative">
              <div className="absolute top-2 right-2">
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {report.division}
                </Badge>
              </div>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center mx-auto">
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
