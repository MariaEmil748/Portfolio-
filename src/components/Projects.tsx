import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const Projects = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      id: 1,
      title: 'GenCare',
      subtitle: 'Pregnancy Tracker',
      description: 'GENCARE is a pregnancy tracker that uses AI to detect fetal diseases and gives helpful tips for expectant mothers.',
      video: '/images/projects/gencare.mp4',
      type: 'Website & Mobile App',
      gradient: isDark ? 'from-blue-400 to-blue-700' : 'from-blue-300 to-blue-600',  // GenCare: blue
      liveUrl: 'https://gencare-five.vercel.app/',
      category: 'Frontend',
    },
    {
      id: 2,
      title: 'Scoop Ice Cream',
      subtitle: 'Sweet Digital Experience',
      description: 'SCOOP is a fun ice cream shop website with playful UI/UX. Browse flavors and customize your order easily.',
      video: '/images/projects/scoop.mp4',
      type: 'Website Design',
      gradient: isDark ? 'from-blue-400 to-blue-700' : 'from-blue-300 to-blue-600',  // Scoop: blue
      liveUrl: 'https://www.figma.com/proto/bBNWWNFxJPLjhL19IXyO9U/scoop?page-id=0%3A1&node-id=44-35&p=f&viewport=478%2C185%2C0.03&t=K36SEYGYAVQSoI6a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=44%3A35',
      category: 'UIUX',
    },
    {
      id: 3,
      title: 'maria-bag',
      subtitle: 'portfolio',
      description: "Maria's Bag is a creative portfolio that showcases unique projects and technical skills, all wrapped in an interactive experience.",
      video: '/images/projects/mariabag.mp4',
      type: 'Portfolio Website',
      gradient: isDark ? 'from-blue-400 to-blue-700' : 'from-blue-300 to-blue-600', // Maria-bag: blue
      liveUrl: 'https://maria-bag.vercel.app/',
      category: ['UIUX', 'Frontend'],
    },
  ];

  const [filter, setFilter] = useState<'All' | 'UIUX' | 'Frontend'>('All');
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(filter);
          }
          return project.category === filter;
        });
  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100'
    }`}>
      {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-30`}></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className={`absolute top-32 left-32 w-24 h-24 border-2 rotate-45 rounded-lg ${
            isDark ? 'border-cyan-400/50' : 'border-blue-400/20'
          }`}
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
            boxShadow: isDark ? [
              "0 0 20px rgba(34, 211, 238, 0.3)",
              "0 0 40px rgba(34, 211, 238, 0.6)",
              "0 0 20px rgba(34, 211, 238, 0.3)"
            ] : []
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute top-60 right-24 w-32 h-32 rounded-full ${
            isDark 
              ? 'bg-gradient-to-br from-cyan-400/30 to-blue-500/30' 
              : 'bg-gradient-to-br from-indigo-400/15 to-blue-500/15'
          }`}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            boxShadow: isDark ? [
              "0 0 30px rgba(59, 130, 246, 0.4)",
              "0 0 60px rgba(59, 130, 246, 0.7)",
              "0 0 30px rgba(59, 130, 246, 0.4)"
            ] : []
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-40 left-1/4 w-20 h-20 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40' 
              : 'bg-blue-500/20'
          }`}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1],
            boxShadow: isDark ? [
              "0 0 25px rgba(147, 51, 234, 0.5)",
              "0 0 50px rgba(147, 51, 234, 0.8)",
              "0 0 25px rgba(147, 51, 234, 0.5)"
            ] : []
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className={`absolute top-1/3 right-16 w-36 h-36 rounded-full ${
            isDark 
              ? 'bg-gradient-radial from-cyan-400/40 via-blue-500/30 to-transparent' 
              : 'bg-gradient-radial from-blue-400/20 via-indigo-300/15 to-transparent'
          }`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: isDark ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-32 right-1/3 w-28 h-28 rounded-full ${
            isDark 
              ? 'bg-gradient-radial from-purple-400/50 via-pink-400/40 to-transparent' 
              : 'bg-gradient-radial from-indigo-400/25 via-blue-300/20 to-transparent'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Scanning Line Effect for Dark Theme */}
        {isDark && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-2"
            animate={{
              y: [-100, typeof window !== 'undefined' ? window.innerHeight + 100 : 800],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.div
              className={`backdrop-blur-xl rounded-3xl p-8 mb-8 border shadow-xl max-w-4xl mx-auto relative overflow-hidden ${
                isDark 
                  ? 'bg-gray-800/40 border-cyan-400/30' 
                  : 'bg-white/20 border-white/30'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={isDark ? {
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)"
              } : {}}
            >
              {isDark && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                </>
              )}
              <motion.h2
                className={`text-5xl md:text-7xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={isDark ? {
                  textShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                } : {}}
              >
                Featured <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-cyan-400 via-blue-400 to-purple-400' 
                    : 'from-blue-600 via-indigo-600 to-blue-800'
                }`}>Projects</span>
              </motion.h2>
              <motion.p
                className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Explore my latest work showcasing innovative solutions, creative designs, and cutting-edge technology implementations
              </motion.p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            <button
              className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 overflow-hidden relative ${
                filter === 'All'
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white border-cyan-400'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-400'
                  : isDark
                  ? 'bg-gray-800 text-cyan-400 border-cyan-400'
                  : 'bg-white text-blue-600 border-blue-400'
              }`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 overflow-hidden relative ${
                filter === 'UIUX'
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white border-cyan-400'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-400'
                  : isDark
                  ? 'bg-gray-800 text-cyan-400 border-cyan-400'
                  : 'bg-white text-blue-600 border-blue-400'
              }`}
              onClick={() => setFilter('UIUX')}
            >
              UI/UX Designs
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 overflow-hidden relative ${
                filter === 'Frontend'
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white border-cyan-400'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-400'
                  : isDark
                  ? 'bg-gray-800 text-cyan-400 border-cyan-400'
                  : 'bg-white text-blue-600 border-blue-400'
              }`}
              onClick={() => setFilter('Frontend')}
            >
              Frontend Designs
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <div className={`backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 h-full ${
                  isDark 
                    ? 'bg-gray-800/60 border-cyan-400/30 group-hover:border-cyan-400/50' 
                    : 'bg-white/30 border-white/40 group-hover:border-white/60'
                }`}
                  style={isDark ? {
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)"
                  } : {}}
                  onMouseEnter={(e) => {
                    if (isDark) {
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(34, 211, 238, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDark) {
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(34, 211, 238, 0.1)";
                    }
                  }}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={project.video.replace('.mp4', '.png')}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Project Type Badge at bottom of image */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`backdrop-blur-lg rounded-2xl px-4 py-2 border shadow-lg ${
                        isDark 
                          ? 'bg-gray-800/60 border-cyan-400/30' 
                          : 'bg-white/20 border-white/30'
                      }`}>
                        <span className="text-white text-sm font-semibold flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Bottom gradient accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                        isDark 
                          ? 'text-white group-hover:text-cyan-400' 
                          : 'text-gray-900 group-hover:text-blue-700'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm font-semibold mb-4 uppercase tracking-wide ${
                        isDark ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        {project.subtitle}
                      </p>
                      <p className={`leading-relaxed ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-2xl text-sm font-bold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105 shadow-lg`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          style={isDark ? {
                            boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                          } : {}}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`backdrop-blur-lg rounded-3xl p-8 border shadow-xl max-w-2xl mx-auto ${
              isDark 
                ? 'bg-gray-800/60 border-cyan-400/30' 
                : 'bg-white/20 border-white/30'
            }`}
              style={isDark ? {
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)"
              } : {}}
            >
              <motion.a
                href="#contact"
                className={`group inline-flex items-center px-10 py-5 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl overflow-hidden relative ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800'
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={isDark ? {
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)"
                } : {}}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700' 
                    : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800'
                }`}></div>
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

export default Projects;