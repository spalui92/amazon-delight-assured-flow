
import React from 'react';
import { Bell, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full bg-amazon-blue text-white py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-amazon-orange">amazon</span>
            <span className="text-sm ml-1">delight assured</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" className="text-white hover:bg-amazon-darkblue">
            <User className="h-5 w-5 mr-2" />
            <span>Account</span>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-amazon-darkblue">
            <ShoppingCart className="h-5 w-5 mr-2" />
            <span>Orders</span>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-amazon-darkblue relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-amazon-orange text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
