
import React, { useState } from 'react';
import ProductImage from './product/ProductImage';
import ProductTabs from './product/ProductTabs';
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
        <ProductImage />
        
        {/* Product tabs */}
        <div className="flex-grow">
          <ProductTabs 
            setupProgress={setupProgress} 
            startSetupGuide={startSetupGuide} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
