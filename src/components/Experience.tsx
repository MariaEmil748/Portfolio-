import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      role: 'Frontend Developer Intern',
      period: 'Apr 2024 - Oct 2024',
      location: 'Egypt',
      description: 'Developed modern web applications using React and TypeScript, collaborated with cross-functional teams, and gained hands-on experience with industry-standard development practices.',
      type: 'Internship',
      icon: '🚀',
    },
    {
      company: 'Commercial International Bank (CIB)',
      role: 'Technology Intern',
      period: 'Jul 2024 - Aug 2024',
      location: 'Egypt',
      description: 'Worked on digital banking solutions, contributed to UI/UX improvements, and collaborated with the development team on various projects.',
      type: 'Internship',
      icon: '🏦',
    },
    {
      company: 'Banque Misr & EBSM',
      role: 'Digital Solutions Intern',
      period: 'Jul 2024 - Aug 2024',
      location: 'Egypt',
      description: 'Gained experience in financial technology solutions, worked on user interface designs, and contributed to digital transformation initiatives.',
      type: 'Internship',
      icon: '💳',
    },
    {
      company: 'Zewail University of Science & Technology',
      role: 'Research Assistant',
      period: 'Aug 2023 - Apr 2024',
      location: 'Egypt',
      description: 'Assisted in research projects, developed educational web interfaces, and collaborated with academic teams on technology solutions.',
      type: 'Research',
      icon: '🔬',
    },
    {
      company: 'Emirates NBD Bank & Eyouth',
      role: 'Technology Trainee',
      period: 'Sep 2023 - Oct 2023',
      location: 'Egypt',
      description: 'Participated in technology training programs, learned about financial systems, and contributed to youth development initiatives.',
      type: 'Training',
      icon: '🌟',
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
      year: '2023',
      icon: '💻',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
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
              My <span className="gradient-text">Journey</span>
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
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                          <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
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
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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