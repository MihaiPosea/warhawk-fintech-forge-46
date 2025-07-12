
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Upload, Globe, Calendar, Target, Users, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const SubmitStartup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startupName: '',
    logo: null as File | null,
    industry: '',
    foundingYear: '',
    
    oneLiner: '',
    description: '',
    website: '',
    needs: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Startup submitted:', formData);
    alert('Startup submission received! Our Venture Capital team will review and get back to you soon.');
    navigate('/');
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange('logo', file);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/b746c0d0-c5e4-4e21-abbd-18e27acc2a05.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
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
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
              <img src="/lovable-uploads/9c45083c-67d5-499a-9772-23568458ba76.png" alt="WC Logo" className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Submit Your Startup</h1>
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
                  <label className="text-sm font-medium text-gray-700">Logo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload your startup logo</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                      Choose File
                    </label>
                    {formData.logo && (
                      <p className="text-sm text-green-600 mt-2">✓ {formData.logo.name}</p>
                    )}
                  </div>
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
                className="px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
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
