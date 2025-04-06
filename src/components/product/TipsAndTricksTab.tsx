
import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const TipsAndTricksTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
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
    </div>
  );
};

export default TipsAndTricksTab;
