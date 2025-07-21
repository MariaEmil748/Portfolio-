import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mariaemil4t2@gmail.com',
      href: 'mailto:mariaemil4t2@gmail.com',
      description: 'Send me an email',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'maria-emil-956a93219',
      href: 'https://www.linkedin.com/in/maria-emil-956a93219',
      description: 'Connect with me',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'MariaEmil748',
      href: 'https://github.com/MariaEmil748',
      description: 'Check out my code',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100'
    }`}>
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-30`}></div>
        
        {/* Neon Floating Elements */}
        <motion.div
          className={`absolute top-20 left-20 w-32 h-32 border-2 rotate-45 rounded-xl ${
            isDark ? 'border-cyan-400/50' : 'border-indigo-500/60'
          }`}
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
            boxShadow: isDark ? [
              "0 0 20px rgba(34, 211, 238, 0.3)",
              "0 0 40px rgba(34, 211, 238, 0.6)",
              "0 0 20px rgba(34, 211, 238, 0.3)"
            ] : [
              "0 0 20px rgba(99, 102, 241, 0.4)",
              "0 0 40px rgba(99, 102, 241, 0.7)",
              "0 0 20px rgba(99, 102, 241, 0.4)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute top-40 right-32 w-28 h-28 rounded-full ${
            isDark 
              ? 'bg-gradient-to-br from-cyan-400/30 to-blue-500/30' 
              : 'bg-gradient-to-br from-blue-500/40 to-indigo-600/40'
          }`}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.4, 1],
            boxShadow: isDark ? [
              "0 0 30px rgba(59, 130, 246, 0.4)",
              "0 0 60px rgba(59, 130, 246, 0.7)",
              "0 0 30px rgba(59, 130, 246, 0.4)"
            ] : [
              "0 0 30px rgba(59, 130, 246, 0.5)",
              "0 0 60px rgba(59, 130, 246, 0.8)",
              "0 0 30px rgba(59, 130, 246, 0.5)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40' 
              : 'bg-gradient-to-r from-purple-600/50 to-pink-600/50'
          }`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            boxShadow: isDark ? [
              "0 0 25px rgba(147, 51, 234, 0.5)",
              "0 0 50px rgba(147, 51, 234, 0.8)",
              "0 0 25px rgba(147, 51, 234, 0.5)"
            ] : [
              "0 0 25px rgba(147, 51, 234, 0.6)",
              "0 0 50px rgba(147, 51, 234, 0.9)",
              "0 0 25px rgba(147, 51, 234, 0.6)"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Glowing Orbs */}
        <motion.div
          className={`absolute top-1/3 right-20 w-40 h-40 rounded-full ${
            isDark 
              ? 'bg-gradient-radial from-cyan-400/40 via-blue-500/30 to-transparent' 
              : 'bg-gradient-radial from-indigo-500/50 via-blue-400/40 to-transparent'
          }`}
          animate={{
            scale: [1, 1.6, 1],
            opacity: isDark ? [0.4, 0.8, 0.4] : [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-1/3 w-32 h-32 rounded-full ${
            isDark 
              ? 'bg-gradient-radial from-purple-400/50 via-pink-400/40 to-transparent' 
              : 'bg-gradient-radial from-purple-500/60 via-pink-500/50 to-transparent'
          }`}
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Scanning Lines Effect */}
        <motion.div
          className={`absolute inset-0 h-2 ${
            isDark 
              ? 'bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent' 
              : 'bg-gradient-to-b from-transparent via-indigo-500/15 to-transparent'
          }`}
          animate={{
            y: [-100, typeof window !== 'undefined' ? window.innerHeight + 100 : 800],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              className={`backdrop-blur-xl rounded-3xl p-10 mb-8 border shadow-2xl relative overflow-hidden max-w-4xl mx-auto ${
                isDark 
                  ? 'bg-gray-800/40 border-cyan-400/30' 
                  : 'bg-white/70 border-indigo-400/50'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={isDark ? {
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)"
              } : {
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.25), inset 0 0 40px rgba(99, 102, 241, 0.1)"
              }}
            >
              {/* Tech lines decoration */}
              <div className={`absolute top-0 left-0 w-full h-1 ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-indigo-500 to-transparent'
              }`}></div>
              <div className={`absolute bottom-0 left-0 w-full h-1 ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
              }`}></div>
              
              <motion.h2
                className={`text-5xl md:text-7xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  textShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                }}
              >
                Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
              </motion.h2>
              <motion.p
                className={`text-xl max-w-2xl mx-auto ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to bring your ideas to life? Let's discuss your next project!
              </motion.p>
            </motion.div>
          </div>

          <div className="flex justify-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              <div className={`backdrop-blur-xl rounded-3xl p-8 shadow-2xl border relative overflow-hidden ${
                isDark 
                  ? 'bg-gray-800/60 border-cyan-400/30' 
                  : 'bg-white/80 border-indigo-400/50'
              }`}
                style={isDark ? {
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)"
                } : {
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.25), inset 0 0 40px rgba(99, 102, 241, 0.1)"
                }}
              >
                {/* Tech corner decorations */}
                <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 ${
                  isDark ? 'border-cyan-400/40' : 'border-indigo-500/60'
                }`}></div>
                <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 ${
                  isDark ? 'border-cyan-400/40' : 'border-indigo-500/60'
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 ${
                  isDark ? 'border-cyan-400/40' : 'border-indigo-500/60'
                }`}></div>
                <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 ${
                  isDark ? 'border-cyan-400/40' : 'border-indigo-500/60'
                }`}></div>
                
                <h3 className={`text-3xl font-bold mb-8 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                  style={isDark ? {
                    textShadow: "0 0 20px rgba(34, 211, 238, 0.5)"
                  } : {}}
                >
                  Get in <span className={`bg-clip-text text-transparent ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  }`}>Touch</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={method.label !== 'Email' ? '_blank' : '_self'}
                      rel={method.label !== 'Email' ? 'noopener noreferrer' : ''}
                      className="group block"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`backdrop-blur-lg rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border relative overflow-hidden ${
                        isDark 
                          ? 'bg-gray-700/60 border-cyan-400/20 group-hover:border-cyan-400/40' 
                          : 'bg-white/80 border-indigo-400/30 group-hover:border-indigo-500/60'
                      }`}
                        style={isDark ? {
                          boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)"
                        } : {
                          boxShadow: "0 0 25px rgba(99, 102, 241, 0.15)"
                        }}
                      >
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
                          isDark 
                            ? 'bg-gradient-to-r from-cyan-400/5 to-purple-400/5' 
                            : 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10'
                        }`}></div>
                        
                        <div className="relative z-10">
                          <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                            style={isDark ? {
                              boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                            } : {
                              boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)"
                            }}
                          >
                            <method.icon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className={`text-xl font-bold mb-2 transition-colors duration-200 ${
                            isDark 
                              ? 'text-white group-hover:text-cyan-300' 
                              : 'text-gray-900 group-hover:text-indigo-600'
                          }`}>{method.label}</h4>
                          <p className={`text-sm mb-3 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>{method.description}</p>
                          <p className={`font-medium text-sm transition-colors duration-200 ${
                            isDark 
                              ? 'text-gray-200 group-hover:text-cyan-400' 
                              : 'text-gray-700 group-hover:text-indigo-600'
                          }`}>
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;