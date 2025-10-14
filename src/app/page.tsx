"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hero carousel state
  const heroSlides = [
    { id: 1, src: "/assets/exterior.jpg", label: "B&J Hotel Exterior", bg: "from-primary to-blue-800" },
    { id: 2, src: "/assets/exterior2.jpg", label: "B&J Hotel Exterior", bg: "from-blue-900 to-primary" },
    { id: 3, src: "/assets/exterior3.JPG", label: "B&J Hotel Exterior", bg: "from-primary to-blue-700" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
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

      {/* Hero Section - Carousel */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">B&J Hotel</h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">Your Home Away From Home in Akure</p>
            <p className="text-lg md:text-xl mb-12 text-white drop-shadow-lg max-w-2xl mx-auto">
              Experience comfort, luxury, and exceptional hospitality in the heart of Oba Afunbiowo Estate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">Book Now</a>
              <a href="#about" className="border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">Learn More</a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-10 pointer-events-none">
          <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`pointer-events-auto h-2 w-8 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/40'}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Rooms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our comfortable selections designed for every traveler.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, src: "/assets/bedroom1.JPG", title: "Room A", desc: "Comfortable and well-appointed" },
              { id: 2, src: "/assets/bedroom2.JPG", title: "Room B", desc: "Spacious with modern amenities" },
              { id: 3, src: "/assets/bedroom3.JPG", title: "Room C", desc: "Premium comfort and style" }
            ].map((room) => (
              <div key={room.id} className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
          <Image
                    src={room.src}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">{room.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{room.desc}</p>
                </div>
              </div>
            ))}
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
            
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d5.2055!3d7.2500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnMDAuMCJOIDXCsDEyJzE5LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B&J Hotel Location - Oba Afunbiowo Estate, Idanre Road, Akure"
                className="w-full h-full"
              />
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
          
          {/* Gallery with real images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/assets/exterior.jpg", alt: "B&J Hotel Exterior" },
              { src: "/assets/exterior2.jpg", alt: "B&J Hotel Exterior" },
              { src: "/assets/exterior3.JPG", alt: "B&J Hotel Exterior" },
              { src: "/assets/entrance1.JPG", alt: "B&J Hotel Entrance" },
              { src: "/assets/hall.JPG", alt: "B&J Hotel Hall" },
              { src: "/assets/lounge1.JPG", alt: "B&J Hotel Lounge" },
              { src: "/assets/bedroom1.JPG", alt: "B&J Hotel Room" },
              { src: "/assets/bedroom2.JPG", alt: "B&J Hotel Room" },
              { src: "/assets/bedroom3.JPG", alt: "B&J Hotel Room" }
            ].map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
          <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
                    <a 
                      href="https://wa.me/2348033020325?text=Hi%20B%26J%20Hotel!%20I'm%20interested%20in%20booking%20a%20room.%20Please%20send%20me%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
                      className="text-blue-100 hover:text-secondary transition-colors block"
                    >
                      📱 08033020325 (WhatsApp)
                    </a>
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
                <a 
                  href="https://wa.me/2348033020325?text=Hi%20B%26J%20Hotel!%20I'm%20interested%20in%20booking%20a%20room.%20Please%20send%20me%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>📱</span>
                  WhatsApp Us
                </a>
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
