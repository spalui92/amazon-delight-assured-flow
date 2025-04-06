
import React from 'react';
import { MessageCircle, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const SupportTab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
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
    </div>
  );
};

export default SupportTab;
