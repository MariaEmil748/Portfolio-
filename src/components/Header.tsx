import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
        scrolled 
          ? isDark 
            ? 'bg-gray-900/80 backdrop-blur-lg shadow-xl border-b border-cyan-400/30' 
            : 'bg-white/80 backdrop-blur-lg shadow-xl border-b border-blue-200/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={scrolled && isDark ? {
        boxShadow: "0 0 40px rgba(34, 211, 238, 0.1)"
      } : {}}
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
                className={`relative font-medium transition-all duration-300 group ${
                  isDark 
                    ? 'text-gray-200 hover:text-cyan-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  }`}
                />
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className={`w-10 h-10 backdrop-blur-lg rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                isDark 
                  ? 'bg-gray-800/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400 hover:bg-gray-700/60' 
                  : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              style={isDark ? {
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
              } : {}}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.a
              href="https://www.linkedin.com/in/maria-emil-956a93219"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 backdrop-blur-lg rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                isDark 
                  ? 'bg-gray-800/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400 hover:bg-gray-700/60' 
                  : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
              style={isDark ? {
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
              } : {}}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://github.com/MariaEmil748"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 backdrop-blur-lg rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                isDark 
                  ? 'bg-gray-800/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400 hover:bg-gray-700/60' 
                  : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.1, rotate: -5, y: -2 }}
              whileTap={{ scale: 0.9 }}
              style={isDark ? {
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
              } : {}}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden w-10 h-10 backdrop-blur-lg rounded-2xl flex items-center justify-center transition-all duration-300 border ${
              isDark 
                ? 'bg-gray-800/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400 hover:bg-gray-700/60' 
                : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600 hover:bg-white/80'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            style={isDark ? {
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
            } : {}}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden mt-6 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`backdrop-blur-lg rounded-3xl p-6 border shadow-xl ${
            isDark 
              ? 'bg-gray-800/60 border-cyan-400/30' 
              : 'bg-white/60 border-blue-200/50'
          }`}
            style={isDark ? {
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.1)"
            } : {}}
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    isDark 
                      ? 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700/40' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className={`flex items-center justify-center space-x-4 pt-4 border-t ${
                isDark ? 'border-cyan-400/30' : 'border-blue-200/50'
              }`}>
                <motion.button
                  onClick={toggleTheme}
                  className={`w-10 h-10 backdrop-blur-lg rounded-xl flex items-center justify-center transition-all duration-300 border ${
                    isDark 
                      ? 'bg-gray-700/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400' 
                      : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>
                <motion.a
                  href="https://www.linkedin.com/in/maria-emil-956a93219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 backdrop-blur-lg rounded-xl flex items-center justify-center transition-all duration-300 border ${
                    isDark 
                      ? 'bg-gray-700/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400' 
                      : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/MariaEmil748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 backdrop-blur-lg rounded-xl flex items-center justify-center transition-all duration-300 border ${
                    isDark 
                      ? 'bg-gray-700/60 border-cyan-400/30 text-gray-200 hover:text-cyan-400' 
                      : 'bg-white/60 border-blue-200/50 text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: -5 }}
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
