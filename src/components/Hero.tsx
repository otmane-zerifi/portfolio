import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Code, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-950 dark:to-primary-950 z-0" />
      
      <div className="container mx-auto max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Otmane Amrani Zerifi
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-primary-600 dark:text-primary-400 mb-6"
          >
            Full-Stack Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto mb-8"
          >
            "I build clean, responsive UIs with a strong backend foundation."
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FileText size={18} />
              Download Resume
            </a>
            <a 
              href="#projects" 
              className="btn-secondary flex items-center gap-2"
            >
              <Code size={18} />
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <a
              href="https://github.com/otmane-zerifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/otmane-amrani-zerifi-905799280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1.2,
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={24} className="text-secondary-500 dark:text-secondary-400" />
      </motion.div>
    </div>
  );
};

export default Hero;