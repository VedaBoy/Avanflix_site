import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Store, Calendar, ArrowRight, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';
import work from './comp/Work';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("branding");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with Glass Effect */}
      <header className={`fixed w-full z-50 glass-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold animate-fadeIn logo">AvanFlix</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover-underline animate-fadeIn stagger-delay-1 nav-link">ABOUT</a>
            <a href="/work" className="hover-underline animate-fadeIn stagger-delay-2 nav-link">WORK</a>
            <a href="#artists" className="hover-underline animate-fadeIn stagger-delay-3 nav-link">ARTISTS</a>
            <a href="#events" className="hover-underline animate-fadeIn stagger-delay-4 nav-link">EVENTS</a>
            <a href="#contact" className="hover-underline animate-fadeIn stagger-delay-5 nav-link">CONTACT</a>
          </div>
          
          <button className="md:hidden animate-fadeIn" onClick={toggleMenu}>
            <Menu size={24} className="icon" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-white">AvanFlix</a>
            <button onClick={toggleMenu} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 text-xl text-white">
            <a href="#about" className="hover-underline animate-slideInUp stagger-delay-1" onClick={toggleMenu}>ABOUT</a>
            <a href="/work" className="hover-underline animate-slideInUp stagger-delay-2" onClick={toggleMenu}>WORK</a>
            <a href="#artists" className="hover-underline animate-slideInUp stagger-delay-3" onClick={toggleMenu}>ARTISTS</a>
            <a href="#events" className="hover-underline animate-slideInUp stagger-delay-4" onClick={toggleMenu}>EVENTS</a>
            <a href="#contact" className="hover-underline animate-slideInUp stagger-delay-5" onClick={toggleMenu}>CONTACT</a>
            
          </div>
        </div>
      )}

      {/* Hero Section with Animated Elements */}
      <section className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Animated circles */}
        <div className="absolute w-full h-full">
          <div className="circle-animation circle-1"></div>
          <div className="circle-animation circle-2"></div>
          <div className="circle-animation circle-3"></div>
        </div>
        
        {/* Animated text elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="text-element text-element-1">ART</div>
          <div className="text-element text-element-2">SOUND</div>
          <div className="text-element text-element-3">DESIGN</div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fadeIn hero-title">AvanFlix</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn stagger-delay-2 hero-subtitle">An immersive art exhibition showcasing contemporary artists exploring the intersection of visual art and sound.</p>
            <div className="mt-12 animate-fadeIn stagger-delay-3">
              <a href="#about" className="px-8 py-3 border border-white hover-scale inline-block hero-button">
                Explore Exhibition
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO Alert Section */}
      <section className="py-16 bg-blue-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">FOMO Alert: Book Your Consultation Now!</h2>
              <p className="text-xl mb-8">Secure Your Spot Now!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 shadow-md reveal-left hover-lift">
                <div className="flex items-center justify-center mb-4">
                  <Calendar size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-center">6+ Years</h3>
              </div>
              
              <div className="bg-white p-6 shadow-md reveal stagger-delay-2 hover-lift">
                <div className="flex items-center justify-center mb-4">
                  <Store size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-center">300+ Projects</h3>
              </div>
              
              <div className="bg-white p-6 shadow-md reveal-right stagger-delay-3 hover-lift">
                <div className="flex items-center justify-center mb-4">
                  <Calendar size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-center">Book Now</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">What We're Cooking: Services Worth a Taste Test</h2>
            
            <div className="space-y-4 reveal">
              {/* Branding Accordion */}
              <div className="border-t border-b border-gray-200 py-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleAccordion("branding")}
                >
                  <h3 className="text-xl font-semibold">BRANDING AND IDENTITY</h3>
                  {activeAccordion === "branding" ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className={`accordion-content ${activeAccordion === "branding" ? "open" : ""}`}>
                  <div className="pt-4">
                    <p>A strong recall value, gives any brand a solidified base. We provide that to a brand with our class apart visual branding and identity.</p>
                  </div>
                </div>
              </div>
              
              {/* Content Creation Accordion */}
              <div className="border-b border-gray-200 py-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleAccordion("content")}
                >
                  <h3 className="text-xl font-semibold">CONTENT CREATION</h3>
                  {activeAccordion === "content" ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className={`accordion-content ${activeAccordion === "content" ? "open" : ""}`}>
                  <div className="pt-4">
                    <p>We create engaging and innovative content that resonates with your audience and strengthens your brand message.</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Accordion */}
              <div className="border-b border-gray-200 py-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleAccordion("social")}
                >
                  <h3 className="text-xl font-semibold">SOCIAL MEDIA MANAGEMENT AND MARKETING</h3>
                  {activeAccordion === "social" ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className={`accordion-content ${activeAccordion === "social" ? "open" : ""}`}>
                  <div className="pt-4">
                    <p>Our comprehensive social media strategies help you connect with your audience and build a strong online presence.</p>
                  </div>
                </div>
              </div>
              
              {/* More accordions... */}
              <div className="border-b border-gray-200 py-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleAccordion("visual")}
                >
                  <h3 className="text-xl font-semibold">VISUAL CONTENT STRATEGISING</h3>
                  {activeAccordion === "visual" ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className={`accordion-content ${activeAccordion === "visual" ? "open" : ""}`}>
                  <div className="pt-4">
                    <p>We develop strategic visual content that tells your brand story and captures your audience's attention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Marquee Section */}
      <section className="py-8 bg-black text-yellow-400 overflow-hidden">
        <div className="marquee-container">
          <div className="animate-marquee inline-flex">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="marquee-content text-4xl md:text-6xl font-bold">
                Peep Our Portfolio: It's Lit! &nbsp;&nbsp;&nbsp;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center reveal-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Behold Our Behance: Where Creativity Unfolds</h2>
              <p className="text-xl mb-8">Explore Our Portfolio of Pioneering Ideas and Exceptional Execution</p>
              <div>
                <a href="#" className="inline-block border border-white px-6 py-3 hover-lift">
                  Watch Work
                </a>
              </div>
            </div>
            <div className="reveal-right">
              <img 
                src="https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Creative Portfolio" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevSlide} 
              className="border border-white p-2 hover-scale"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="border border-white p-2 hover-scale"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Client Work Showcase */}
      <section className="py-16">
        <div className="marquee-container mb-8">
          <div className="animate-marquee inline-flex">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="marquee-content text-xl">
                Dive into InstaLove: Our Latest Client Magic Awaits Your Scroll &nbsp;&nbsp;&nbsp;
              </div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-left">
              <h3 className="text-sm mb-2">Float Brewery</h3>
              <h2 className="text-2xl font-bold mb-4">Bringing party waves to the shore! Now Floating. 🍻</h2>
              <a href="#" className="inline-block bg-black text-white px-4 py-2 hover-lift">
                Explore Instagram
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 reveal-right">
              <div className="img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Float Brewery" 
                  className="w-full h-auto"
                />
              </div>
              <div className="img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Float Brewery" 
                  className="w-full h-auto"
                />
              </div>
              <div className="img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1567696911980-2c295b5df157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Float Brewery" 
                  className="w-full h-auto"
                />
              </div>
              <div className="img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Float Brewery" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center reveal">Brand Crafting 101: The AvanFlix Way</h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal">ABOUT THE EXHIBITION</h2>
            <p className="text-lg mb-6 reveal-left stagger-delay-1">
              AvanFlix is a groundbreaking exhibition that explores the dynamic relationship between visual art and sound. This immersive experience invites visitors to engage with art that transcends traditional boundaries, creating a multi-sensory journey through contemporary artistic expression.
            </p>
            <p className="text-lg mb-6 reveal-left stagger-delay-2">
              Curated by leading experts in the field, this exhibition brings together artists from diverse backgrounds who share a common interest in how sound and visuals interact to create powerful emotional responses and new forms of artistic communication.
            </p>
            <p className="text-lg reveal-left stagger-delay-3">
              The exhibition runs from June 15 to September 30, 2025, at the Contemporary Art Space in downtown.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition Section */}
      <section id="exhibition" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">FEATURED WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group reveal-scale" style={{transitionDelay: `${item * 0.1}s`}}>
                <div className="mb-4 overflow-hidden img-hover-zoom">
                  <img 
                    src={`https://images.unsplash.com/photo-${1590000000000 + item * 10000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                    alt={`Artwork ${item}`} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Artwork Title {item}</h3>
                <p className="text-gray-600 mb-2">Artist Name {item}</p>
                <p className="text-sm">Mixed media, 2025</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="border border-black px-8 py-3 inline-block hover-scale btn-pulse">VIEW ALL WORKS</a>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">FEATURED ARTISTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center reveal" style={{transitionDelay: `${item * 0.15}s`}}>
                <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto hover-rotate">
                  <img 
                    src={`https://images.unsplash.com/photo-${1590000000000 + item * 20000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80`} 
                    alt={`Artist ${item}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Artist Name {item}</h3>
                <p className="text-gray-600">Contemporary Visual Artist</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="border border-black px-8 py-3 inline-block hover-scale btn-pulse">VIEW ALL ARTISTS</a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">UPCOMING EVENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border border-gray-200 p-6 hover-lift reveal-scale" style={{transitionDelay: `${item * 0.1}s`}}>
                <div className="text-sm text-gray-500 mb-2">June {10 + item}, 2025 • 6:00 PM</div>
                <h3 className="text-xl font-semibold mb-3">Artist Talk: The Sound of Color</h3>
                <p className="text-gray-600 mb-4">Join us for an evening with our featured artists as they discuss their creative process and the intersection of sound and visual art.</p>
                <a href="#" className="text-black font-medium hover-underline flex items-center">
                  Register <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="border border-black px-8 py-3 inline-block hover-scale btn-pulse">VIEW ALL EVENTS</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-typewriter">STAY UPDATED</h2>
            <p className="mb-8 reveal">Subscribe to our newsletter to receive updates about new exhibitions, events, and artist opportunities.</p>
            <form className="flex flex-col md:flex-row gap-4 reveal">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 flex-grow text-black"
                required
              />
              <button type="submit" className="bg-white text-black px-6 py-3 font-medium hover-scale">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">CONTACT US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="reveal-left">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="mb-2">Contemporary Art Space</p>
                <p className="mb-2">123 Gallery Street</p>
                <p className="mb-2">New York, NY 10001</p>
                <p className="mb-6">United States</p>
                
                <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                <p className="mb-2">Tuesday - Sunday: 10:00 AM - 6:00 PM</p>
                <p className="mb-2">Monday: Closed</p>
                
                <div className="mt-8 flex space-x-4">
                  <a href="#" className="hover-scale">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover-scale">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="hover-scale">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
              <div className="reveal-right">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border border-gray-300 px-4 py-2 focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border border-gray-300 px-4 py-2 focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full border border-gray-300 px-4 py-2 focus:border-black transition-colors"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-black text-white px-6 py-3 font-medium hover-scale btn-pulse"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-xl font-bold hover-lift">AvanFlix</a>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="hover-underline">ABOUT</a>
              <a href="/work" className="hover-underline">Work</a>
              <a href="#artists" className="hover-underline">ARTISTS</a>
              <a href="#events" className="hover-underline">EVENTS</a>
              <a href="#contact" className="hover-underline">CONTACT</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© 2025 AvanFlix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;