import { motion } from 'framer-motion';
import { Code, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
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
    <section id="home" className={`min-h-screen py-20 relative ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-30`}></div>
        
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
        
        {/* Scanning Line Effect */}
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

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center mb-20"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Decorative circle behind the photo - smaller size */}
              <motion.div
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-72 h-72 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-lg border-4 z-10 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 via-blue-800 to-indigo-800 border-cyan-400/30' 
                    : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 border-indigo-500/50'
                }`}
                style={isDark ? {
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.3), inset 0 0 40px rgba(59, 130, 246, 0.1)"
                } : {
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)"
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${
                    isDark ? 'border-cyan-400/60' : 'border-indigo-500/70'
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className={`absolute inset-2 rounded-full border ${
                    isDark ? 'border-cyan-300/40' : 'border-indigo-400/60'
                  }`}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Profile Image - cropped circle at bottom */}
              <div className="w-[28rem] h-[28rem] relative z-20 -mt-40 ml-2 overflow-hidden rounded-full">
                <motion.img
                  src="/images/logo/me.png"
                  alt="Maria Emil"
                  className="w-full h-full object-cover object-bottom"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.4)",
                    "0 0 40px rgba(34, 211, 238, 0.7)",
                    "0 0 20px rgba(34, 211, 238, 0.4)"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-10 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [360, 180, 0],
                  scale: [1.1, 1, 1.1],
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.4)",
                    "0 0 40px rgba(147, 51, 234, 0.7)",
                    "0 0 20px rgba(147, 51, 234, 0.4)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg"
                animate={{ 
                  x: [0, -10, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                  boxShadow: [
                    "0 0 15px rgba(251, 146, 60, 0.4)",
                    "0 0 30px rgba(251, 146, 60, 0.7)",
                    "0 0 15px rgba(251, 146, 60, 0.4)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute top-8 -right-12 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg"
                animate={{ 
                  x: [0, 15, 0],
                  y: [0, -8, 0],
                  rotate: [0, 90, 180],
                  boxShadow: [
                    "0 0 15px rgba(34, 197, 94, 0.4)",
                    "0 0 30px rgba(34, 197, 94, 0.7)",
                    "0 0 15px rgba(34, 197, 94, 0.4)"
                  ]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 -z-10"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.4, 0.6, 0.4],
                  boxShadow: [
                    "0 0 40px rgba(34, 211, 238, 0.2)",
                    "0 0 60px rgba(34, 211, 238, 0.4)",
                    "0 0 40px rgba(34, 211, 238, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className={`backdrop-blur-xl rounded-3xl p-10 mb-8 border shadow-2xl relative overflow-hidden max-w-4xl mx-auto ${
              isDark 
                ? 'bg-gray-800/40 border-cyan-400/30' 
                : 'bg-white/70 border-indigo-400/50'
            }`}
            variants={itemVariants}
            style={isDark ? {
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)"
            } : {
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.25), inset 0 0 40px rgba(99, 102, 241, 0.1)"
            }}
          >
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
            
            <motion.h1
              className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              variants={itemVariants}
              style={isDark ? {
                textShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
              } : {}}
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Maria Emil
              </span>
            </motion.h1>

            <motion.p
              className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-light leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
              variants={itemVariants}
            >
              <span className="text-cyan-400 font-semibold">UI/UX Designer</span> & 
              <span className="text-purple-400 font-semibold"> Front-End Developer</span> crafting beautiful digital experiences
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className={`group relative px-14 py-6 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl border ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 border-cyan-400/50' 
                  : 'bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 border-indigo-500/60'
              }`}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              style={isDark ? {
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)"
              } : {
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.5)"
              }}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700' 
                  : 'bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-800'
              }`}></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <span className="relative z-10 flex items-center justify-center gap-4">
                <Code className="w-6 h-6" />
                View My Work
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className={`group relative px-12 py-5 backdrop-blur-lg border-2 rounded-2xl font-bold text-lg overflow-hidden shadow-xl ${
                isDark 
                  ? 'bg-gray-800/60 border-cyan-400/50 text-cyan-400' 
                  : 'bg-white/80 border-indigo-500/70 text-indigo-700'
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={isDark ? {
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
              } : {
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)"
              }}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? 'bg-cyan-400/10' : 'bg-indigo-500/15'
              }`}></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5" />
                Get In Touch
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`relative backdrop-blur-xl rounded-3xl p-8 border shadow-xl max-w-2xl mx-auto overflow-hidden ${
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
              
              <h3 className={`text-3xl font-bold mb-4 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
                style={isDark ? {
                  textShadow: "0 0 20px rgba(34, 211, 238, 0.5)"
                } : {}}
              >
                Interested in My Experience?
              </h3>
              <p className={`text-lg ${
                isDark ? 'text-gray-200' : 'text-gray-600'
              }`}>Discover my skills, experience, and achievements. Click below to download my CV and let's connect for future opportunities!</p>
          <a
            href="/images/logo/Maria Emil's CV .pdf"
            download
            className={`inline-block mt-6 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 border ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 border-cyan-400/50 text-white hover:scale-105 hover:bg-cyan-600'
                : 'bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 border-indigo-500/60 text-white hover:scale-105 hover:bg-indigo-700'
            }`}
            style={isDark ? {
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)"
            } : {
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
            }}
          >
            Download My CV
          </a>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;