
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HelpCircle, Gift, Share2 } from 'lucide-react';

const ActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-md z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Button variant="ghost" className="text-amazon-blue">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Orders
        </Button>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="hidden md:flex items-center">
            <Gift className="h-4 w-4 mr-2" />
            Gift Status
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share Delivery
          </Button>
          <Button variant="default" size="sm" className="bg-amazon-teal hover:bg-amazon-blue">
            <HelpCircle className="h-4 w-4 mr-2" />
            Get Help
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
