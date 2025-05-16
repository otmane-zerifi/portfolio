import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 
                   group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
        {project.title}
      </h3>
      
      <p className="text-secondary-700 dark:text-secondary-300 mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900 
                     text-primary-700 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 mt-auto pt-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-1 text-sm"
        >
          <Github size={16} />
          View Code
        </a>
        
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-1 text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;