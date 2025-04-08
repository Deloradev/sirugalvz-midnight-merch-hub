
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Music } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Purple Haze Tour",
    date: "May 15, 2025",
    time: "8:00 PM",
    venue: "Midnight Arena",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800",
    description: "Join us for an unforgettable night as we kick off our Purple Haze Tour in New York City!",
    ticketLink: "#"
  },
  {
    id: 2,
    title: "Rock Festival 2025",
    date: "June 22, 2025",
    time: "4:00 PM",
    venue: "Starlight Stadium",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800",
    description: "We're thrilled to be headlining the Rock Festival 2025 alongside some of the biggest names in rock!",
    ticketLink: "#"
  },
  {
    id: 3,
    title: "Midnight City Tour",
    date: "July 10, 2025",
    time: "7:30 PM",
    venue: "Echo Park",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800",
    description: "The Midnight City Tour comes to Chicago for a special intimate performance at Echo Park.",
    ticketLink: "#"
  },
  {
    id: 4,
    title: "Summer Jam Festival",
    date: "July 28, 2025",
    time: "3:00 PM",
    venue: "Riverside Park",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800",
    description: "We're bringing our high-energy performance to Austin for this year's Summer Jam Festival!",
    ticketLink: "#"
  },
  {
    id: 5,
    title: "European Tour - London",
    date: "August 15, 2025",
    time: "8:00 PM",
    venue: "Royal Hall",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=800",
    description: "We're crossing the pond! Join us for our first show in London as part of our European Tour.",
    ticketLink: "#"
  },
  {
    id: 6,
    title: "Album Release Party",
    date: "September 5, 2025",
    time: "9:00 PM",
    venue: "The Purple Lounge",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800",
    description: "Be the first to hear our new album live at this exclusive release party in Seattle!",
    ticketLink: "#"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-midnight-gradient py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">TOUR DATES</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Catch Sirugalvz live on stage. Check out our upcoming shows and secure your tickets.
          </p>
        </div>
        
        {/* Events Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="bg-midnight-800 border border-midnight-700 overflow-hidden card-hover">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:w-3/5">
                    <h3 className="font-bold text-white text-xl mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.venue}, {event.location}</span>
                      </div>
                      <div className="flex items-start text-gray-300">
                        <Music className="h-4 w-4 mr-2 mt-1" />
                        <span>{event.description}</span>
                      </div>
                    </div>
                    
                    <a href={event.ticketLink}>
                      <Button className="w-full bg-accent text-midnight-900 hover:bg-accent/90 font-medium">
                        <Ticket className="h-4 w-4 mr-2" />
                        GET TICKETS
                      </Button>
                    </a>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
