
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const bandMembers = [
  {
    name: "Alex Rivera",
    role: "Vocals & Guitar",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&h=500",
    bio: "The driving force behind Sirugalvz, Alex brings raw energy and powerful vocals that define our sound."
  },
  {
    name: "Jamie Chen",
    role: "Lead Guitar",
    image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?auto=format&fit=crop&w=500&h=500",
    bio: "Jamie's intricate guitar work and soulful solos create the melodic foundation of our music."
  },
  {
    name: "Taylor Morgan",
    role: "Bass",
    image: "https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&w=500&h=500",
    bio: "Taylor lays down the groove that keeps our sound tight and hearts beating."
  },
  {
    name: "Jordan Lee",
    role: "Drums",
    image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&w=500&h=500",
    bio: "The rhythmic backbone of Sirugalvz, Jordan's powerful drumming drives our signature sound."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-midnight-gradient py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ABOUT THE BAND</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Get to know the story behind Sirugalvz and the musicians who create the sound you love.
          </p>
        </div>
        
        {/* Band Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">OUR STORY</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Formed in the underground music scene of 2023, Sirugalvz emerged from a shared passion for creating music that pushes boundaries while honoring the rich traditions of rock.
                  </p>
                  <p>
                    What started as late-night jam sessions in a cramped garage quickly evolved into a musical force that captivated audiences with its unique blend of melodic intensity and raw emotion.
                  </p>
                  <p>
                    Our sound defies easy categorization, drawing influence from classic rock, alternative, and experimental genres to create something entirely our own – a sonic journey that we call "Midnight Rock."
                  </p>
                  <p>
                    Since releasing our debut EP "Purple Shadows" in early 2024, we've been on a whirlwind journey of sold-out venues, festival appearances, and a growing community of dedicated fans.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800"
                  alt="Sirugalvz performing live" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 border-2 border-accent rounded-lg -m-4 z-[-1]"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Band Members Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-white">MEET THE BAND</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {bandMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-midnight-700 border border-midnight-600 rounded-lg overflow-hidden hover-glow"
                >
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white text-xl">{member.name}</h3>
                    <p className="text-accent mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Social Media Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight-900 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">CONNECT WITH US</h2>
            <p className="text-gray-300 mb-8">
              Follow us on social media for daily updates, behind-the-scenes content, and exclusive announcements.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com" 
                className="bg-midnight-700 hover:bg-midnight-600 text-white p-4 rounded-full transition-all hover-glow"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com" 
                className="bg-midnight-700 hover:bg-midnight-600 text-white p-4 rounded-full transition-all hover-glow"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                className="bg-midnight-700 hover:bg-midnight-600 text-white p-4 rounded-full transition-all hover-glow"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                className="bg-midnight-700 hover:bg-midnight-600 text-white p-4 rounded-full transition-all hover-glow"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
