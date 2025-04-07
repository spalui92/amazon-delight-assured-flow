
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ThumbsUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const RecommendedItems = () => {
  const isMobile = useIsMobile();
  
  const accessories = [
    {
      id: 1,
      name: "Dell Premium Sleeve",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600",
      price: "$39.99",
      rating: 4.5,
      reviews: 412,
      compatibilityNote: "Perfect fit for your XPS 15"
    },
    {
      id: 2,
      name: "Dell Thunderbolt Dock",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600",
      price: "$259.99",
      rating: 4.3,
      reviews: 289,
      compatibilityNote: "Expands your XPS connectivity"
    },
    {
      id: 3,
      name: "Dell Premier Wireless Mouse",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600",
      price: "$79.99",
      rating: 4.8,
      reviews: 563,
      compatibilityNote: "Ergonomic design for all-day use"
    }
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg md:text-xl font-bold text-amazon-blue">Enhance Your Experience</h2>
        <Button variant="link" className="text-amazon-orange text-xs md:text-sm">
          View all
          <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {accessories.map((item) => (
          <Card key={item.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="h-32 md:h-48 bg-gray-100 flex items-center justify-center p-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <CardContent className="p-3 md:p-4">
              <h3 className="font-medium text-xs md:text-sm line-clamp-2">{item.name}</h3>
              <div className="flex items-center mt-1 mb-1 md:mb-2">
                <div className="text-amazon-orange text-xs mr-1">★★★★★</div>
                <span className="text-[10px] md:text-xs text-gray-600">({item.reviews})</span>
              </div>
              <p className="font-semibold text-sm md:text-base">{item.price}</p>
              <div className="mt-1 md:mt-2 bg-green-50 p-1.5 md:p-2 rounded-md text-[10px] md:text-xs flex items-start">
                <ThumbsUp className="h-2.5 w-2.5 md:h-3 md:w-3 text-green-600 mr-1 flex-none mt-0.5" />
                <span className="text-green-800">{item.compatibilityNote}</span>
              </div>
              <Button 
                className="w-full mt-2 md:mt-3 bg-amazon-orange hover:bg-amazon-lightorange text-black text-[10px] md:text-xs"
                size={isMobile ? "sm" : "sm"}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
