import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <div className="space-y-16">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="relative"
          >
            {/* Category title with decorative line */}
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-500 to-transparent" />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;