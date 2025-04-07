
import React from 'react';
import { Star, RefreshCw, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const ProductImage = () => {
  const { toast } = useToast();
  
  const handleReturnClick = () => {
    toast({
      title: "Return Process Initiated",
      description: "A return label has been emailed to you. Package your item and drop it off at any UPS location.",
      variant: "default",
    });
  };
  
  return (
    <div className="flex-none w-full md:w-1/3">
      <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-48 md:h-64">
        <img 
          src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&h=600" 
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
        
        {/* One-click return process button */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-center" 
            onClick={handleReturnClick}
          >
            <RefreshCw className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            One-Click Return
          </Button>
          <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
            <Check className="h-3 w-3 mr-1 text-green-500" />
            <span>Return window: 30 days left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
