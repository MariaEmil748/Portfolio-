import { motion } from 'framer-motion';
import { Code, Sparkles } from 'lucide-react';

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
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 via-indigo-300/15 to-transparent rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-12 h-12 border-2 border-blue-400/30 rounded-lg rotate-45"
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-6 w-8 h-8 bg-indigo-500/20 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-6 left-1/3 w-6 h-6 bg-gradient-to-br from-cyan-400/25 to-blue-500/25 rounded-full"
            animate={{
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-8 w-10 h-10 bg-gradient-to-br from-blue-400/20 via-indigo-300/15 to-transparent rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/3 w-8 h-8 border-2 border-blue-400/30 rounded-lg rotate-45"
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
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
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="relative group">
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [360, 180, 0],
                  scale: [1.1, 1, 1.1]
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
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute top-8 -right-12 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg"
                animate={{ 
                  x: [0, 15, 0],
                  y: [0, -8, 0],
                  rotate: [0, 90, 180]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="w-64 h-64 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-lg border-4 border-white/30 relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
                  <motion.img
                    src="/images/logo/me.png"
                    alt="Maria Emil"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileHover={{ scale: 1.25 }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-400/20"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="absolute top-2 right-2"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-300 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-3 left-3"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    >
                      <Sparkles className="w-3 h-3 text-purple-300 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      className="absolute top-1/2 left-1"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0.9, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    >
                      <Sparkles className="w-2 h-2 text-blue-300 drop-shadow-lg" />
                    </motion.div>
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-300/60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute inset-2 rounded-full border border-cyan-300/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/30 shadow-xl"
            variants={itemVariants}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Maria Emil
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-light leading-relaxed"
              variants={itemVariants}
            >
              <span className="text-blue-600 font-semibold">UI/UX Designer</span> & 
              <span className="text-indigo-700 font-semibold"> Front-End Developer</span> crafting 
              <span className="text-gray-800"> beautiful digital experiences</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="group relative px-14 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl border border-cyan-400/50"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              className="group relative px-12 py-5 bg-white/40 backdrop-blur-lg border-2 border-blue-300/50 text-blue-700 rounded-2xl font-bold text-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-blue-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl max-w-2xl mx-auto overflow-hidden">
              {/* Background Pattern for Let's Connect Section */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 via-indigo-300/15 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-12 h-12 border-2 border-blue-400/30 rounded-lg rotate-45"
                  animate={{
                    rotate: [45, 225, 45],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-6 w-8 h-8 bg-indigo-500/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-6 left-1/3 w-6 h-6 bg-gradient-to-br from-cyan-400/25 to-blue-500/25 rounded-full"
                  animate={{
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-2xl overflow-hidden z-10"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Want to see more? Let's collaborate!
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;