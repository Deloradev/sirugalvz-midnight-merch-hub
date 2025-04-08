
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-midnight-gradient min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Star-like pattern overlay */}
      <div className="absolute inset-0 star-field opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
          SIRUGALVZ
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Midnight sounds. Electric vibes. Rock your style with our exclusive merchandise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/shop">
            <Button className="bg-white hover:bg-gray-100 text-midnight-900 font-semibold py-3 px-8 text-lg rounded-md transition-all hover-glow">
              SHOP MERCH
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold py-3 px-8 text-lg rounded-md transition-all">
              UPCOMING SHOWS
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Purple glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-midnight-900/80 to-transparent"></div>
    </div>
  );
};

export default Hero;
