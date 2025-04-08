
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Purple Haze Tour",
    date: "May 15, 2025",
    venue: "Midnight Arena, New York",
    image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=500",
    ticketLink: "#"
  },
  {
    id: 2,
    title: "Rock Festival 2025",
    date: "June 22, 2025",
    venue: "Starlight Stadium, Los Angeles",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=500",
    ticketLink: "#"
  },
  {
    id: 3,
    title: "Midnight City Tour",
    date: "July 10, 2025",
    venue: "Echo Park, Chicago",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=500",
    ticketLink: "#"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-white">UPCOMING EVENTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {events.map((event) => (
            <Card key={event.id} className="bg-midnight-700 border border-midnight-600 overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-white text-xl mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <a href={event.ticketLink}>
                  <Button className="w-full bg-accent text-midnight-900 hover:bg-accent/90 font-medium">
                    <Ticket className="h-4 w-4 mr-2" />
                    GET TICKETS
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/events">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              VIEW ALL EVENTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
