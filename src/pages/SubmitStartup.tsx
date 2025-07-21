
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, Calendar, Target, Users, AlertCircle, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const SubmitStartup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startupName: '',
    logo: '',
    industry: '',
    foundingYear: '',
    
    oneLiner: '',
    description: '',
    website: '',
    needs: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Format data for Discord webhook
      const discordData = {
        embeds: [
          {
            title: "🚀 New Startup Submission",
            color: 0x5865F2,
            fields: [
              { name: "Startup Name", value: formData.startupName, inline: true },
              { name: "Industry", value: formData.industry, inline: true },
              { name: "Founded", value: formData.foundingYear, inline: true },
              { name: "One-liner Pitch", value: formData.oneLiner },
              { name: "Description", value: formData.description },
              { name: "Website", value: formData.website || "Not provided", inline: true },
              { name: "Logo URL", value: formData.logo || "Not provided", inline: true },
              { name: "What they need", value: formData.needs || "Not specified" }
            ],
            ...(formData.logo && { thumbnail: { url: formData.logo } }),
            timestamp: new Date().toISOString(),
            footer: { text: "WealthCre8 Startup Submission" }
          }
        ]
      };

      const response = await fetch('https://discord.com/api/webhooks/1396675227198423162/DgIadsDlDDy8eFcnTQnPLjpLU6jNkvw_ZieUx3z3qot6pl2TNKK1lOm6Hn1xN7DKAySA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordData),
      });

      if (response.ok) {
        alert('Startup submission received! Our Venture Capital team will review and get back to you soon.');
        navigate('/');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Black Background */}
      <div className="relative bg-black">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-white hover:text-gray-200 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-6">
            <div className="mx-auto mb-6">
              <div className="rocket-animation">
                <Rocket className="h-20 w-20 text-yellow-400" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Submit <span className="gradient-text">Your Startup</span></h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Join our startup showcase and take part in building a venture ecosystem that empowers early-stage startups with the insight, support, and exposure they need to grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Application Notice:</strong> All startup submissions are subject to review and approval 
                by our Venture Capital Division before being featured in our showcase.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name of Startup *</label>
                    <Input
                      placeholder="Your startup name"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.startupName}
                      onChange={(e) => handleInputChange('startupName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Industry / Sector *</label>
                    <Input
                      placeholder="e.g., HealthTech, FinTech, Consumer Goods"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Founding Year *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="2024"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.foundingYear}
                      onChange={(e) => handleInputChange('foundingYear', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Link to Logo</label>
                  <Input
                    placeholder="https://yourstartup.com/logo.png"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.logo}
                    onChange={(e) => handleInputChange('logo', e.target.value)}
                  />
                  <p className="text-xs text-gray-500">Direct link to your startup logo image</p>
                </div>
              </CardContent>
            </Card>

            {/* Venture Summary */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Venture Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">One-liner Pitch *</label>
                  <div className="relative">
                    <Target className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="e.g., Uber for rural logistics"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.oneLiner}
                      onChange={(e) => handleInputChange('oneLiner', e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500">Concise description of what your startup does</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Short Description *</label>
                  <Textarea
                    placeholder="2-3 sentences about what your startup does, the problem you're solving, and your solution..."
                    className="min-h-[100px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="https://yourstartup.com"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">What do you need?</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      placeholder="e.g., Software Engineers, Marketing Specialists, Co-founder (CTO), Product Managers..."
                      className="pl-10 pt-10 min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.needs}
                      onChange={(e) => handleInputChange('needs', e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-gray-500">What roles or expertise are you looking for?</p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg"
                className="px-12 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitStartup;
