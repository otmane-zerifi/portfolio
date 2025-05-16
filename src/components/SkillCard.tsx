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
      className="card hover:shadow-xl hover:ring-1 hover:ring-primary-300 dark:hover:ring-primary-700 
                flex flex-col items-center py-4 px-2"
    >
      <div className="mb-3 text-primary-600 dark:text-primary-400">
        {IconComponent && <IconComponent size={30} />}
      </div>
      <span className="font-medium text-secondary-800 dark:text-secondary-200">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;