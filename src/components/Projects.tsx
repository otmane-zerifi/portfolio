import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;