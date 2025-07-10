import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Angular', 'Bootstrap', 'Sass'],
      icon: Code2,
      color: 'from-blue-500 to-blue-700',
    },
    {
      category: 'Backend & Databases',
      items: ['PHP', 'XAMPP', 'SQL', 'Firebase'],
      icon: Zap,
      color: 'from-green-500 to-green-700',
    },
    {
      category: 'UI/UX Design',
      items: ['Figma', 'Canva', 'User Research', 'Prototyping'],
      icon: Palette,
      color: 'from-purple-500 to-purple-700',
    },
    {
      category: 'Development Tools',
      items: ['VS Code', 'Cursor', 'Spline', 'Git', 'GitHub'],
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a passionate UI/UX Designer and Front-End Developer from Egypt, dedicated to creating 
              beautiful, functional digital experiences. With expertise in modern web technologies and 
              design principles, I transform ideas into engaging user interfaces.
            </motion.p>
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

          {/* Education */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education</h3>
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Faculty of Computer & Information Technology
                </h4>
                <p className="text-gray-600">Egyptian E-Learning University (EELU)</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Experimental Language School
                </h4>
                <p className="text-gray-600">Foundation Education</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;