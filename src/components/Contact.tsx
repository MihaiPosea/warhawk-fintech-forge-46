
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
    <section id="contact" className="section-padding py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-16 py-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold scroll-fade-in">
            The future won't wait. <span className="gradient-text">Step into the Warhawk Way.</span>
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">Contact us:</p>
            <a 
              href="mailto:warhawkcapital@gmail.com" 
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              warhawkcapital@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
