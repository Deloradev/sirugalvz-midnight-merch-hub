
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, CreditCard } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Sample cart items
const initialCartItems = [
  {
    id: 3,
    name: "Sirugalvz Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500",
    price: 49.99,
    quantity: 1
  },
  {
    id: 5,
    name: "Tour Poster - Limited Edition",
    image: "https://images.unsplash.com/photo-1587169544748-d21bd810f57e?auto=format&fit=crop&w=500",
    price: 19.99,
    quantity: 2
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const { toast } = useToast();
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
      duration: 3000,
    });
  };
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode) {
      toast({
        title: "Promo code applied",
        description: `Discount has been applied to your order.`,
        duration: 3000,
      });
      setPromoCode('');
    }
  };
  
  const checkout = () => {
    toast({
      title: "Checkout process initiated",
      description: "This would connect to a payment processor in a real store.",
      duration: 3000,
    });
  };
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-900 to-midnight-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 flex items-center">
            <ShoppingCart className="mr-3 h-7 w-7" />
            Your Cart
          </h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-xl text-white mb-4">Your cart is empty</h2>
              <p className="text-gray-300 mb-8">Looks like you haven't added any merchandise to your cart yet.</p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/shop'}
              >
                Browse Merchandise
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card className="bg-midnight-800 border-midnight-700">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-midnight-700">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{item.name}</h3>
                            <p className="text-gray-300">${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-8 p-0 text-white"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="text-white w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-8 p-0 text-white"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          
                          <div className="text-white font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div>
                <Card className="bg-midnight-800 border-midnight-700">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-300">
                        <span>Subtotal</span>
                        <span className="text-white">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Shipping</span>
                        <span className="text-white">${shipping.toFixed(2)}</span>
                      </div>
                      
                      <form onSubmit={applyPromo} className="mt-4 mb-4">
                        <div className="flex space-x-2">
                          <Input
                            type="text"
                            placeholder="Promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="bg-midnight-700 border-midnight-600 text-white"
                          />
                          <Button type="submit" variant="outline" className="text-white border-white">
                            Apply
                          </Button>
                        </div>
                      </form>
                      
                      <div className="border-t border-midnight-600 pt-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span className="text-white">Total</span>
                          <span className="text-accent">${total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-accent text-midnight-900 hover:bg-accent/90 mt-4"
                        onClick={checkout}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Checkout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
