
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building2, Rocket, Mail, User, GraduationCap, FileText, TrendingUp, Award } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const DivisionSignup = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    yearOfStudy: '',
    whyInterested: ''
  });

  const divisionData = {
    'investment-banking': {
      icon: Building2,
      title: 'Investment Banking Division',
      subtitle: 'WIBS - Waterloo Investment Banking Society',
      description: 'Join our selective investment banking division focused on M&A, financial modeling, and market analysis.',
      benefits: [
        {
          icon: FileText,
          title: 'Professional Experience',
          description: 'Work on real deal structures and financial models'
        },
        {
          icon: TrendingUp,
          title: 'Market Research',
          description: 'Conduct equity research and sector analysis'
        },
        {
          icon: Award,
          title: 'Mentorship',
          description: 'Learn from finance professionals and alumni'
        }
      ],
      color: 'bg-yellow-400'
    },
    'venture-capital': {
      icon: Rocket,
      title: 'Venture Capital Division',
      subtitle: 'Startup Incubation & Advisory',
      description: 'Be part of our venture capital division, advising startups and conducting due diligence.',
      benefits: [
        {
          icon: FileText,
          title: 'Professional Experience',
          description: 'Work on real deal structures and financial models'
        },
        {
          icon: TrendingUp,
          title: 'Market Research',
          description: 'Conduct equity research and sector analysis'
        },
        {
          icon: Award,
          title: 'Mentorship',
          description: 'Learn from finance professionals and alumni'
        }
      ],
      color: 'bg-yellow-400'
    }
  };

  const division = divisionData[slug as keyof typeof divisionData];

  if (!division) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Division Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will be in touch soon.');
    navigate('/');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with geometric pattern */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-gray-300 rotate-45"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border border-gray-300 rotate-12"></div>
            <div className="absolute bottom-10 left-1/3 w-40 h-40 border border-gray-300 -rotate-12"></div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-16 h-16 ${division.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <division.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-gray-900">{division.title}</h1>
                <p className="text-lg text-gray-600 font-medium">{division.subtitle}</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">{division.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Benefits Cards */}
          <div className="lg:col-span-1 space-y-6">
            {division.benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${division.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 shadow-lg">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-2xl text-gray-900">Application Form</CardTitle>
                <p className="text-gray-600">Tell us about yourself and join our team</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">First Name</label>
                      <Input
                        placeholder="Enter your first name"
                        className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Last Name</label>
                      <Input
                        placeholder="Enter your last name"
                        className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@university.ca"
                      className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">University</label>
                    <Input
                      placeholder="Laurier / Waterloo"
                      className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                      value={formData.university}
                      onChange={(e) => handleInputChange('university', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Year of Study</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                      value={formData.yearOfStudy}
                      onChange={(e) => handleInputChange('yearOfStudy', e.target.value)}
                      required
                    >
                      <option value="">Select your year</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Why are you interested in {division.title}?
                    </label>
                    <Textarea
                      placeholder="Tell us about your interest and what you hope to contribute..."
                      className="min-h-[120px] border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                      value={formData.whyInterested}
                      onChange={(e) => handleInputChange('whyInterested', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Resume Upload</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="resume-upload" />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <div className="space-y-2">
                          <FileText className="h-8 w-8 text-gray-400 mx-auto" />
                          <p className="text-sm text-gray-600">Choose File or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className={`w-full ${division.color} hover:bg-yellow-500 text-black font-semibold py-3 text-lg`}
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
