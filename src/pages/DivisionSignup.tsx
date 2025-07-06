
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building2, Rocket, Mail, User, GraduationCap } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const DivisionSignup = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    program: '',
    year: '',
    experience: '',
    motivation: ''
  });

  const divisionData = {
    'investment-banking': {
      icon: Building2,
      title: 'Investment Banking',
      subtitle: 'WIBS - Waterloo Investment Banking Society',
      description: 'Join our selective investment banking division focused on M&A, financial modeling, and market analysis.',
      requirements: [
        'Strong academic performance (3.5+ GPA preferred)',
        'Finance, Economics, or Business background',
        'Excellent analytical and communication skills',
        'Commitment to bi-weekly meetings and projects'
      ],
      color: 'bg-green-500/10 text-green-400 border-green-500/20'
    },
    'venture-capital': {
      icon: Rocket,
      title: 'Venture Capital',
      subtitle: 'Startup Incubation & Advisory',
      description: 'Be part of our venture capital division, advising startups and conducting due diligence.',
      requirements: [
        'Interest in entrepreneurship and startups',
        'Business, Engineering, or related field',
        'Strong research and analytical abilities',
        'Passion for innovation and growth'
      ],
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    }
  };

  const division = divisionData[slug as keyof typeof divisionData];

  if (!division) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Division Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will be in touch soon.');
    navigate('/');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <division.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">{division.title}</h1>
                <p className="text-accent font-medium">{division.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Division Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>About This Division</span>
                    <Badge className={division.color}>Active</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{division.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {division.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-accent">What to Expect</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Hands-on projects with real-world applications</li>
                    <li>• Mentorship from industry professionals</li>
                    <li>• Networking opportunities with peers and alumni</li>
                    <li>• Skills development workshops and training</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
                <p className="text-muted-foreground">Tell us about yourself and why you're interested</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Your full name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="your.email@university.ca"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">University</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Laurier / Waterloo"
                          className="pl-10"
                          value={formData.university}
                          onChange={(e) => handleInputChange('university', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Program & Year</label>
                      <Input
                        placeholder="e.g., BBA Finance, 3rd Year"
                        value={formData.program}
                        onChange={(e) => handleInputChange('program', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Relevant Experience</label>
                    <Textarea
                      placeholder="Tell us about any relevant coursework, internships, projects, or extracurricular activities..."
                      className="min-h-[100px]"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Why are you interested in this division?</label>
                    <Textarea
                      placeholder="What motivates you to join our team? What do you hope to learn and contribute?"
                      className="min-h-[120px]"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionSignup;
