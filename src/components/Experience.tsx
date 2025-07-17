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
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-24 left-24 w-28 h-28 border-2 border-indigo-400/20 rotate-12 rounded-lg"
          animate={{
            rotate: [12, 372, 12],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-48 right-32 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-indigo-500/15 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-indigo-500/20 rounded-2xl"
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
          className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-radial from-indigo-400/20 via-blue-300/15 to-transparent rounded-full"
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
          className="absolute bottom-24 right-1/3 w-24 h-24 bg-gradient-radial from-blue-400/25 via-indigo-300/20 to-transparent rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 25, 0],
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
          <div className="text-center mb-16">
            <motion.div
              className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/30 shadow-xl max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                My <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Journey</span>
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
            </motion.div>
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
              {/* Modern Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600 rounded-full shadow-lg"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Enhanced Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 rounded-full flex items-center justify-center z-10 shadow-xl border-4 border-white">
                    <span className="text-white text-xl">{exp.icon}</span>
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/40 group"
                      whileHover={{ scale: 1.03, y: -8 }}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                            {exp.company}
                          </h4>
                        </div>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-sm font-bold shadow-lg">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <div className="flex items-center bg-blue-50/50 rounded-2xl px-4 py-2">
                          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      
                      {/* Decorative gradient line */}
                      <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Certifications */}
          <div>
            <motion.div
              className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/30 shadow-xl max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Certifications & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Achievements</span>
              </motion.h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/30 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/40 hover:border-white/60 overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">{cert.icon}</span>
                    </div>
                    <span className="text-gray-500 text-sm font-medium bg-white/30 px-3 py-1 rounded-full">{cert.year}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-6">{cert.issuer}</p>
                  
                  <div className="pt-4 border-t border-white/30">
                    <div className="flex items-center text-blue-600">
                      <Award className="w-5 h-5 mr-3" />
                      <span className="text-sm font-bold">Certified Professional</span>
                    </div>
                  </div>
                  
                  {/* Decorative gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-b-3xl"></div>
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