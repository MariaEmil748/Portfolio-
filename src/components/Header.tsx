import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/20 backdrop-blur-lg shadow-xl border-b border-white/30' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/logo/web-design.png"
              alt="Maria Emil Logo"
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* Enhanced Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/maria-emil-956a93219"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-white/30 transition-all duration-300 border border-white/30"
              whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/MariaEmil748"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-white/30 transition-all duration-300 border border-white/30"
              whileHover={{ scale: 1.1, rotate: -5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-white/30 transition-all duration-300 border border-white/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.nav
          className={`md:hidden mt-6 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-xl">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded-2xl hover:bg-white/20"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/30">
                <motion.a
                  href="https://www.linkedin.com/in/maria-emil-956a93219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-white/30 transition-all duration-300 border border-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/MariaEmil748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-white/30 transition-all duration-300 border border-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;