
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Rocket, Upload, Globe, DollarSign, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const SubmitStartup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    founderName: '',
    email: '',
    website: '',
    industry: '',
    stage: '',
    fundingAmount: '',
    description: '',
    businessModel: '',
    traction: '',
    teamSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Startup submitted:', formData);
    alert('Startup submission received! Our Venture Capital team will review and get back to you soon.');
    navigate('/');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                <Rocket className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Submit Your Startup</h1>
                <p className="text-yellow-400 font-medium">Get Advisory & Investment Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Information Section */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Venture Capital Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Our Venture Capital division provides comprehensive support to early-stage startups through strategic advisory, due diligence, and network connections.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <Target className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white">Strategic Advisory</h4>
                      <p className="text-sm text-gray-300">Business strategy & growth planning</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white">Network Access</h4>
                      <p className="text-sm text-gray-300">Connect with investors & mentors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-400/5 border-yellow-400/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-yellow-400">What We Look For</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Innovative business models with scalable potential</li>
                    <li>• Strong founding teams with relevant experience</li>
                    <li>• Clear market opportunity and competitive advantage</li>
                    <li>• Early traction or proof of concept</li>
                    <li>• Alignment with our investment thesis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Submission Form */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Startup Details</CardTitle>
                <p className="text-gray-300">Tell us about your startup and vision</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Company Name</label>
                      <Input
                        placeholder="Your startup name"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Founder Name</label>
                      <Input
                        placeholder="Your full name"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        value={formData.founderName}
                        onChange={(e) => handleInputChange('founderName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Email</label>
                      <Input
                        type="email"
                        placeholder="founder@startup.com"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Website</label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="https://yourstartup.com"
                          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Industry</label>
                      <Input
                        placeholder="e.g., FinTech, HealthTech, AI"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Stage</label>
                      <Input
                        placeholder="e.g., Pre-seed, Seed, Series A"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        value={formData.stage}
                        onChange={(e) => handleInputChange('stage', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Funding Amount Sought</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="e.g., $100K, $1M"
                        className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        value={formData.fundingAmount}
                        onChange={(e) => handleInputChange('fundingAmount', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Business Description</label>
                    <Textarea
                      placeholder="Describe your business, the problem you're solving, and your solution..."
                      className="min-h-[100px] bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Business Model</label>
                    <Textarea
                      placeholder="How do you make money? What's your revenue model?"
                      className="min-h-[80px] bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      value={formData.businessModel}
                      onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Traction & Metrics</label>
                    <Textarea
                      placeholder="Share key metrics, user growth, revenue, partnerships, etc."
                      className="min-h-[80px] bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      value={formData.traction}
                      onChange={(e) => handleInputChange('traction', e.target.value)}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  >
                    Submit Startup
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

export default SubmitStartup;
