import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'SASS', 'Material-UI', 'Styled Components', 'Redux', 'jQuery', 'Framer Motion', 'GSAP', 'Three.js'],
      icon: Code2,
      color: 'from-blue-500 to-blue-700',
      hoverBg: '59, 130, 246, 0.15', // Light blue
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase'],
      icon: Zap,
      color: 'from-green-500 to-green-700',
      hoverBg: '34, 197, 94, 0.15', // Light green
    },
    {
      category: 'UI/UX Design',
      items: ['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
      icon: Palette,
      color: 'from-purple-500 to-purple-700',
      hoverBg: '168, 85, 247, 0.15', // Light purple
    },
    {
      category: 'Development Tools',
      items: ['VS Code', 'Git', 'GitHub', 'Vite'],
      icon: Target,
      color: 'from-orange-500 to-orange-700',
      hoverBg: '249, 115, 22, 0.15', // Light orange
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 relative overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-32 left-32 w-24 h-24 border-2 border-blue-400/20 rotate-45 rounded-lg"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-24 w-32 h-32 bg-gradient-to-br from-indigo-400/15 to-blue-500/15 rounded-full"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-500/20 rounded-2xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 right-16 w-36 h-36 bg-gradient-radial from-blue-400/20 via-indigo-300/15 to-transparent rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-radial from-indigo-400/25 via-blue-300/20 to-transparent rounded-full"
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
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  I'm a passionate <span className="font-bold text-blue-600">UI/UX Designer</span> and 
                  <span className="font-bold text-purple-600"> Front-End Developer</span> from Egypt, dedicated to creating 
                  beautiful, functional digital experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
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
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `rgba(${skill.hoverBg})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f9fafb';
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-3`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 transition-colors duration-300">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 group-hover:bg-white/80 group-hover:border-gray-300 transition-all duration-300"
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