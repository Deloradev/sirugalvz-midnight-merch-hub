
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscription Successful!",
        description: "You've been added to our mailing list.",
        duration: 3000,
      });
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight-gradient relative overflow-hidden">
      {/* Star-like pattern overlay */}
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">JOIN THE MIDNIGHT CLUB</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive merch drops, tour dates, and behind-the-scenes content.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-midnight-700 border-midnight-600 text-white placeholder:text-gray-400 flex-grow"
              required
            />
            <Button type="submit" className="bg-white hover:bg-gray-100 text-midnight-900 font-medium hover-glow">
              SUBSCRIBE
            </Button>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
