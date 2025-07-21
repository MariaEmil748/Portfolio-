import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Bootstrap', 'Sass', 'Tailwind CSS', 'Three.js', 'GSAP', 'Framer Motion', 'REST APIs', 'JSON', 'Redux', 'Responsive Design', 'jQuery', 'Material-UI', 'Styled Components'
      ],
      icon: Code2,
      color: isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-500 to-blue-700',
      hoverBg: isDark ? '34, 211, 238, 0.2' : '59, 130, 246, 0.15',
    },
    {
      category: 'UI/UX Design',
      items: [
        'Figma', 'Wireframing', 'Prototyping', 'User Flow', 'Design Systems', 'Accessibility', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva'
      ],
      icon: Palette,
      color: isDark ? 'from-purple-400 to-pink-500' : 'from-purple-500 to-purple-700',
      hoverBg: isDark ? '168, 85, 247, 0.2' : '168, 85, 247, 0.15',
    },
    {
      category: 'Backend & Databases',
      items: [
        'PHP', 'SQL', 'Firebase', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'
      ],
      icon: Zap,
      color: isDark ? 'from-green-400 to-emerald-500' : 'from-green-500 to-green-700',
      hoverBg: isDark ? '34, 197, 94, 0.2' : '34, 197, 94, 0.15',
    },
    {
      category: 'Development Tools',
      items: [
        'VS Code', 'Git', 'GitHub', 'Vite', 'Spline', 'Notion', 'Agile Methodologies'
      ],
      icon: Target,
      color: isDark ? 'from-orange-400 to-red-500' : 'from-orange-500 to-orange-700',
      hoverBg: isDark ? '249, 115, 22, 0.2' : '249, 115, 22, 0.15',
    },
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
          {/* About Me Section */}
          <div className="text-center mb-20">
            <motion.h2
              className={`text-5xl md:text-7xl font-bold mb-8 ${
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
              About <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-cyan-400 via-blue-400 to-purple-400' 
                  : 'from-blue-600 via-sky-600 to-cyan-600'
              }`}>Me</span>
            </motion.h2>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border relative overflow-hidden ${
                isDark 
                  ? 'bg-gray-800/40 border-cyan-400/30' 
                  : 'bg-white/80 border-white/20'
              }`}
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
                <p className={`text-xl md:text-2xl leading-relaxed mb-6 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  I'm a passionate <span className={`font-bold ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}>UI/UX Designer</span> and 
                  <span className={`font-bold ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}> Front-End Developer</span> 3+ years of experience creating modern, responsive, and user-centered interfaces. Skilled in crafting seamless user experiences that blend clean, intuitive design with dynamic and interactive front-end development.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <motion.h3
              className={`text-2xl font-bold mb-8 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className={`rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border ${
                    isDark 
                      ? 'bg-gray-800/60 border-cyan-400/30 backdrop-blur-lg' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  style={isDark ? {
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)"
                  } : {}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `rgba(${skill.hoverBg})`;
                    if (isDark) {
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(34, 211, 238, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDark) {
                      e.currentTarget.style.background = 'rgba(31, 41, 55, 0.6)';
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(34, 211, 238, 0.1)";
                    } else {
                      e.currentTarget.style.background = '#f9fafb';
                    }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-3 shadow-lg`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-700/60 text-gray-200 border-cyan-400/30 group-hover:bg-gray-600/60 group-hover:border-cyan-400/50' 
                            : 'bg-white text-gray-700 border-gray-200 group-hover:bg-white/80 group-hover:border-gray-300'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;