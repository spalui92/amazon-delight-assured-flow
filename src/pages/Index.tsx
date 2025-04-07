
import React, { useState } from 'react';
import Header from '@/components/Header';
import DeliveryTracker from '@/components/DeliveryTracker';
import ProductInfo from '@/components/ProductInfo';
import RecommendedItems from '@/components/RecommendedItems';
import MilestoneReward from '@/components/MilestoneReward';
import ActionBar from '@/components/ActionBar';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import DeliveryOptions from '@/components/DeliveryOptions';

const Index = () => {
  const isMobile = useIsMobile();
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-6">
        <h1 className="text-xl md:text-2xl font-bold text-amazon-blue mb-4 md:mb-6">Your Order Details</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Main content - full width on mobile, 3/4 width on desktop */}
          <div className="md:col-span-3 space-y-4 md:space-y-6">
            <DeliveryTracker />
            {showDeliveryOptions ? (
              <DeliveryOptions onBack={() => setShowDeliveryOptions(false)} />
            ) : (
              <div className="w-full bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold text-amazon-blue">Delivery Experience</h2>
                  <Button 
                    variant="outline" 
                    size={isMobile ? "sm" : "default"}
                    onClick={() => setShowDeliveryOptions(true)}
                  >
                    Customize
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Make your delivery experience even better by customizing your preferences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    Standard Delivery
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    Deliver to Front Door
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    No Signature Required
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    Email Notifications
                  </span>
                </div>
              </div>
            )}
            <ProductInfo />
            {!isMobile && <RecommendedItems />}
          </div>
          
          {/* Sidebar - below main content on mobile, 1/4 width on desktop */}
          <div className="md:col-span-1 space-y-4 md:space-y-6">
            <MilestoneReward />
            
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold text-amazon-blue mb-3">Delivery Address</h2>
              <div className="text-sm">
                <p className="font-medium">John Smith</p>
                <p>123 Main Street</p>
                <p>Apt 4B</p>
                <p>Seattle, WA 98101</p>
                <p className="mt-2">
                  <span className="font-medium">Phone:</span> (555) 123-4567
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <Button variant="outline" size="sm" className="w-full">Update Address</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold text-amazon-blue mb-3">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Item:</span>
                  <span>$1,799.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>$162.00</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span>$1,961.99</span>
                </div>
              </div>
              <div className="mt-3">
                <Button variant="outline" size="sm" className="w-full">View Invoice</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile-only recommendations section */}
        {isMobile && (
          <div className="mt-4">
            <RecommendedItems />
          </div>
        )}
      </main>
      
      <ActionBar />
    </div>
  );
};

export default Index;
