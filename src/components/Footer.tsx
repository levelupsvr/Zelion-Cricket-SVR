import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Zelion-Cricket/61576307350142/?rdid=ogKqUDKZEwY5uGK5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EQHGhvB8n%2F', name: 'Facebook' },
    
    { icon: Instagram, href: 'https://www.instagram.com/zelion.cricket/profilecard/?igsh=YWlsYnBocndyd3Vo', name: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@zelioncricket', name: 'YouTube' }
  ];

  const productCategories = [
    'Cricket Bats',
    'Cricket Balls',
    'Protective Gear',
    'Apparel',
    'Accessories',
    'Custom Products'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-white rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img 
                  src="https://w9xzguul5i.ufs.sh/f/DTgx056qWoYP43dUyHifCFQ97jpmqanUi4sDtI5kJe83yz1Z" 
                  alt="Zelion Logo" 
                  className="h-12 w-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-green-400 mb-4">Zelion Cricket</h3>
                <p className="text-gray-300 leading-relaxed">
                  Crafting premium cricket equipment with vintage aesthetics and modern performance. 
                  Trusted by champions worldwide.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-green-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  
                </motion.li>
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-green-400">Our Products</h4>
              <ul className="space-y-3">
                {productCategories.map((product, index) => (
                  <motion.li
                    key={product}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                      {product}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-green-400">Get in Touch</h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a
                      href="mailto:contact@zelioncricket.com"
                      className="text-white hover:text-green-400 transition-colors duration-200"
                    >
                      contact@zelioncricket.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-white hover:text-green-400 transition-colors duration-200"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Mumbai, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Newsletter Signup */}
              <motion.div
                className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h5 className="font-semibold mb-2 text-green-400">Stay Updated</h5>
                <p className="text-sm text-gray-300 mb-3">
                  Get the latest news about our products and cricket insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <motion.button
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-r-lg transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                className="text-gray-400 text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                ©️ {currentYear} Zelion Cricket. All rights reserved.
              </motion.p>
              
              <motion.div
                className="flex items-center space-x-6 mt-4 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                
                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="ml-4 p-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;