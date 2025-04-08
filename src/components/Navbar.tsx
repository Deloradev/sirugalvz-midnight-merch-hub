
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-midnight-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-2xl tracking-wider">SIRUGALVZ</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/shop" className="nav-link">MERCH</Link>
            <Link to="/events" className="nav-link">EVENTS</Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="p-2">
                <ShoppingCart className="h-5 w-5 text-white" />
                <Badge className="absolute -top-1 -right-1 bg-accent text-midnight-900 px-1.5 py-0.5 text-xs rounded-full">
                  0
                </Badge>
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-accent focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-midnight-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-white hover:bg-midnight-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/shop" 
              className="block px-3 py-2 text-white hover:bg-midnight-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              MERCH
            </Link>
            <Link 
              to="/events" 
              className="block px-3 py-2 text-white hover:bg-midnight-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              EVENTS
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-white hover:bg-midnight-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              to="/cart" 
              className="block px-3 py-2 text-white hover:bg-midnight-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              CART (0)
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
