import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-blue-300/40 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-blue-400/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-28 h-28 bg-blue-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -180, -360],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-blue-400/30 rounded-full filter blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-20 h-20 bg-blue-300/25 rounded-full filter blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Avatar Section */}
          <motion.div
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="w-40 h-40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-lg border-4 border-white/20"
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-20 h-20 text-white" />
              </motion.div>
              
              {/* Floating skill icons around the avatar */}
              <motion.div
                className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Palette className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Glowing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Enhanced Typography */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight whitespace-nowrap"
            variants={itemVariants}
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Maria Emil
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            variants={itemVariants}
          >
            <span className="text-blue-600 font-semibold">UI/UX Designer</span> & 
            <span className="text-blue-700 font-semibold"> Front-End Developer</span> crafting 
            <span className=""> beautiful digital experiences</span>
          </motion.p>

          {/* Enhanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-10 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl font-semibold text-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-10 py-4 bg-white/80 backdrop-blur-md border-2 border-blue-300/50 text-blue-700 rounded-2xl font-semibold text-lg hover:bg-blue-50/80 hover:border-blue-400/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Enhanced Skill Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center border border-blue-200/50 hover:bg-white/90 transition-all duration-500 shadow-lg"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-gray-700 text-sm leading-relaxed">React, TypeScript, JavaScript, HTML5, CSS3, Tailwind</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center border border-blue-200/50 hover:bg-white/90 transition-all duration-500 shadow-lg"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Figma, Adobe XD, User Research, Prototyping</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center border border-blue-200/50 hover:bg-white/90 transition-all duration-500 shadow-lg"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Solutions</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Innovation, Problem-solving, User-centered Design</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-4"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-blue-600/70 hover:text-blue-600 transition-colors duration-300 flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;