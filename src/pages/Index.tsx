
import React from 'react';
import Header from '@/components/Header';
import DeliveryTracker from '@/components/DeliveryTracker';
import ProductInfo from '@/components/ProductInfo';
import RecommendedItems from '@/components/RecommendedItems';
import MilestoneReward from '@/components/MilestoneReward';
import ActionBar from '@/components/ActionBar';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-amazon-blue mb-6">Your Order Details</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main content - 3/4 width on desktop */}
          <div className="md:col-span-3 space-y-6">
            <DeliveryTracker />
            <ProductInfo />
            <RecommendedItems />
          </div>
          
          {/* Sidebar - 1/4 width on desktop */}
          <div className="md:col-span-1 space-y-6">
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
      </main>
      
      <ActionBar />
    </div>
  );
};

export default Index;
