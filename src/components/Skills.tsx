import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <div className="space-y-12">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-10"
          >
            <h3 className="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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