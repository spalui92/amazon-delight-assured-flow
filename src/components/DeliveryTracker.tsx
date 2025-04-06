
import React, { useState, useEffect } from 'react';
import { Truck, Package, Home, CheckCircle, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type DeliveryStatus = 'ordered' | 'preparing' | 'shipped' | 'out_for_delivery' | 'delivered';

interface DeliveryStep {
  status: DeliveryStatus;
  label: string;
  icon: React.ReactNode;
  date: string;
  time: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

const DeliveryTracker = () => {
  const [currentStatus, setCurrentStatus] = useState<DeliveryStatus>('shipped');
  const [progress, setProgress] = useState(50);
  
  // Simulate delivery progression
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStatus === 'shipped') {
        setCurrentStatus('out_for_delivery');
        setProgress(75);
      }
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [currentStatus]);

  const deliverySteps: DeliveryStep[] = [
    {
      status: 'ordered',
      label: 'Order Placed',
      icon: <Package className="h-6 w-6" />,
      date: 'Apr 4, 2025',
      time: '2:30 PM',
      isCompleted: true,
      isCurrent: currentStatus === 'ordered',
    },
    {
      status: 'preparing',
      label: 'Preparing',
      icon: <Package className="h-6 w-6" />,
      date: 'Apr 5, 2025',
      time: '9:15 AM',
      isCompleted: true,
      isCurrent: currentStatus === 'preparing',
    },
    {
      status: 'shipped',
      label: 'Shipped',
      icon: <Truck className="h-6 w-6" />,
      date: 'Apr 5, 2025',
      time: '7:45 PM',
      isCompleted: true,
      isCurrent: currentStatus === 'shipped',
    },
    {
      status: 'out_for_delivery',
      label: 'Out for Delivery',
      icon: <Truck className="h-6 w-6" />,
      date: 'Apr 6, 2025',
      time: 'By 8:00 PM',
      isCompleted: currentStatus === 'out_for_delivery' || currentStatus === 'delivered',
      isCurrent: currentStatus === 'out_for_delivery',
    },
    {
      status: 'delivered',
      label: 'Delivered',
      icon: <Home className="h-6 w-6" />,
      date: 'Apr 6, 2025',
      time: 'Expected',
      isCompleted: currentStatus === 'delivered',
      isCurrent: currentStatus === 'delivered',
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-amazon-blue">Delivery Tracker</h2>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Arriving Sunday, Apr 6</span>
          <Clock className="h-4 w-4 ml-3 mr-1" />
          <span>By 8:00 PM</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full mb-6">
        <div 
          className="absolute top-0 left-0 h-full bg-amazon-orange rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Delivery steps */}
      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-7 left-7 right-7 h-0.5 bg-gray-200 -z-10" />
        
        {deliverySteps.map((step, index) => (
          <div key={index} className="flex flex-row md:flex-col items-center mb-4 md:mb-0">
            <div 
              className={cn(
                "rounded-full p-2 mb-0 md:mb-2 mr-3 md:mr-0 flex-none",
                step.isCompleted 
                  ? "bg-amazon-orange text-white" 
                  : "bg-gray-200 text-gray-400"
              )}
            >
              {step.icon}
            </div>
            <div className="flex flex-col">
              <span 
                className={cn(
                  "font-semibold", 
                  step.isCurrent ? "text-amazon-orange" : ""
                )}
              >
                {step.label}
              </span>
              <span className="text-sm text-gray-600">{step.date}</span>
              <span className="text-sm text-gray-600">{step.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Live tracking message for current step */}
      {currentStatus === 'shipped' && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
          <div className="rounded-full bg-blue-100 p-2 mr-3">
            <Truck className="h-5 w-5 text-amazon-teal" />
          </div>
          <div>
            <h3 className="font-semibold text-amazon-blue">Package in Transit</h3>
            <p className="text-sm text-gray-600">Your package is currently traveling from our Seattle facility to your local delivery station.</p>
          </div>
        </div>
      )}
      
      {currentStatus === 'out_for_delivery' && (
        <div className="mt-6 bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start">
          <div className="rounded-full bg-orange-100 p-2 mr-3 animate-pulse-orange">
            <Truck className="h-5 w-5 text-amazon-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-amazon-blue">Out for Delivery!</h3>
            <p className="text-sm text-gray-600">Your package is on a delivery vehicle and will arrive today by 8:00 PM. Driver is approximately 8 stops away.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryTracker;
