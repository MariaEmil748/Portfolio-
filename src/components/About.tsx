import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'SASS', 'Material-UI', 'Styled Components', 'Redux', 'jQuery', 'Framer Motion', 'GSAP', 'Three.js'],
      icon: Code2,
      color: 'from-blue-500 to-blue-700',
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase'],
      icon: Zap,
      color: 'from-green-500 to-green-700',
    },
    {
      category: 'UI/UX Design',
      items: ['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
      icon: Palette,
      color: 'from-purple-500 to-purple-700',
    },
    {
      category: 'Development Tools',
      items: ['VS Code', 'Git', 'GitHub', 'Vite'],
      icon: Target,
      color: 'from-orange-500 to-orange-700',
    },
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: Lightbulb },
    { name: 'Adaptability', icon: Zap },
    { name: 'Teamwork', icon: Users },
    { name: 'Critical Thinking', icon: Target },
    { name: 'Creativity', icon: Palette },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-300/40 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/30 rounded-full filter blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-300/25 rounded-full filter blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
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
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-3`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Soft Skills
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{skill.name}</p>
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