
import React from 'react';
import { Lightbulb, BookOpen, Video, Award, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const PersonalizedSupportTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 md:p-4 rounded-lg">
        <h3 className="font-medium text-sm md:text-base mb-2 md:mb-3 flex items-center">
          <HeartHandshake className="h-4 w-4 md:h-5 md:w-5 mr-2 text-amazon-teal" />
          Personalized for John
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mb-3">
          Based on your purchase history and preferences, we've curated these resources just for you:
        </p>
        
        <div className="space-y-2.5 md:space-y-3">
          <div className="flex items-start bg-white p-2 md:p-3 rounded-md border border-gray-100 hover:border-blue-200 transition-colors">
            <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-amazon-orange mr-2 md:mr-3 flex-none mt-0.5" />
            <div>
              <p className="font-medium text-xs md:text-sm">Power Management Pro Tips</p>
              <p className="text-xs text-gray-600">Since you frequently travel, these battery optimization tips will help.</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-2 md:p-3 rounded-md border border-gray-100 hover:border-blue-200 transition-colors">
            <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-amazon-teal mr-2 md:mr-3 flex-none mt-0.5" />
            <div>
              <p className="font-medium text-xs md:text-sm">Recommended Software Bundle</p>
              <p className="text-xs text-gray-600">Based on your design work, we recommend these creative apps.</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-2 md:p-3 rounded-md border border-gray-100 hover:border-blue-200 transition-colors">
            <Video className="h-4 w-4 md:h-5 md:w-5 text-amazon-orange mr-2 md:mr-3 flex-none mt-0.5" />
            <div>
              <p className="font-medium text-xs md:text-sm">Video Editing Masterclass</p>
              <p className="text-xs text-gray-600">Free access to our premium tutorial series for XPS owners.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-3 md:p-4">
        <div className="flex items-center mb-2 md:mb-3">
          <Award className="h-4 w-4 md:h-5 md:w-5 text-amazon-teal mr-2" />
          <h3 className="font-medium text-sm md:text-base">Learning Hub Access</h3>
        </div>
        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
          Unlock exclusive tutorials, webinars, and expert tips to master your new Dell XPS.
        </p>
        <Button 
          className="w-full bg-amazon-teal hover:bg-amazon-blue text-white text-xs md:text-sm"
          size={isMobile ? "sm" : "default"}
        >
          Explore Learning Hub
        </Button>
      </div>
    </div>
  );
};

export default PersonalizedSupportTab;
