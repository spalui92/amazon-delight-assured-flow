
import React, { useState } from 'react';
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Zap, 
  Info, 
  Star, 
  ThumbsUp, 
  MessageCircle,
  PlayCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

const ProductInfo = () => {
  const [setupProgress, setSetupProgress] = useState(0);
  const isMobile = useIsMobile();
  
  const startSetupGuide = () => {
    // Simulate progress updates
    setSetupProgress(10);
    const interval = setInterval(() => {
      setSetupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Product image and details */}
        <div className="flex-none w-full md:w-1/3">
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-48 md:h-64">
            <img 
              src="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg" 
              alt="Dell XPS 15 Laptop" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="mt-3 md:mt-4">
            <h2 className="text-lg md:text-xl font-bold text-amazon-blue">Dell XPS 15 Laptop</h2>
            <div className="flex items-center mt-1 md:mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-3 w-3 md:h-4 md:w-4 text-amazon-orange" 
                    fill={star <= 4.5 ? "#FF9900" : "none"}
                  />
                ))}
              </div>
              <span className="ml-2 text-xs md:text-sm text-gray-600">4.5 (1,234 reviews)</span>
            </div>
            <p className="text-md md:text-lg font-semibold mt-1 md:mt-2">$1,799.99</p>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="flex-grow">
          <Tabs defaultValue="setup">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="setup" className="text-xs md:text-sm">Setup Guide</TabsTrigger>
              <TabsTrigger value="tips" className="text-xs md:text-sm">Tips & Tricks</TabsTrigger>
              <TabsTrigger value="support" className="text-xs md:text-sm">Support</TabsTrigger>
            </TabsList>
            
            {/* Setup Guide Tab */}
            <TabsContent value="setup" className="space-y-3 md:space-y-4 mt-3 md:mt-4">
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex items-start mb-2 md:mb-3">
                  <div className="bg-amazon-teal rounded-full p-1 mr-2 md:mr-3 flex-none">
                    <Info className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                  <p className="text-xs md:text-sm">Following our guided setup ensures optimal performance and activates your extended warranty.</p>
                </div>
                
                <div className="mb-2 md:mb-3">
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <span>Setup Progress</span>
                    <span>{setupProgress}%</span>
                  </div>
                  <Progress value={setupProgress} className="h-1.5 md:h-2" />
                </div>
                
                {setupProgress === 0 ? (
                  <Button 
                    onClick={startSetupGuide} 
                    className="w-full bg-amazon-orange hover:bg-amazon-lightorange text-black text-xs md:text-sm"
                    size={isMobile ? "sm" : "default"}
                  >
                    Start Interactive Setup Guide
                  </Button>
                ) : setupProgress < 100 ? (
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="font-medium text-sm md:text-base">Setting up your new Dell XPS 15...</h3>
                    <div className="flex items-center text-xs md:text-sm">
                      <Cpu className="h-3 w-3 md:h-4 md:w-4 mr-2 text-amazon-teal" />
                      <span>Optimizing system performance</span>
                    </div>
                    <div className="flex items-center text-xs md:text-sm">
                      <Zap className="h-3 w-3 md:h-4 md:w-4 mr-2 text-amazon-teal" />
                      <span>Configuring power settings for longer battery life</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-2 md:py-3">
                    <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500 mx-auto mb-1 md:mb-2" />
                    <h3 className="font-medium text-green-700 text-sm md:text-base">Setup Complete!</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">Your laptop is now optimized for the best experience</p>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="border border-gray-200 rounded-lg p-3 md:p-4">
                  <div className="flex items-center mb-1 md:mb-2">
                    <Monitor className="h-4 w-4 md:h-5 md:w-5 mr-2 text-amazon-blue" />
                    <h3 className="font-medium text-sm md:text-base">Display Calibration</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Optimize your display colors for work or entertainment</p>
                  <Button 
                    variant="outline" 
                    size={isMobile ? "sm" : "default"} 
                    className="mt-2 w-full text-xs md:text-sm"
                  >
                    Calibrate
                  </Button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3 md:p-4">
                  <div className="flex items-center mb-1 md:mb-2">
                    <HardDrive className="h-4 w-4 md:h-5 md:w-5 mr-2 text-amazon-blue" />
                    <h3 className="font-medium text-sm md:text-base">Storage Management</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Organize your drive for optimal performance</p>
                  <Button 
                    variant="outline" 
                    size={isMobile ? "sm" : "default"} 
                    className="mt-2 w-full text-xs md:text-sm"
                  >
                    Optimize
                  </Button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-3 md:p-4 flex items-center">
                <PlayCircle className="h-6 w-6 md:h-8 md:w-8 text-amazon-orange flex-none" />
                <div className="ml-2 md:ml-3">
                  <h3 className="font-medium text-sm md:text-base">Watch Unboxing & Setup Video</h3>
                  <p className="text-xs md:text-sm text-gray-600">A step-by-step guide to setting up your new laptop</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Tips & Tricks Tab */}
            <TabsContent value="tips" className="space-y-3 md:space-y-4 mt-3 md:mt-4">
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <h3 className="font-medium text-sm md:text-base mb-2 md:mb-3">Get the Most From Your XPS 15</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start">
                    <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-amazon-teal flex-none" />
                    <div>
                      <p className="font-medium text-xs md:text-sm">Battery Optimization</p>
                      <p className="text-xs text-gray-600">Use Dell Power Manager to extend battery life by up to 20%</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-amazon-teal flex-none" />
                    <div>
                      <p className="font-medium text-xs md:text-sm">Keyboard Shortcuts</p>
                      <p className="text-xs text-gray-600">Press Fn+F for quick access to keyboard backlight settings</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-amazon-teal flex-none" />
                    <div>
                      <p className="font-medium text-xs md:text-sm">Display Quality</p>
                      <p className="text-xs text-gray-600">For accurate colors, use the Dell PremierColor app included</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-3 md:p-4">
                <h3 className="font-medium text-sm md:text-base mb-2">Weekly Tips</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">We'll send you personalized tips to get more from your laptop</p>
                <Button 
                  className="w-full bg-amazon-teal hover:bg-amazon-blue text-xs md:text-sm"
                  size={isMobile ? "sm" : "default"}
                >
                  Subscribe to Tips
                </Button>
              </div>
            </TabsContent>
            
            {/* Support Tab */}
            <TabsContent value="support" className="space-y-3 md:space-y-4 mt-3 md:mt-4">
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <h3 className="font-medium text-sm md:text-base mb-2 md:mb-3">Proactive Support</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">Our AI has detected no issues with your device. Everything is running optimally!</p>
                <div className="flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    className="justify-start text-xs md:text-sm"
                    size={isMobile ? "sm" : "default"}
                  >
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                    Chat with Support
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start text-xs md:text-sm"
                    size={isMobile ? "sm" : "default"}
                  >
                    <PlayCircle className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                    Troubleshooting Videos
                  </Button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-3 md:p-4">
                <h3 className="font-medium text-sm md:text-base mb-2">Ask the Community</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">Get answers from other Dell XPS owners and experts</p>
                <Button 
                  variant="outline" 
                  className="w-full text-xs md:text-sm"
                  size={isMobile ? "sm" : "default"}
                >
                  Browse Community Questions
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
