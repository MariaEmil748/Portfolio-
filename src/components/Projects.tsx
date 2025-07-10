import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GenCare',
      subtitle: 'AI-Powered Maternal Health Platform',
      description: 'A comprehensive digital solution for maternal health featuring AI-powered health monitoring, personalized care recommendations, and seamless communication between expecting mothers and healthcare providers.',
      image: 'https://images.pexels.com/photos/8376298/pexels-photo-8376298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'AI/ML', 'Firebase', 'Figma'],
      type: 'Website & Mobile App',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
      category: 'Graduation Project',
    },
    {
      id: 2,
      title: 'Scoop Ice Cream',
      subtitle: 'Sweet Digital Experience',
      description: 'A delightful e-commerce website design for an ice cream brand, featuring vibrant colors, smooth animations, and an intuitive shopping experience that captures the joy of sweet treats.',
      image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Animation'],
      type: 'Website Design',
      icon: Globe,
      gradient: 'from-orange-500 to-pink-500',
      category: 'UI/UX Design',
    },
    {
      id: 3,
      title: 'This Portfolio',
      subtitle: 'Personal Brand Showcase',
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and journey as a UI/UX Designer and Front-End Developer. Built with cutting-edge technologies and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      type: 'Portfolio Website',
      icon: Globe,
      gradient: 'from-blue-500 to-teal-500',
      category: 'Personal Project',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      subtitle: 'DEPI Training Project',
      description: 'A full-featured e-commerce platform developed as part of the Digital Egypt Pioneers Initiative training program, showcasing modern web development practices and user-centered design.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'PHP', 'MySQL', 'Bootstrap'],
      type: 'Full-Stack Web App',
      icon: Globe,
      gradient: 'from-green-500 to-teal-500',
      category: 'Training Project',
    },
    {
      id: 5,
      title: 'NASA Space Apps',
      subtitle: 'International Challenge',
      description: 'An innovative game and website developed for the NASA International Space Apps Challenge, combining educational content with engaging gameplay to inspire interest in space exploration.',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'Game Development'],
      type: 'Game & Website',
      icon: Gamepad2,
      gradient: 'from-purple-500 to-indigo-500',
      category: 'Competition',
    },
    {
      id: 6,
      title: 'Harmony Resort',
      subtitle: 'Luxury Hospitality Experience',
      description: 'A sophisticated website design for a luxury resort, featuring elegant layouts, stunning visuals, and seamless booking functionality to create an immersive digital experience.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      type: 'Website Design',
      icon: Globe,
      gradient: 'from-cyan-500 to-blue-500',
      category: 'Client Project',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore my latest work showcasing innovative solutions and creative designs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                      <div className={`w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center`}>
                        <project.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <project.icon className="w-4 h-4 mr-1" />
                      {project.type}
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-gray-600" />
                      </motion.button>
                      <motion.button
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Want to see more? Let's talk!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;