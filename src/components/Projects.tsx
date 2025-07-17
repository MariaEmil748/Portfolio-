import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GenCare',
      subtitle: 'AI-Powered Maternal Health Platform',
      description: 'GENCARE is a pregnancy tracker that uses AI to detect fetal diseases and gives helpful tips for expectant mothers.',
      image: '/images/projects/gencare.png',
      type: 'Website & Mobile App',
      gradient: 'from-pink-500 to-rose-500',
      liveUrl: 'https://gencare-five.vercel.app/',
    },
    {
      id: 2,
      title: 'Scoop Ice Cream',
      subtitle: 'Sweet Digital Experience',
      description: 'SCOOP is a fun ice cream shop website with playful UI/UX. Browse flavors and customize your order easily.',
      image: '/images/projects/scoop.png',
      type: 'Website Design',
      gradient: 'from-orange-500 to-pink-500',
      liveUrl: 'https://www.figma.com/proto/bBNWWNFxJPLjhL19IXyO9U/scoop?page-id=0%3A1&node-id=44-35&p=f&viewport=478%2C185%2C0.03&t=K36SEYGYAVQSoI6a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=44%3A35',
    },
    {
      id: 3,
      title: 'maria-bag',
      subtitle: 'portfolio',
      description: "Maria's Bag is a creative portfolio that showcases unique projects and technical skills, all wrapped in an interactive experience.",
      image: '/images/projects/mariabag.png',
      type: 'Portfolio Website',
      gradient: 'from-blue-500 to-teal-500',
      liveUrl: 'https://maria-bag.vercel.app/',
    },
  ];

  
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 relative overflow-hidden">
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
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
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
                Featured <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Projects</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Explore my latest work showcasing innovative solutions, creative designs, and cutting-edge technology implementations
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <div className="bg-white/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/40 group-hover:border-white/60 transition-all duration-500 h-full">
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Project Icon (if available) */}
                    {project.icon && (
                      <div className="absolute top-6 right-6">
                        <motion.div 
                          className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg`}
                          whileHover={{ scale: 1.15, rotate: 10 }}
                        >
                          <project.icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>
                    )}

                    {/* Project Type Badge at bottom of image */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-4 py-2 border border-white/30 shadow-lg">
                        <span className="text-white text-sm font-semibold flex items-center gap-2">
                          {project.icon && <project.icon className="w-4 h-4" />}
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Bottom gradient accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-2xl text-sm font-bold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl max-w-2xl mx-auto">
              <motion.a
                href="#contact"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-2xl overflow-hidden relative"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Want to see more? Let's collaborate!
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;