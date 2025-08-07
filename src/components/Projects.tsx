import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const Projects = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      id: 1,
      title: 'Halan Company',
      subtitle: 'Fintech Solution Demo',
      description: 'Halan is a fintech company providing innovative financial technology solutions and digital payment services for modern businesses.',
      video: '/images/projects/halan.mp4',
      type: 'Fintech Platform',
      gradient: isDark ? 'from-gray-900 via-blue-900 to-indigo-900' : 'from-blue-900 via-blue-800 to-indigo-800',
      liveUrl: 'https://halan-demo-maria-gamma.vercel.app/',
      category: ['UIUX', 'Frontend'],
    },
    {
      id: 2,
      title: 'GenCare',
      subtitle: 'Pregnancy Tracker',
      description: 'GENCARE is a pregnancy tracker that uses AI to detect fetal diseases and gives helpful tips for expectant mothers.',
      video: '/images/projects/gencare.mp4',
      type: 'Website & Mobile App',
      gradient: isDark ? 'from-gray-900 via-blue-900 to-indigo-900' : 'from-blue-900 via-blue-800 to-indigo-800',
      liveUrl: 'https://gencare-five.vercel.app/',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'Scoop Ice Cream',
      subtitle: 'Sweet Digital Experience',
      description: 'SCOOP is a fun ice cream shop website with playful UI/UX. Browse flavors and customize your order easily.',
      video: '/images/projects/scoop.mp4',
      type: 'Website Design',
      gradient: isDark ? 'from-gray-900 via-blue-900 to-indigo-900' : 'from-blue-900 via-blue-800 to-indigo-800',
      liveUrl: 'https://www.figma.com/proto/bBNWWNFxJPLjhL19IXyO9U/scoop?page-id=0%3A1&node-id=44-35&p=f&viewport=478%2C185%2C0.03&t=K36SEYGYAVQSoI6a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=44%3A35',
      category: 'UIUX',
    },
    {
      id: 4,
      title: 'maria-bag',
      subtitle: 'portfolio',
      description: "Maria's Bag is a portfolio that showcases unique projects and technical skills, all wrapped in an interactive experience.",
      video: '/images/projects/mariabag.mp4',
      type: 'Portfolio Website',
      gradient: isDark ? 'from-gray-900 via-blue-900 to-indigo-900' : 'from-blue-900 via-blue-800 to-indigo-800',
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
  
  // Track play state for each video
  const [playing, setPlaying] = useState<{[id: number]: boolean}>({});
  const handlePlayPause = (id: number, videoEl: HTMLVideoElement) => {
    if (videoEl.paused) {
      videoEl.play();
      setPlaying(prev => ({ ...prev, [id]: true }));
    } else {
      videoEl.pause();
      setPlaying(prev => ({ ...prev, [id]: false }));
    }
  };

  // SVG icons for play/pause
  const PlayIcon = (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <circle cx="24" cy="24" r="22" fill="rgba(0,0,0,0.5)" stroke="#fff" strokeWidth="2" />
      <polygon points="18,15 36,24 18,33" fill="#fff" />
    </svg>
  );
  const PauseIcon = (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <circle cx="24" cy="24" r="22" fill="rgba(0,0,0,0.5)" stroke="#fff" strokeWidth="2" />
      <rect x="17" y="15" width="5" height="18" fill="#fff" />
      <rect x="26" y="15" width="5" height="18" fill="#fff" />
    </svg>
  );

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
            {filteredProjects.map(project => (
              <div key={project.id} className={`relative group rounded-3xl overflow-hidden shadow-xl border-2 border-transparent hover:border-cyan-400 transition-all duration-300 bg-gradient-to-br ${project.gradient}`}>
                <div className="relative">
                  <video
                    src={project.video}
                    className={`w-full h-64 rounded-t-3xl cursor-pointer
                      ${project.title === 'GenCare' || project.title === 'maria-bag' || project.title === 'Halan Company'
                        ? 'object-contain'
                        : 'object-cover'}
                    `}
                    loop
                    playsInline
                    onClick={e => handlePlayPause(project.id, e.currentTarget)}
                    style={{
                      background: 'transparent', // No blue or gradient background
                      ...(project.title === 'GenCare' || project.title === 'maria-bag' || project.title === 'Halan Company'
                        ? {
                            aspectRatio: '16/9',
                            maxHeight: '16rem',
                          }
                        : {}),
                    }}
                  />
                  {/* Cool animated play/pause button overlay */}
                  <button
                    className={`                    // ...existing code...
                      absolute inset-0 flex items-center justify-center z-20
                      transition-opacity duration-300
                      ${playing[project.id] ? 'opacity-0 group-hover:opacity-80' : 'opacity-100 group-hover:opacity-100'}
                      pointer-events-none group-hover:pointer-events-auto
                    `}
                    style={{
                      background: 'transparent', // Remove blue overlay from button as well
                    }}
                    tabIndex={-1}
                    aria-label={playing[project.id] ? 'Pause video' : 'Play video'}
                    onClick={e => {
                      e.stopPropagation();
                      const videoEl = (e.currentTarget.parentElement?.querySelector('video')) as HTMLVideoElement;
                      if (videoEl) handlePlayPause(project.id, videoEl);
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.7 }}
                      animate={{
                        scale: playing[project.id] ? 1.2 : 1,
                        opacity: playing[project.id] ? 0.7 : 1,
                        rotate: playing[project.id] ? 180 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="rounded-full shadow-2xl"
                    >
                      {playing[project.id] ? (
                        // Animated Pause Icon
                        <svg viewBox="0 0 64 64" className="w-16 h-16">
                          <circle cx="32" cy="32" r="30" fill="rgba(34,211,238,0.25)" />
                          <rect x="20" y="18" width="8" height="28" rx="3" fill="#fff" />
                          <rect x="36" y="18" width="8" height="28" rx="3" fill="#fff" />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            className="animate-spin-slow"
                          />
                        </svg>
                      ) : (
                        // Animated Play Icon
                        <svg viewBox="0 0 64 64" className="w-16 h-16">
                          <circle cx="32" cy="32" r="30" fill="rgba(34,211,238,0.25)" />
                          <polygon points="26,20 48,32 26,44" fill="#fff" />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            className="animate-pulse"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{project.title}</h3>
                  <p className="text-lg mb-2 text-white/80">{project.subtitle}</p>
                  <p className="mb-4 text-white/70">{project.description}</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg border-2 border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
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