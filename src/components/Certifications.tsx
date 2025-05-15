import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="card flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
            <Award size={48} className="text-primary-600 dark:text-primary-400" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
              Google IT Support Certificate
            </h3>
            
            <p className="text-secondary-700 dark:text-secondary-300 mb-2">
              Earned via Coursera
            </p>
            
            <p className="text-secondary-600 dark:text-secondary-400 text-sm">
              Comprehensive training in system troubleshooting, networking fundamentals, 
              Linux tools, security protocols, and IT infrastructure management.
            </p>
            
            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-primary-600 dark:text-primary-400 
                         hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              View Certificate →
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;