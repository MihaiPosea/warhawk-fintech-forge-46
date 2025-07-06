
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You'll be notified when new divisions launch.",
      });
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Be the <span className="gradient-text">First to Know</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get notified when new divisions launch and exclusive early access to applications
          </p>
        </div>

        <Card className="bg-card border-border max-w-2xl mx-auto">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Stay Connected</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background border-border focus:border-primary"
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Subscribed
                    </>
                  ) : (
                    <>
                      Notify Me
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <h4 className="font-semibold mb-1">Investment Banking</h4>
                <p className="text-sm text-muted-foreground">Applications Open</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-1">Venture Capital</h4>
                <p className="text-sm text-muted-foreground">Now Accepting</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-1">Future Divisions</h4>
                <p className="text-sm text-muted-foreground">Early Access</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Contact Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Questions? Want to partner with us? Get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Partner With Us
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Submit Startup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
