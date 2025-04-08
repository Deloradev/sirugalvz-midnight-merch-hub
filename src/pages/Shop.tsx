
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";

const categories = ["All", "Apparel", "Music", "Accessories", "Posters"];

const products = [
  {
    id: 1,
    name: "Midnight Tour T-Shirt",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500",
    price: 29.99,
    category: "Apparel",
    description: "Black t-shirt featuring the Sirugalvz Midnight Tour artwork on the front."
  },
  {
    id: 2,
    name: "Vinyl Record - 'Purple Haze'",
    image: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?auto=format&fit=crop&w=500",
    price: 24.99,
    category: "Music",
    description: "Limited edition purple vinyl featuring our debut album."
  },
  {
    id: 3,
    name: "Sirugalvz Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500",
    price: 49.99,
    category: "Apparel",
    description: "Cozy black hoodie with embroidered band logo on the front."
  },
  {
    id: 4,
    name: "Band Logo Snapback",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500",
    price: 22.99,
    category: "Accessories",
    description: "Adjustable snapback cap with embroidered Sirugalvz logo."
  },
  {
    id: 5,
    name: "Tour Poster - Limited Edition",
    image: "https://images.unsplash.com/photo-1587169544748-d21bd810f57e?auto=format&fit=crop&w=500",
    price: 19.99,
    category: "Posters",
    description: "18\" x 24\" poster from our Midnight City Tour, numbered and signed."
  },
  {
    id: 6,
    name: "Sirugalvz Beanie",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=500",
    price: 18.99,
    category: "Accessories",
    description: "Black beanie with embroidered band logo, perfect for cold nights."
  },
  {
    id: 7,
    name: "Digital Album Download",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=500",
    price: 9.99,
    category: "Music",
    description: "Digital download of our latest album, includes bonus tracks."
  },
  {
    id: 8,
    name: "Band Logo Tank Top",
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=500",
    price: 24.99,
    category: "Apparel",
    description: "Black tank top with purple band logo print on the front."
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  const addToCart = (product: typeof products[0]) => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-midnight-gradient py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">OFFICIAL MERCHANDISE</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Show your support and rock your style with our exclusive collection of Sirugalvz merchandise.
          </p>
        </div>
        
        {/* Shop Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="mb-8 bg-midnight-800 p-1 mx-auto flex justify-center flex-wrap">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-midnight-600 data-[state=active]:text-white"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="bg-midnight-800 border border-midnight-700 overflow-hidden card-hover">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="text-xs text-accent mb-1">{product.category}</div>
                      <h3 className="font-semibold text-white text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-white font-bold">${product.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-midnight-600 hover:bg-midnight-700 text-white"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
