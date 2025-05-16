import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary-100 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-700 dark:text-secondary-300 mb-4 sm:mb-0">
            © {year} Otmane Amrani Zerifi. All rights reserved.
          </p>
          
          <p className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
            Built with 
            <Heart size={14} className="mx-1 text-red-500" fill="currentColor" /> 
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;