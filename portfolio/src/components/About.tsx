import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-secondary-700 dark:text-secondary-300"
        >
          <p className="text-lg">
            I'm a passionate software engineer with a strong foundation in both frontend and backend development,
            with a particular focus on creating intuitive and responsive user interfaces.
          </p>

          <p>
            My journey began at <span className="font-semibold text-primary-600 dark:text-primary-400">1337 School (Common Core)</span>, 
            where I established a solid understanding of programming fundamentals and systems design. 
            I've built expertise in C, Unix, real-time systems, and client/server applications, allowing me to 
            write efficient and scalable code.
          </p>

          <p>
            I've also earned a <span className="font-semibold text-primary-600 dark:text-primary-400">Google IT Support Certificate</span> through Coursera,
            which expanded my knowledge of system troubleshooting, networking, and Linux tools. This combination of
            software development and IT support skills gives me a well-rounded perspective on building robust applications.
          </p>

          <p>
            My approach to software development centers on creating clean, maintainable code that delivers 
            exceptional user experiences. I'm constantly exploring new technologies and best practices to 
            enhance my skills and create better solutions.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;