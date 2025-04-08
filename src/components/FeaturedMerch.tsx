
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const merchItems = [
  {
    id: 1,
    name: "Midnight Tour T-Shirt",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500",
    price: 29.99,
    category: "Apparel"
  },
  {
    id: 2,
    name: "Vinyl Record - 'Purple Haze'",
    image: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?auto=format&fit=crop&w=500",
    price: 24.99,
    category: "Music"
  },
  {
    id: 3,
    name: "Sirugalvz Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500",
    price: 49.99,
    category: "Apparel"
  },
  {
    id: 4,
    name: "Band Logo Snapback",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500",
    price: 22.99,
    category: "Accessories"
  }
];

const FeaturedMerch = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-900 to-midnight-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-white">FEATURED MERCH</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {merchItems.map((item) => (
            <Card key={item.id} className="bg-midnight-800 border border-midnight-700 overflow-hidden card-hover">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-xs text-accent mb-1">{item.category}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{item.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-white font-bold">${item.price}</span>
                  <Button size="sm" className="bg-midnight-600 hover:bg-midnight-700 text-white">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              VIEW ALL MERCHANDISE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMerch;
