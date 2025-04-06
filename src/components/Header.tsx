
import React from 'react';
import { Bell, Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="w-full bg-amazon-blue text-white py-2 md:py-3 px-3 md:px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <Button variant="ghost" size="sm" className="text-white p-1 mr-2 hover:bg-amazon-darkblue">
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-amazon-orange">amazon</span>
            <span className="text-xs md:text-sm ml-1">delight assured</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-1 md:space-x-2">
          {!isMobile && (
            <>
              <Button variant="ghost" className="text-white hover:bg-amazon-darkblue">
                <User className="h-5 w-5 mr-2" />
                <span>Account</span>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-amazon-darkblue">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Orders</span>
              </Button>
            </>
          )}
          <Button variant="ghost" size={isMobile ? "sm" : "default"} className="text-white hover:bg-amazon-darkblue relative p-1 md:p-2">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-amazon-orange text-black text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
              3
            </span>
          </Button>
          {isMobile && (
            <Button variant="ghost" size="sm" className="text-white hover:bg-amazon-darkblue p-1">
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
