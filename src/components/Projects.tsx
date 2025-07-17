import { motion } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';

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
      description: 'Maria’s Bag is a creative portfolio that showcases unique projects and technical skills, all wrapped in an interactive experience.',
      image: '/images/projects/mariabag.png',
      type: 'Portfolio Website',
      gradient: 'from-blue-500 to-teal-500',
      liveUrl: 'https://maria-bag.vercel.app/',
    },
  ];

  
  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
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
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">Projects</span>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-blue-200/30 group-hover:border-blue-300/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Icon - only show for projects that have an icon */}
                    {project.icon && (
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-end">
                        <motion.div 
                          className={`w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center backdrop-blur-md border border-white/30`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <project.icon className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                    )}

                    {/* Project Type */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white/80 text-sm font-medium flex items-center">
                        {project.icon && <project.icon className="w-4 h-4 mr-2" />}
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-3">{project.subtitle}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-sky-600 text-white px-4 py-2 rounded-xl text-sm font-medium text-center hover:from-blue-600 hover:to-sky-700 transition-all duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02, y: -2 }}
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