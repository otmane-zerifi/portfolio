"use client"

import type React from "react"
import SectionWrapper from "./SectionWrapper"
import { Mail, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-secondary-900 dark:text-white">Let's Connect</h3>

          <p className="text-secondary-700 dark:text-secondary-300 mb-8 max-w-lg mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>

          <div className="space-y-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 text-secondary-700 dark:text-secondary-300">
              <Mail size={24} className="text-primary-600 dark:text-primary-400" />
              <a
                href="mailto:otmanamrani747@gmail.com"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-lg"
              >
                otmanamrani747@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-secondary-700 dark:text-secondary-300">
              <Github size={24} className="text-primary-600 dark:text-primary-400" />
              <a
                href="https://github.com/otmane-zerifi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-lg"
              >
                github.com/otmane-zerifi
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-secondary-700 dark:text-secondary-300">
              <Linkedin size={24} className="text-primary-600 dark:text-primary-400" />
              <a
                href="https://linkedin.com/in/otmane-amrani-zerifi-905799280/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-lg"
              >
                linkedin.com/in/otmane-amrani-zerifi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
