import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Digital Egypt Pioneers Initiative (DEPI) Frontend Developer',
      period: 'Apr 2024 - Oct 2024',
      description: 'Developed modern web applications using React and TypeScript, collaborated with cross-functional teams, and gained hands-on experience with industry-standard development practices.',
      type: 'Internship',
      icon: '🚀',
    },
    {
      company: 'Commercial International Bank (CIB)',
      period: 'Jul 2024 - Aug 2024',
      description: 'Worked on digital banking solutions, contributed to UI/UX improvements, and collaborated with the development team on various projects.',
      type: 'Internship',
      icon: '🏦',
    },
    {
      company: 'Banque Misr & EBSM',
      period: 'Jul 2024 - Aug 2024',
      description: 'Gained experience in financial technology solutions, worked on user interface designs, and contributed to digital transformation initiatives.',
      type: 'Internship',
      icon: '💳',
    },
    {
      company: 'Zewail University of Science & Technology',
      period: 'Aug 2023 - Apr 2024',
      description: 'Assisted in research projects, developed educational web interfaces, and collaborated with academic teams on technology solutions.',
      type: 'Internship',
      icon: '🔬',
    },
    {
      company: 'Emirates NBD Bank & Eyouth',
      period: 'Sep 2023 - Oct 2023',
      description: 'Participated in technology training programs, learned about financial systems, and contributed to youth development initiatives.',
      type: 'Internship',
      icon: '🌟',
    },
    {
      company: 'Commercial International Bank (CIB)',
      period: 'Jul 2023 - Sep 2023',
      description: 'Gained valuable experience in banking technology systems, worked on digital solutions, and contributed to various technology initiatives within the financial sector.',
      type: 'Internship',
      icon: '🏦',
    },
    {
      company: 'Tasaheel Company',
      period: 'Jul 2022 - Aug 2022',
      description: 'Worked on business process optimization, gained exposure to corporate technology solutions, and assisted in various digital transformation projects.',
      type: 'Internship',
      icon: '🏢',
    },
  ];

  const certifications = [
    {
      name: 'Digital Egypt Pioneers Initiative (DEPI)',
      issuer: 'Frontend Developer Certification',
      year: '2024',
      icon: '🎓',
    },
    {
      name: 'NASA International Space Apps Challenge',
      issuer: 'Participant Certificate',
      year: '2024',
      icon: '🚀',
    },
    {
      name: 'Microsoft Security SC-900',
      issuer: 'Microsoft',
      year: '2024',
      icon: '🔐',
    },
    {
      name: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      year: '2023',
      icon: '🌐',
    },
    {
      name: 'IBM Full Stack Software Developer',
      issuer: 'IBM',
      year: '2025',
      icon: '💻',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
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
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              My <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience and achievements that shaped my career in technology
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-white text-lg">{exp.icon}</span>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200/30"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Certifications & Achievements
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-lg rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">{cert.icon}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{cert.year}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-blue-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Certified</span>
                    </div>
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

export default Experience;