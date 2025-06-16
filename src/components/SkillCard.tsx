import React from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  // @ts-ignore - Dynamically access icons from react-icons/si
  const IconComponent = SiIcons[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative bg-white dark:bg-secondary-800 rounded-xl p-6 
                shadow-card hover:shadow-card-hover transition-all duration-300
                border border-secondary-100 dark:border-secondary-700
                hover:border-primary-200 dark:hover:border-primary-800"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 text-primary-600 dark:text-primary-400 
                      transform transition-transform duration-300 group-hover:scale-110">
          {IconComponent && <IconComponent size={36} />}
        </div>
        <span className="font-medium text-secondary-800 dark:text-secondary-200 
                       text-center transition-colors duration-300
                       group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {skill.name}
        </span>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent 
                    dark:from-primary-900/10 dark:to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </motion.div>
  );
};

export default SkillCard;