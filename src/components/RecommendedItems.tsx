
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ThumbsUp } from 'lucide-react';

const RecommendedItems = () => {
  const accessories = [
    {
      id: 1,
      name: "Dell Premium Sleeve",
      image: "https://m.media-amazon.com/images/I/71kq+tsZyyL._AC_SL1500_.jpg",
      price: "$39.99",
      rating: 4.5,
      reviews: 412,
      compatibilityNote: "Perfect fit for your XPS 15"
    },
    {
      id: 2,
      name: "Dell Thunderbolt Dock",
      image: "https://m.media-amazon.com/images/I/61LGPq4d8cL._AC_SL1500_.jpg",
      price: "$259.99",
      rating: 4.3,
      reviews: 289,
      compatibilityNote: "Expands your XPS connectivity"
    },
    {
      id: 3,
      name: "Dell Premier Wireless Mouse",
      image: "https://m.media-amazon.com/images/I/61n--3L5P3L._AC_SL1500_.jpg",
      price: "$79.99",
      rating: 4.8,
      reviews: 563,
      compatibilityNote: "Ergonomic design for all-day use"
    }
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-amazon-blue">Enhance Your Experience</h2>
        <Button variant="link" className="text-amazon-orange">
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {accessories.map((item) => (
          <Card key={item.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
              <div className="flex items-center mt-1 mb-2">
                <div className="text-amazon-orange mr-1">★★★★★</div>
                <span className="text-xs text-gray-600">({item.reviews})</span>
              </div>
              <p className="font-semibold">{item.price}</p>
              <div className="mt-2 bg-green-50 p-2 rounded-md text-xs flex items-start">
                <ThumbsUp className="h-3 w-3 text-green-600 mr-1 flex-none mt-0.5" />
                <span className="text-green-800">{item.compatibilityNote}</span>
              </div>
              <Button 
                className="w-full mt-3 bg-amazon-orange hover:bg-amazon-lightorange text-black text-xs"
                size="sm"
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
