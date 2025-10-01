"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-accent">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display text-2xl font-bold text-primary">
              B&J Hotel
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#location" className="text-gray-700 hover:text-primary transition-colors">Location</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 space-y-4 border-t border-gray-200">
              <a 
                href="#about" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#location" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
              <a 
                href="#gallery" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            B&J Hotel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your Home Away From Home in Akure
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-2xl mx-auto">
            Experience comfort, luxury, and exceptional hospitality in the heart of Oba Afunbiowo Estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Now
            </a>
            <a 
              href="#about" 
              className="border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              About B&J Hotel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to B&J Hotel, where comfort meets elegance in the beautiful city of Akure. 
              We are committed to providing exceptional hospitality and creating memorable experiences for all our guests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Comfortable Rooms</h3>
              <p className="text-gray-600">
                Spacious, well-appointed rooms designed for your comfort and relaxation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Prime Location</h3>
              <p className="text-gray-600">
                Strategically located in Oba Afunbiowo Estate with easy access to key areas.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                Dedicated staff committed to making your stay memorable and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently situated in the heart of Akure, B&J Hotel offers easy access to 
              business districts, shopping centers, and cultural attractions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Address</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-secondary text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">B&J Hotel</p>
                    <p className="text-gray-600">Oba Afunbiowo Estate</p>
                    <p className="text-gray-600">Idanre Road, Akure</p>
                    <p className="text-gray-600">Ondo State, Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary mb-4">Nearby Attractions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Akure City Center - 10 minutes</li>
                  <li>• Federal University of Technology - 15 minutes</li>
                  <li>• Akure Airport - 20 minutes</li>
                  <li>• Shopping Centers - 5 minutes</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map placeholder - Add Google Maps integration here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our beautiful hotel and see what makes B&J Hotel special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Photo {item} placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to book your stay? Get in touch with us today for reservations and inquiries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-secondary text-xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-blue-100">08033020325</p>
                    <p className="text-blue-100">09059752206</p>
                    <p className="text-blue-100">09059751697</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-secondary text-xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">bandjhotelsakure@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <span className="text-secondary text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-blue-100">Oba Afunbiowo Estate</p>
                    <p className="text-blue-100">Idanre Road, Akure</p>
                    <p className="text-blue-100">Ondo State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-secondary"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">B&J Hotel</h3>
              <p className="text-gray-300 mb-4">
                Your home away from home in Akure. Experience comfort, luxury, and exceptional hospitality.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-secondary transition-colors">About</a></li>
                <li><a href="#location" className="text-gray-300 hover:text-secondary transition-colors">Location</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-secondary transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 08033020325</p>
                <p>📧 bandjhotelsakure@gmail.com</p>
                <p>📍 Oba Afunbiowo Estate, Idanre Road, Akure</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} B&J Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
