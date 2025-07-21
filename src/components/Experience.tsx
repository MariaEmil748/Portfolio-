import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();
  
  const experiences = [
    {
      company: 'IBM Full Stack Software Developer',
      period: 'Apr 2025 - Aug 2025',
      type: 'Intern',
      description: 'Worked on full stack web development projects using modern technologies, collaborated with global teams, and gained hands-on experience in building scalable software solutions.',
      icon: '💻',
    },
    {
      company: 'Digital Egypt Pioneers Initiative (MCIT) Front-End Development',
      period: 'Apr 2024 - Oct 2024',
      type: 'Intern',
      description: 'Developed modern web applications using React and TypeScript, collaborated with cross-functional teams, and gained hands-on experience with industry-standard development practices.',
      icon: '🚀',
    },
    {
      company: 'Commercial International Bank (CIB)',
      period: 'Jul 2024 - Aug 2024',
      type: 'Intern',
      description: 'Worked on digital banking solutions, contributed to UI/UX improvements, and collaborated with the development team on various projects.',
      icon: '🏦',
    },
    {
      company: 'Banque Misr & EBSM',
      period: 'Jul 2024 - Aug 2024',
      type: 'Intern',
      description: 'Gained experience in financial technology solutions, worked on user interface designs, and contributed to digital transformation initiatives.',
      icon: '💳',
    },
    {
      company: 'Zewail University of Science & Technology',
      period: 'Aug 2023 - Apr 2024',
      type: 'Intern',
      description: 'Assisted in research projects, developed educational web interfaces, and collaborated with academic teams on technology solutions.',
      icon: '🔬',
    },
    {
      company: 'Emirates NBD Bank & Eyouth',
      period: 'Sep 2023 - Oct 2023',
      type: 'Intern',
      description: 'Participated in technology training programs, learned about financial systems, and contributed to youth development initiatives.',
      icon: '🌟',
    },
    {
      company: 'Commercial International Bank (CIB)',
      period: 'Jul 2023 - Sep 2023',
      type: 'Intern',
      description: 'Gained valuable experience in banking technology systems, worked on digital solutions, and contributed to various technology initiatives within the financial sector.',
      icon: '🏦',
    },
    {
      company: 'Tasaheel Company',
      period: 'Jul 2022 - Aug 2022',
      type: 'Intern',
      description: 'Worked on business process optimization, gained exposure to corporate technology solutions, and assisted in various digital transformation projects.',
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
    <section id="experience" className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100'
    }`}>
      {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-30`}></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className={`absolute top-24 left-24 w-28 h-28 border-2 rotate-12 rounded-lg ${
            isDark ? 'border-cyan-400/50' : 'border-indigo-400/20'
          }`}
          animate={{
            rotate: [12, 372, 12],
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
          className={`absolute top-48 right-32 w-24 h-24 rounded-full ${
            isDark 
              ? 'bg-gradient-to-br from-cyan-400/30 to-blue-500/30' 
              : 'bg-gradient-to-br from-blue-400/15 to-indigo-500/15'
          }`}
          animate={{
            y: [0, -30, 0],
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
          className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40' 
              : 'bg-indigo-500/20'
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
          className={`absolute top-1/3 right-20 w-32 h-32 rounded-full ${
            isDark 
              ? 'bg-gradient-radial from-cyan-400/40 via-blue-500/30 to-transparent' 
              : 'bg-gradient-radial from-indigo-400/20 via-blue-300/15 to-transparent'
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
          className={`absolute bottom-24 right-1/3 w-24 h-24 rounded-full ${
            isDark 
              ? 'bg-gradient-radial from-purple-400/50 via-pink-400/40 to-transparent' 
              : 'bg-gradient-radial from-blue-400/25 via-indigo-300/20 to-transparent'
          }`}
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
          <div className="text-center mb-16">
            <motion.div
              className={`backdrop-blur-lg rounded-3xl p-8 mb-8 border shadow-xl max-w-4xl mx-auto ${
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
                My <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-cyan-400 via-blue-400 to-purple-400' 
                    : 'from-blue-600 via-indigo-600 to-blue-800'
                }`}>Journey</span>
              </motion.h2>
              <motion.p
                className={`text-xl max-w-2xl mx-auto ${
                  isDark ? 'text-gray-200' : 'text-gray-600'
                }`}
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
              className={`text-2xl font-bold mb-12 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h3>
            
            <div className="relative">
              {/* Modern Timeline line */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full rounded-full shadow-lg ${
                isDark 
                  ? 'bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600' 
                  : 'bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600'
              }`}></div>
              
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
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-xl border-4 ${
                    isDark 
                      ? 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 border-gray-800' 
                      : 'bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 border-white'
                  }`}>
                    <span className="text-white text-xl">{exp.icon}</span>
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className={`backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border group ${
                        isDark 
                          ? 'bg-gray-800/60 border-cyan-400/30' 
                          : 'bg-white/30 border-white/40'
                      }`}
                      whileHover={{ scale: 1.03, y: -8 }}
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
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            isDark 
                              ? 'text-white group-hover:text-cyan-400' 
                              : 'text-gray-900 group-hover:text-blue-700'
                          }`}>
                            {exp.company}
                          </h4>
                        </div>
                        <span className={`px-4 py-2 text-white rounded-2xl text-sm font-bold shadow-lg ${
                          isDark 
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                            : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className={`flex items-center rounded-2xl px-4 py-2 ${
                          isDark 
                            ? 'bg-gray-700/50' 
                            : 'bg-blue-50/50'
                        }`}>
                          <Calendar className={`w-4 h-4 mr-2 ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`} />
                          <span className={`text-sm font-medium ${
                            isDark ? 'text-gray-200' : 'text-gray-600'
                          }`}>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className={`leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{exp.description}</p>
                      
                      {/* Decorative gradient line */}
                      <div className={`mt-6 h-1 rounded-full ${
                        isDark 
                          ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600' 
                          : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600'
                      }`}></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Certifications */}
          <div>
            <motion.div
              className={`backdrop-blur-lg rounded-3xl p-8 mb-12 border shadow-xl max-w-3xl mx-auto text-center ${
                isDark 
                  ? 'bg-gray-800/60 border-cyan-400/30' 
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
              <motion.h3
                className={`text-3xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Certifications & <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-cyan-400 via-blue-400 to-purple-400' 
                    : 'from-blue-600 via-indigo-600 to-blue-800'
                }`}>Achievements</span>
              </motion.h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={`group relative backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border overflow-hidden ${
                    isDark 
                      ? 'bg-gray-800/60 border-cyan-400/30 hover:border-cyan-400/50' 
                      : 'bg-white/30 border-white/40 hover:border-white/60'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
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
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700' 
                        : 'bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700'
                    }`}>
                      <span className="text-white text-2xl">{cert.icon}</span>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isDark 
                        ? 'text-gray-200 bg-gray-700/30' 
                        : 'text-gray-500 bg-white/30'
                    }`}>{cert.year}</span>
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    isDark 
                      ? 'text-white group-hover:text-cyan-400' 
                      : 'text-gray-900 group-hover:text-blue-700'
                  }`}>
                    {cert.name}
                  </h4>
                  <p className={`text-sm mb-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{cert.issuer}</p>
                  
                  <div className={`pt-4 border-t ${
                    isDark ? 'border-cyan-400/30' : 'border-white/30'
                  }`}>
                    <div className={`flex items-center ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      <Award className="w-5 h-5 mr-3" />
                      <span className="text-sm font-bold">Certified Professional</span>
                    </div>
                  </div>
                  
                  {/* Decorative gradient accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600' 
                      : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600'
                  }`}></div>
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