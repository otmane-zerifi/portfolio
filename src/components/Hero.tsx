import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Code, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-950 dark:to-primary-950 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 to-transparent dark:from-primary-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
      
      <div className="container mx-auto max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
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
            className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Crafting elegant solutions through clean code and innovative design
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
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <FileText size={18} />
              Download Resume
            </a>
            <a 
              href="#projects" 
              className="btn-secondary flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-secondary-800 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Code size={18} />
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/otmane-zerifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/otmane-amrani-zerifi-905799280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
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
        <div className="flex flex-col items-center">
          <span className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">Scroll Down</span>
          <ArrowDown size={24} className="text-primary-500 dark:text-primary-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;