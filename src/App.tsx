import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Heart, 
  Plane, 
  User, 
  Instagram, 
  Phone, 
  Mail, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  Quote
} from 'lucide-react';
import { 
  BRAND_NAME, 
  SERVICES, 
  PORTFOLIO, 
  TESTIMONIALS, 
  PHONE_NUMBER, 
  EMAIL, 
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL 
} from './constants';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    location: '',
    budget: ''
  });

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (formData.name.trim().length < 3) {
      errors.name = "Please enter a valid full name";
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.date) {
      errors.date = "Event date is required";
    }

    if (formData.location.trim().length < 2) {
      errors.location = "Please enter event location";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormStatus('success');
    setFormData({ name: '', phone: '', date: '', location: '', budget: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  useEffect(() => {
    // Simulate loading for cinematic effect
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setItemsToShow(6);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPortfolio = activeCategory === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeCategory);

  const categories = ['all', 'Weddings', 'Pre-Wedding', 'Couple Shoots', 'Cinematic Films'];

  const strippedPhone = PHONE_NUMBER.replace(/\D/g, '');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${strippedPhone}&text=${encodeURIComponent(`Hello! I'm interested in booking a shoot with ${BRAND_NAME}.`)}`;

  const handleImageError = (e: any) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000';
    e.currentTarget.className += ' grayscale brightness-50';
  };

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
    isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-white/10' : 'bg-transparent py-6 border-white/5'
  }`;

  return (
    <div className="min-h-screen selection:bg-gold selection:text-obsidian bg-black text-white font-sans">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="relative flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-8"
              >
                <span className="text-gold tracking-[0.6em] text-xs font-bold uppercase block mb-2 text-center">Abhay Wadekar</span>
                <h1 className="text-4xl md:text-6xl font-serif italic text-white/90 font-light">Photofilms</h1>
              </motion.div>
              
              <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gold w-1/2"
                />
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40"
              >
                Crafting Your Story
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Navigation */}
        <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-white uppercase font-display leading-none">
              {BRAND_NAME}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-gold uppercase mt-1">
              Photofilms & Cinema
            </span>
          </motion.div>

            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => {
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-[11px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
              <a 
                href="#contact" 
                className="px-8 py-2 bg-gold-dark text-black hover:bg-gold transition-all duration-300 rounded-sm font-bold text-[11px] uppercase tracking-widest"
              >
                Book Now
              </a>
            </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-8 p-6"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-bold text-white uppercase tracking-tighter"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Wedding" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        </div>

        <div className="relative z-10 px-6 max-w-7xl w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-medium">Premiere 2026 Season</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-8xl font-light leading-[1.1] mb-8 tracking-tight"
            >
              Turning Your Wedding Into <br /> <span className="italic font-serif text-gold-light/90">A Cinematic Story</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/50 text-base md:text-lg max-w-md mb-12 font-serif italic leading-relaxed"
            >
              Capturing emotions, moments, and memories that last forever with an uncompromising vision for luxury.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300">
                Book Your Shoot
              </a>
              <a href="#portfolio" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span> View Portfolio
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: 1000 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gold" />
          <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Scroll</p>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Our Visual Legacy</h2>
            <p className="text-gold uppercase tracking-widest text-[10px] font-bold">The Art of Storytelling</p>
          </div>

          <div className="flex flex-wrap justify-center gap-0 mb-12 border border-white/5 bg-white/5 backdrop-blur-sm">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-1 min-w-[150px] px-8 py-8 text-[11px] uppercase tracking-widest transition-all duration-300 border-r border-white/5 last:border-r-0 flex flex-col items-start gap-2 ${
                    isActive ? 'bg-white/10 text-gold' : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="font-mono text-[9px] opacity-40">0{idx + 1}/</span>
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.slice(0, itemsToShow).map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                  className="group relative h-[450px] overflow-hidden cursor-pointer"
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</p>
                    <h3 className="text-xl font-display">{item.title}</h3>
                    <div className="mt-4 flex items-center text-white text-[10px] uppercase tracking-widest border-b border-gold w-fit pb-1">
                      View Story <ChevronRight size={14} className="ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredPortfolio.length > itemsToShow && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setItemsToShow(prev => prev + 6)}
                className="px-12 py-5 border border-gold/30 text-gold font-bold uppercase tracking-widest text-[11px] hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center gap-3 mx-auto group"
              >
                Show More Stories 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Showreel Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
            alt="Showreel Background" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="w-24 h-24 md:w-32 md:h-32 border border-gold rounded-full flex items-center justify-center mx-auto mb-8 bg-gold/10 backdrop-blur-md group cursor-pointer hover:bg-gold transition-colors duration-500">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-black transition-colors" />
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 max-w-2xl mx-auto">Experience the Magic of Cinematic Films</h2>
          <p className="text-slate-400 mb-8 font-serif italic">A collection of our most emotional wedding highlights.</p>
          <button className="px-12 py-4 border border-white/30 text-white uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-black transition-all">
            Watch Full Film
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1600" 
              alt="Abhay Wadekar Story" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
              onError={handleImageError}
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold p-2 hidden sm:block">
              <div className="w-full h-full bg-black flex flex-col items-center justify-center">
                <span className="text-4xl font-display text-gold">4+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Years Exp</span>
              </div>
            </div>
          </motion.div>
          <div className="space-y-8">
            <p className="text-gold uppercase tracking-widest text-[10px] font-bold">The Visionary</p>
            <h2 className="text-4xl md:text-6xl tracking-tighter">I'm Abhay, your storyteller behind the lens.</h2>
            <div className="space-y-4 text-slate-400 font-serif text-lg leading-relaxed">
              <p>
                Based in the historical heart of Maharashtra, Chhatrapati Sambhajinagar, I believe that every wedding is a unique cinematic masterpiece waiting to be told.
              </p>
              <p>
                With over <span className="text-white">100+ weddings</span> covered across India, our mission is to capture not just high-resolution images, but the silent glances, the roaring laughter, and the raw emotions that define your legacy.
              </p>
              <p>
                We blend technical perfection with artistic intuition, ensuring every frame feels like a luxury visual experience you'll cherish for generations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-display text-white">100+</p>
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Weddings Covered</p>
              </div>
              <div>
                <p className="text-2xl font-display text-white">Pan-India</p>
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Our Premium Services</h2>
            <p className="text-gold uppercase tracking-widest text-[10px] font-bold italic">Curated Collections for Your Big Day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-sm text-left hover:border-gold/30 transition-all duration-300"
              >
                <div className="mb-8 inline-flex p-4 bg-gold/10 rounded-full text-gold">
                   {index === 0 && <Camera size={32} />}
                   {index === 1 && <Heart size={32} />}
                   {index === 2 && <Video size={32} />}
                   {index === 3 && <Plane size={32} />}
                   {index === 4 && <User size={32} />}
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-slate-400 font-serif text-sm leading-relaxed">{service.description}</p>
                <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-gold flex items-center gap-2 cursor-pointer group">
                  Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl">Why we are the perfect fit for you.</h2>
              <div className="space-y-6">
                {[
                  { title: 'Cinematic Storytelling', desc: 'We don\'t just document; we narrate your love story with a movie-like approach.' },
                  { title: 'High-End Equipment', desc: 'Utilizing industry-standard Sony and Blackmagic cinema cameras for unmatched quality.' },
                  { title: 'Experienced Team', desc: 'A dedicated group of passionate visual artists with a singular focus on excellence.' },
                  { title: 'Creative Direction', desc: 'We guide you through every pose and movement to look natural and stunning.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xs border border-gold/30">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">{item.title}</h4>
                      <p className="text-slate-400 font-serif text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1465495910483-0d674b0797f8?auto=format&fit=crop&q=80&w=800" alt="Detail 1" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" onError={handleImageError} />
              <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" alt="Detail 2" className="w-full h-full object-cover rounded-sm mt-8 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" onError={handleImageError} />
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" alt="Detail 3" className="w-full h-full object-cover rounded-sm -mt-8 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" onError={handleImageError} />
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" alt="Detail 4" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" onError={handleImageError} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Quote className="mx-auto text-gold mb-8 opacity-50" size={64} />
          <h2 className="text-4xl md:text-6xl mb-16 px-4">Eternal Kind Words</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="p-8 bg-black relative border border-white/5 h-full">
                <div className="flex gap-1 mb-6 text-gold justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" />)}
                </div>
                <p className="text-slate-300 font-serif italic text-lg mb-8 leading-relaxed">"{test.content}"</p>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">{test.name}</h4>
                  <p className="text-gold text-[10px] uppercase font-bold mt-1 tracking-widest">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Connect With Us</p>
              <h2 className="text-4xl md:text-7xl mb-8 leading-[0.9]">Let's Create Your Story.</h2>
              <p className="text-slate-400 font-serif text-lg mb-10 max-w-md italic">
                Limited bookings available for 2026. Reach out to secure your dates and let's make something eternal together.
              </p>
              
              <div className="space-y-6">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Call Us</p>
                    <p className="text-white text-lg font-display tracking-tight">{PHONE_NUMBER}</p>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Us</p>
                    <p className="text-white text-lg font-display tracking-tight">{EMAIL}</p>
                  </div>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Follow Our Journey</p>
                    <p className="text-white text-lg font-display tracking-tight">{INSTAGRAM_HANDLE}</p>
                  </div>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">WhatsApp Us</p>
                    <p className="text-white text-lg font-display tracking-tight">{PHONE_NUMBER}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-obsidian-light p-8 md:p-16 border border-white/5 rounded-none relative">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gold mb-8 font-bold">Inquire Now</h2>
              
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="text-gold" fill="#D4AF37" />
                    </div>
                    <h3 className="text-2xl font-display">Request Received</h3>
                    <p className="text-slate-400 font-serif italic max-w-xs mx-auto">
                      Thank you for choosing {BRAND_NAME}. We'll reach out to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest text-white/30 font-bold mb-2">Full Name</label>
                        <input 
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          type="text" 
                          className={`w-full bg-white/5 border ${formErrors.name ? 'border-red-500/50' : 'border-white/10'} rounded-none p-4 focus:border-gold/50 outline-none text-white text-sm transition-colors`} 
                          placeholder="Full Name" 
                        />
                        {formErrors.name && <p className="text-[10px] text-red-400 mt-1">{formErrors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest text-white/30 font-bold mb-2">Phone</label>
                        <input 
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          type="tel" 
                          maxLength={10}
                          className={`w-full bg-white/5 border ${formErrors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-none p-4 focus:border-gold/50 outline-none text-white text-sm transition-colors`} 
                          placeholder="10-digit Mobile Number" 
                        />
                        {formErrors.phone && <p className="text-[10px] text-red-400 mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest text-white/30 font-bold mb-2">Event Date</label>
                        <input 
                          required
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          type="date" 
                          className={`w-full bg-white/5 border ${formErrors.date ? 'border-red-500/50' : 'border-white/10'} rounded-none p-4 focus:border-gold/50 outline-none text-white text-sm transition-colors`} 
                        />
                        {formErrors.date && <p className="text-[10px] text-red-400 mt-1">{formErrors.date}</p>}
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest text-white/30 font-bold mb-2">Location</label>
                        <input 
                          required
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          type="text" 
                          className={`w-full bg-white/5 border ${formErrors.location ? 'border-red-500/50' : 'border-white/10'} rounded-none p-4 focus:border-gold/50 outline-none text-white text-sm transition-colors`} 
                          placeholder="e.g. Pune, Goa" 
                        />
                        {formErrors.location && <p className="text-[10px] text-red-400 mt-1">{formErrors.location}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-white/30 font-bold mb-2">Estimated Budget (₹)</label>
                      <input 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="e.g. 5,00,000"
                        className="w-full bg-white/5 border border-white/10 rounded-none p-4 focus:border-gold/50 outline-none text-white text-sm transition-colors"
                      />
                    </div>
                    <button 
                      disabled={formStatus === 'submitting'}
                      type="submit" 
                      className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-light transition-all rounded-none flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>Processing...</>
                      ) : (
                        <>Send Request <span className="text-lg">-&gt;</span></>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

              {/* Urgency Alert */}
              <div className="mt-8 p-4 bg-gold/10 border border-gold/20 text-center">
                 <span className="text-[10px] text-gold uppercase tracking-widest font-bold">Limited bookings for 2026 weddings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Grid */}
      <section className="py-24 bg-black border-t border-white/5">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="max-w-7xl mx-auto px-6 text-center mb-12 block hover:opacity-80 transition-opacity">
           <Instagram size={32} className="mx-auto text-gold mb-4" />
           <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">{INSTAGRAM_HANDLE}</p>
        </a>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400', 
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400', 
            'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400', 
            'https://images.unsplash.com/photo-1519225495810-7512332145a5?auto=format&fit=crop&q=80&w=400', 
            'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=400', 
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400'
          ].map((img, i) => (
             <div key={i} className="aspect-square bg-slate-900 group relative overflow-hidden">
                <img 
                   src={img} 
                  alt="Insta Feed" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
             </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-display uppercase tracking-widest text-gold">{BRAND_NAME}</h2>
              <p className="text-slate-500 max-w-sm font-serif italic mx-auto md:mx-0">
                Cinematic wedding photography & films focusing on storytelling, emotions, and luxury visual experiences.
              </p>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-[10px] font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-[10px] text-slate-500 tracking-widest uppercase font-bold">
                {navLinks.map((l) => {
                  return (
                    <li key={l.name}>
                      <a href={l.href} className="hover:text-gold transition-colors">{l.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-[10px] font-bold mb-6">Booking Now</h4>
              <p className="text-slate-500 text-sm mb-4 font-serif">Limited availability for 2026 weddings. Reserve your dates.</p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold transition-all"><Instagram size={18} /></a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Copyright 2026 {BRAND_NAME}. All rights reserved.</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Based in Chhatrapati Sambhajinagar.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full z-40 lg:hidden flex">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white flex items-center justify-center gap-2 py-4 font-bold uppercase tracking-widest text-[10px]">
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href="#contact" className="flex-1 bg-gold text-black flex items-center justify-center gap-2 py-4 font-bold uppercase tracking-widest text-[10px]">
          Book Shoot
        </a>
      </div>

      <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform"
        >
          <div className="text-[11px] font-bold text-white uppercase tracking-wider">WhatsApp Us</div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={14} className="text-white" />
          </div>
        </a>
      </div>
      </motion.div>
    </div>
  );
}
