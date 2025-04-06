
import React from 'react';
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Zap, 
  Info, 
  PlayCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useIsMobile } from '@/hooks/use-mobile';

interface SetupGuideTabProps {
  setupProgress: number;
  startSetupGuide: () => void;
}

const SetupGuideTab = ({ setupProgress, startSetupGuide }: SetupGuideTabProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
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
    </div>
  );
};

export default SetupGuideTab;
