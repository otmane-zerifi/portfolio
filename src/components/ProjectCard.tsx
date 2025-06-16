"use client"

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isButtonHovered) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    setIsButtonHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isButtonHovered ? 0 : rotateX,
        rotateY: isButtonHovered ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full h-[400px] rounded-xl bg-white dark:bg-secondary-800 shadow-xl overflow-hidden"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full p-6 flex flex-col"
      >
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </div>

        <h3
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-xl font-bold mb-2 text-secondary-900 dark:text-white"
        >
          {project.title}
        </h3>

        <p
          style={{
            transform: "translateZ(25px)",
          }}
          className="text-secondary-600 dark:text-secondary-300 mb-4"
        >
          {project.description}
        </p>

        <div
          style={{
            transform: "translateZ(25px)",
          }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="flex gap-4 mt-auto pt-4"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 
                       text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600 
                       transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">View Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 
                       text-white transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              <ExternalLink className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;