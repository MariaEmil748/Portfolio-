import { motion } from 'framer-motion';

import { useTheme } from '../contexts/ThemeContext';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaBootstrap, FaSass, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaRegFileCode, FaRegObjectGroup, FaRegEdit
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiThreedotjs, SiGreensock, SiRedux, SiJquery, SiMui, SiStyledcomponents, SiAdobexd, SiAdobeillustrator, SiCanva, SiFirebase, SiExpress, SiMongodb, SiMysql, SiVite, SiNotion, SiFramer, SiJson, SiWire } from 'react-icons/si';

const About = () => {
  const { isDark } = useTheme();
  
  // Map skill names to icon components from react-icons
  const skillIcons: Record<string, any> = {
    'HTML': FaHtml5,
    'CSS': FaCss3Alt,
    'JavaScript': FaJs,
    'TypeScript': SiTypescript,
    'React': FaReact,
    'Angular': FaAngular,
    'Bootstrap': FaBootstrap,
    'Sass': FaSass,
    'TailwindCSS': SiTailwindcss,
    'Threejs': SiThreedotjs,
    'GSAP': SiGreensock,
    'FramerMotion': SiFramer,
    'RESTAPIs': FaRegFileCode,
    'JSON': SiJson,
    'Redux': SiRedux,
    'ResponsiveDesign': FaRegObjectGroup,
    'jQuery': SiJquery,
    'MaterialUI': SiMui,
    'StyledComponents': SiStyledcomponents,
    'Figma': FaFigma,
    'Wireframing': SiWire,
    'Prototyping': FaRegEdit,
    // 'UserFlow': fallback,
    // 'DesignSystems': fallback,
    // 'Accessibility': fallback,
    'AdobeXD': SiAdobexd,
    // 'AdobePhotoshop': fallback,
    'AdobeIllustrator': SiAdobeillustrator,
    'Canva': SiCanva,
    'PHP': FaPhp,
    'SQL': FaDatabase,
    'Firebase': SiFirebase,
    'Nodejs': FaNodeJs,
    'Expressjs': SiExpress,
    'MongoDB': SiMongodb,
    'MySQL': SiMysql,
    'VSCode': FaRegFileCode,
    'Git': FaGitAlt,
    'GitHub': FaGithub,
    'Vite': SiVite,
    // 'Spline': fallback,
    'Notion': SiNotion,
    // 'AgileMethodologies': fallback,
  };

  // Combine all skills into a single array for two marquee lines
  const allSkills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Bootstrap', 'Sass', 'TailwindCSS', 'Threejs', 'GSAP', 'FramerMotion', 'RESTAPIs', 'JSON', 'Redux', 'ResponsiveDesign', 'jQuery', 'MaterialUI', 'StyledComponents',
    'Figma', 'Wireframing', 'Prototyping', 'AdobeXD', 'AdobeIllustrator',
    'PHP', 'SQL', 'Firebase', 'Nodejs', 'Expressjs', 'MongoDB', 'MySQL',
    'VSCode', 'Git', 'GitHub', 'Vite', 'Notion',
    'Canva'
    
    ,'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Bootstrap', 'Sass', 'TailwindCSS', 'Threejs', 'GSAP', 'FramerMotion', 'RESTAPIs', 'JSON', 'Redux', 'ResponsiveDesign', 'jQuery', 'MaterialUI', 'StyledComponents',
    'Figma', 'Wireframing', 'Prototyping', 'AdobeXD', 'AdobeIllustrator',
    'PHP', 'SQL', 'Firebase', 'Nodejs', 'Expressjs', 'MongoDB', 'MySQL',
    'VSCode', 'Git', 'GitHub', 'Vite', 'Notion',
    'Canva'
  ];

  return (
    <section id="about" className={`py-24 relative overflow-hidden ${
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
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Technical Skills & Technologies Section */}
          <div className="text-center mb-20">
            <motion.h2
              className={`text-5xl md:text-7xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={isDark ? { textShadow: "0 0 30px rgba(34, 211, 238, 0.5)" } : {}}
            >
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${isDark ? 'from-cyan-400 via-blue-400 to-purple-400' : 'from-blue-600 via-sky-600 to-cyan-600'}`}>Technical Skills & Technologies</span>
            </motion.h2>
          </div>

          {/* Two marquee lines for all skills with glassmorphism background like get in touch section */}
          <div
            className={`relative py-16 rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-cyan-400/10 backdrop-blur-xl w-full
              ${isDark ? 'bg-gray-900/60' : 'bg-white/70'}
            `}
            style={isDark ? {
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.15), inset 0 0 40px rgba(59, 130, 246, 0.08)"
            } : {
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.12), inset 0 0 40px rgba(99, 102, 241, 0.06)"
            }}
          >
            {/* Gradient lines top and bottom, like get in touch section */}
            <div className={`absolute top-0 left-0 w-full h-1 ${isDark ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-500 to-transparent'}`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-1 ${isDark ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'}`}></div>
            <div className="relative z-10 space-y-10">
              {(() => {
                const half = Math.ceil(allSkills.length / 2);
                const lines = [allSkills.slice(0, half), allSkills.slice(half)];
                const animationDuration = `${allSkills.length * 2.5}s`;
                return lines.map((lineSkills, idx) => (
                  <div key={idx} className="overflow-x-hidden relative">
                    <div
                      className={`flex items-center space-x-8 py-4 animate-marquee-${idx % 2 === 0 ? 'left' : 'right'}`}
                      style={{
                        minWidth: '100%',
                        animationDuration,
                      }}
                    >
                      {[...lineSkills, ...lineSkills].map((item, i) => {
                        const Icon = skillIcons[item];
                        const brandColors: Record<string, string> = {
                          HTML: '#e34c26', CSS: '#1572B6', JavaScript: '#f7df1e', TypeScript: '#3178c6', React: '#61dafb', Angular: '#dd0031',
                          Bootstrap: '#7952b3', Sass: '#cc6699', TailwindCSS: '#38bdf8', Threejs: '#000000', GSAP: '#88ce02', FramerMotion: '#e64bff',
                          RESTAPIs: '#10b981', JSON: '#cb3837', Redux: '#764abc', ResponsiveDesign: '#0ea5e9', jQuery: '#0769ad', MaterialUI: '#007fff',
                          StyledComponents: '#db7093', Figma: '#a259ff', Wireframing: '#6366f1', Prototyping: '#f59e42', UserFlow: '#6366f1', DesignSystems: '#6366f1', Accessibility: '#6366f1', AdobeXD: '#ff61f6', AdobePhotoshop: '#31a8ff', AdobeIllustrator: '#ff9a00', Canva: '#00c4cc', PHP: '#777bb4', SQL: '#4479a1', Firebase: '#ffca28', Nodejs: '#3c873a', Expressjs: '#000000', MongoDB: '#47a248', MySQL: '#00758f', VSCode: '#007acc', Git: '#f05032', GitHub: isDark ? '#fff' : '#181717', Vite: '#646cff', Spline: '#00b3ff', Notion: '#000000', AgileMethodologies: '#f59e42',
                        };
                        const color = brandColors[item] || (isDark ? '#22d3ee' : '#0ea5e9');
                        return (
                          <div key={item + '-' + i} className="flex flex-col items-center min-w-[90px]">
                            <div className="mb-2 flex items-center justify-center">
                              {Icon ? (
                                <Icon className="w-20 h-20" style={{ color }} title={item} />
                              ) : (
                                <span className="text-3xl font-bold" style={{ color }}>{item[0]}</span>
                              )}
                            </div>
                            <span className={`text-base font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{item}</span>
                          </div>
                        );
                      })}
                    </div>
                    {/* Marquee keyframes for smooth infinite scroll */}
                    <style>{`
                      @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-${half * 88}px); }
                      }
                      .animate-marquee-left {
                        animation-name: marquee-left;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                      }
                      @keyframes marquee-right {
                        0% { transform: translateX(-${half * 88}px); }
                        100% { transform: translateX(0); }
                      }
                      .animate-marquee-right {
                        animation-name: marquee-right;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                      }
                    `}</style>
                  </div>
                ));
              })()}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;