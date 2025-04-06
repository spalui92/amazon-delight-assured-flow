
import React, { useState, useEffect } from 'react';
import { Truck, Package, Home, CheckCircle, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
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
      icon: <Package className="h-5 w-5 md:h-6 md:w-6" />,
      date: 'Apr 4, 2025',
      time: '2:30 PM',
      isCompleted: true,
      isCurrent: currentStatus === 'ordered',
    },
    {
      status: 'preparing',
      label: 'Preparing',
      icon: <Package className="h-5 w-5 md:h-6 md:w-6" />,
      date: 'Apr 5, 2025',
      time: '9:15 AM',
      isCompleted: true,
      isCurrent: currentStatus === 'preparing',
    },
    {
      status: 'shipped',
      label: 'Shipped',
      icon: <Truck className="h-5 w-5 md:h-6 md:w-6" />,
      date: 'Apr 5, 2025',
      time: '7:45 PM',
      isCompleted: true,
      isCurrent: currentStatus === 'shipped',
    },
    {
      status: 'out_for_delivery',
      label: 'Out for Delivery',
      icon: <Truck className="h-5 w-5 md:h-6 md:w-6" />,
      date: 'Apr 6, 2025',
      time: 'By 8:00 PM',
      isCompleted: currentStatus === 'out_for_delivery' || currentStatus === 'delivered',
      isCurrent: currentStatus === 'out_for_delivery',
    },
    {
      status: 'delivered',
      label: 'Delivered',
      icon: <Home className="h-5 w-5 md:h-6 md:w-6" />,
      date: 'Apr 6, 2025',
      time: 'Expected',
      isCompleted: currentStatus === 'delivered',
      isCurrent: currentStatus === 'delivered',
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-amazon-blue mb-2 md:mb-0">Delivery Tracker</h2>
        <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Arriving Sunday, Apr 6</span>
          </div>
          <div className="flex items-center mt-1 md:mt-0 md:ml-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>By 8:00 PM</span>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full mb-4 md:mb-6">
        <div 
          className="absolute top-0 left-0 h-full bg-amazon-orange rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Delivery steps */}
      <div className={cn(
        "relative",
        isMobile ? "flex flex-col space-y-4" : "flex flex-row justify-between"
      )}>
        {/* Connecting line for desktop */}
        {!isMobile && (
          <div className="absolute top-7 left-7 right-7 h-0.5 bg-gray-200 -z-10" />
        )}
        
        {deliverySteps.map((step, index) => (
          <div key={index} className={cn(
            isMobile 
              ? "flex flex-row items-center" 
              : "flex flex-col items-center mb-0"
          )}>
            <div 
              className={cn(
                "rounded-full p-2 flex-none",
                isMobile ? "mr-3" : "mb-2",
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
                  "font-semibold text-sm md:text-base", 
                  step.isCurrent ? "text-amazon-orange" : ""
                )}
              >
                {step.label}
              </span>
              <span className="text-xs md:text-sm text-gray-600">{step.date}</span>
              <span className="text-xs md:text-sm text-gray-600">{step.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Live tracking message for current step */}
      {currentStatus === 'shipped' && (
        <div className="mt-4 md:mt-6 bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-100 flex items-start">
          <div className="rounded-full bg-blue-100 p-2 mr-3 flex-none">
            <Truck className="h-4 w-4 md:h-5 md:w-5 text-amazon-teal" />
          </div>
          <div>
            <h3 className="font-semibold text-amazon-blue text-sm md:text-base">Package in Transit</h3>
            <p className="text-xs md:text-sm text-gray-600">Your package is currently traveling from our Seattle facility to your local delivery station.</p>
          </div>
        </div>
      )}
      
      {currentStatus === 'out_for_delivery' && (
        <div className="mt-4 md:mt-6 bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-100 flex items-start">
          <div className="rounded-full bg-orange-100 p-2 mr-3 animate-pulse-orange flex-none">
            <Truck className="h-4 w-4 md:h-5 md:w-5 text-amazon-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-amazon-blue text-sm md:text-base">Out for Delivery!</h3>
            <p className="text-xs md:text-sm text-gray-600">Your package is on a delivery vehicle and will arrive today by 8:00 PM. Driver is approximately 8 stops away.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryTracker;
