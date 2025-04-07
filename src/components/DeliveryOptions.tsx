
import React, { useState } from 'react';
import { Clock, Bell, ChevronLeft, Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface DeliveryOptionsProps {
  onBack: () => void;
}

const DeliveryOptions = ({ onBack }: DeliveryOptionsProps) => {
  const { toast } = useToast();
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('default');
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>(['email']);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['doorstep']);
  
  const toggleNotification = (type: string) => {
    if (selectedNotifications.includes(type)) {
      setSelectedNotifications(selectedNotifications.filter(item => item !== type));
    } else {
      setSelectedNotifications([...selectedNotifications, type]);
    }
  };
  
  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  
  const savePreferences = () => {
    toast({
      title: "Delivery Preferences Saved",
      description: "Your delivery experience has been customized according to your preferences.",
      variant: "default",
    });
    onBack();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="p-0 mr-2" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div>
            <CardTitle className="text-lg md:text-xl">Customize Delivery</CardTitle>
            <CardDescription>Make your delivery experience even better</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <h3 className="text-sm md:text-base font-medium mb-3 flex items-center">
            <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Preferred Delivery Time
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Button 
              variant={selectedDeliveryTime === 'default' ? 'default' : 'outline'} 
              size="sm" 
              className="justify-start"
              onClick={() => setSelectedDeliveryTime('default')}
            >
              <span className="flex items-center">
                {selectedDeliveryTime === 'default' && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                Standard (Apr 6, by 8PM)
              </span>
            </Button>
            <Button 
              variant={selectedDeliveryTime === 'morning' ? 'default' : 'outline'} 
              size="sm" 
              className="justify-start"
              onClick={() => setSelectedDeliveryTime('morning')}
            >
              <span className="flex items-center">
                {selectedDeliveryTime === 'morning' && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                Morning (8AM - 12PM)
              </span>
            </Button>
            <Button 
              variant={selectedDeliveryTime === 'evening' ? 'default' : 'outline'} 
              size="sm" 
              className="justify-start"
              onClick={() => setSelectedDeliveryTime('evening')}
            >
              <span className="flex items-center">
                {selectedDeliveryTime === 'evening' && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                Evening (5PM - 8PM)
              </span>
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {selectedDeliveryTime !== 'default' && "Premium delivery times may add $4.99 to your order."}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm md:text-base font-medium mb-3 flex items-center">
            <Bell className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Notification Preferences
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button 
              variant={selectedNotifications.includes('email') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleNotification('email')}
              className="text-xs md:text-sm"
            >
              Email
            </Button>
            <Button 
              variant={selectedNotifications.includes('sms') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleNotification('sms')}
              className="text-xs md:text-sm"
            >
              SMS
            </Button>
            <Button 
              variant={selectedNotifications.includes('app') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleNotification('app')}
              className="text-xs md:text-sm"
            >
              App Push
            </Button>
            <Button 
              variant={selectedNotifications.includes('departure') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleNotification('departure')}
              className="text-xs md:text-sm"
            >
              On Departure
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm md:text-base font-medium mb-3 flex items-center">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Delivery Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Button 
              variant={selectedOptions.includes('doorstep') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleOption('doorstep')}
              className="justify-start text-xs md:text-sm"
            >
              <span className="flex items-center">
                {selectedOptions.includes('doorstep') && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                Leave at doorstep
              </span>
            </Button>
            <Button 
              variant={selectedOptions.includes('signature') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleOption('signature')}
              className="justify-start text-xs md:text-sm"
            >
              <span className="flex items-center">
                {selectedOptions.includes('signature') && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                Require signature
              </span>
            </Button>
            <Button 
              variant={selectedOptions.includes('neighbor') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleOption('neighbor')}
              className="justify-start text-xs md:text-sm"
            >
              <span className="flex items-center">
                {selectedOptions.includes('neighbor') && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                OK to leave with neighbor
              </span>
            </Button>
            <Button 
              variant={selectedOptions.includes('eco') ? 'default' : 'outline'} 
              size="sm"
              onClick={() => toggleOption('eco')}
              className="justify-start text-xs md:text-sm"
            >
              <span className="flex items-center">
                {selectedOptions.includes('eco') && (
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                )}
                Eco-friendly packaging
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Cancel</Button>
        <Button onClick={savePreferences}>Save Preferences</Button>
      </CardFooter>
    </Card>
  );
};

export default DeliveryOptions;
