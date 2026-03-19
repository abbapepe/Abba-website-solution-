/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Palette, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Globe,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">A</div>
          <span>ABBA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-primary/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-blue-50/50 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
              Digital Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] mb-8 tracking-tight">
              We build <span className="gradient-text">solutions</span> for the digital age.
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary/60 mb-10 max-w-2xl leading-relaxed">
              Abba Website Solution is a creative studio focused on building high-performance websites and digital products that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all group active:scale-95 shadow-lg shadow-brand-primary/20">
                Start a Project <ArrowRight size={20} />
              </button>
              <button className="bg-white text-brand-primary border border-brand-primary/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-secondary transition-all active:scale-95">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-brand-primary/5"
        >
          {[
            { label: 'Projects Delivered', value: '250+' },
            { label: 'Happy Clients', value: '180+' },
            { label: 'Years Experience', value: '8+' },
            { label: 'Awards Won', value: '12' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-brand-primary/40 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-emerald-500" />,
      title: 'Web Development',
      description: 'High-performance, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS.',
    },
    {
      icon: <Palette className="text-blue-500" />,
      title: 'UI/UX Design',
      description: 'User-centric design that focuses on intuitive interfaces and seamless experiences across all devices.',
    },
    {
      icon: <Search className="text-purple-500" />,
      title: 'SEO Optimization',
      description: 'Strategic search engine optimization to improve your visibility and drive organic traffic to your site.',
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: 'Performance Tuning',
      description: 'Optimizing load times and core web vitals to ensure your site is lightning fast and user-friendly.',
    },
    {
      icon: <Shield className="text-red-500" />,
      title: 'Security & Hosting',
      description: 'Robust security measures and reliable cloud hosting solutions to keep your digital assets safe.',
    },
    {
      icon: <BarChart3 className="text-indigo-500" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to help you reach your target audience and achieve your business goals.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-brand-primary/60 max-w-2xl">
            We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-brand-primary/5 bg-brand-secondary/30 hover:bg-white hover:shadow-xl hover:border-transparent transition-all group"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-brand-primary/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'EcoStore E-commerce',
      category: 'Web Development',
      description: 'A sustainable shopping experience built with Next.js and Stripe integration.',
      image: 'https://picsum.photos/seed/ecommerce/800/600',
    },
    {
      title: 'FinTech Dashboard',
      category: 'UI/UX Design',
      description: 'Complex data visualization made simple for modern financial management.',
      image: 'https://picsum.photos/seed/dashboard/800/600',
    },
    {
      title: 'Travel App Landing',
      category: 'Mobile First',
      description: 'High-conversion landing page for a next-gen travel booking platform.',
      image: 'https://picsum.photos/seed/travel/800/600',
    },
    {
      title: 'SaaS Platform',
      category: 'Full Stack',
      description: 'Scalable infrastructure and intuitive interface for enterprise collaboration.',
      image: 'https://picsum.photos/seed/saas/800/600',
    },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h2>
            <p className="text-xl text-brand-primary/60 max-w-2xl">
              A glimpse into the digital products we've crafted for our forward-thinking clients.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold hover:text-brand-accent transition-colors group">
            View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all active:scale-95 ${
                activeFilter === category 
                  ? 'text-white' 
                  : 'text-brand-primary border border-brand-primary/10 hover:bg-brand-secondary'
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/20 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group cursor-pointer relative"
              >
                <div className="relative aspect-video overflow-hidden rounded-[2.5rem] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <div className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">{project.category}</div>
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-white/70 text-lg mb-8 max-w-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3 text-white font-bold group/link">
                        <span className="border-b-2 border-emerald-500 pb-1">View Case Study</span>
                        <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-4">
                  <div>
                    <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">{project.category}</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Abba Website Solution transformed our online presence. Their attention to detail and performance optimization is unmatched.",
      author: "Sarah Johnson",
      role: "CEO at TechFlow",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "Working with the team was a breeze. They understood our vision and delivered a product that exceeded our expectations.",
      author: "Michael Chen",
      role: "Founder of GreenEarth",
      image: "https://picsum.photos/seed/michael/100/100"
    },
    {
      quote: "The SEO results we've seen since launching our new site have been incredible. Highly recommend their services.",
      author: "Emily Davis",
      role: "Marketing Director at LuxeStay",
      image: "https://picsum.photos/seed/emily/100/100"
    },
    {
      quote: "Professional, responsive, and incredibly talented. They are our go-to partner for all things digital.",
      author: "David Smith",
      role: "CTO at FinStream",
      image: "https://picsum.photos/seed/david/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-brand-primary/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-brand-primary/5 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-brand-primary/40 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-brand-primary/80">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', subject: 'Web Development', message: '' });
      } else {
        setStatus('error');
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setResponseMessage('Failed to connect to the server.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-primary text-white overflow-hidden relative">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let's build something <span className="text-emerald-400">extraordinary</span> together.
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-lg">
              Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-white/40 font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-medium">hello@abba.solutions</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-white/40 font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-medium">+1 (555) 000-0000</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-white/40 font-bold uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-xl font-medium">123 Tech Plaza, Digital Valley, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-white/10">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-emerald-400" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-white/60 mb-8">{responseMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/60">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/60">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/60">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors appearance-none"
                  >
                    <option className="bg-brand-primary" value="Web Development">Web Development</option>
                    <option className="bg-brand-primary" value="UI/UX Design">UI/UX Design</option>
                    <option className="bg-brand-primary" value="SEO Optimization">SEO Optimization</option>
                    <option className="bg-brand-primary" value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/60">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium">{responseMessage}</p>
                )}
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-emerald-500 text-brand-primary py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-brand-primary/5">
          <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">A</div>
            <span>ABBA</span>
          </a>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-brand-primary/40 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-brand-primary/40 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-brand-primary/40 hover:text-brand-primary transition-colors"><Github size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <div className="text-sm text-brand-primary/40">
            © 2026 Abba Website Solution. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-brand-primary/40">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
