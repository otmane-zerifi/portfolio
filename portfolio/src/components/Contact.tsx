import React from 'react';
import SectionWrapper from './SectionWrapper';
import ContactForm from './ContactForm';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:w-2/5"
        >
          <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
            Let's Connect
          </h3>
          
          <p className="text-secondary-700 dark:text-secondary-300 mb-6">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-secondary-700 dark:text-secondary-300">
              <Mail size={20} className="text-primary-600 dark:text-primary-400" />
              <a
                href="mailto:otmanamrani747@gmail.com"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                otmanamrani747@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3 text-secondary-700 dark:text-secondary-300">
              <Github size={20} className="text-primary-600 dark:text-primary-400" />
              <a
                href="https://github.com/otmane-zerifi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                github.com/otmane-zerifi
              </a>
            </div>
            
            <div className="flex items-center gap-3 text-secondary-700 dark:text-secondary-300">
              <Linkedin size={20} className="text-primary-600 dark:text-primary-400" />
              <a
                href="https://linkedin.com/in/otmane-amrani-zerifi-905799280/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                linkedin.com/in/otmane-amrani-zerifi
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className="md:w-3/5">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;