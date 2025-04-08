
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMerch from '@/components/FeaturedMerch';
import UpcomingEvents from '@/components/UpcomingEvents';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedMerch />
        <UpcomingEvents />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
