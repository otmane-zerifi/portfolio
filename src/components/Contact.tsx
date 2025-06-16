"use client"

import type React from "react"
import SectionWrapper from "./SectionWrapper"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/10 dark:to-transparent rounded-3xl -z-10" />
          
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold mb-6 text-secondary-900 dark:text-white"
              >
                Let's Connect
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto leading-relaxed"
              >
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
              <a
                href="mailto:otmanamrani747@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-secondary-800 
                         shadow-card hover:shadow-card-hover transition-all duration-300
                         border border-secondary-100 dark:border-secondary-700
                         hover:border-primary-200 dark:hover:border-primary-800"
              >
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 
                              text-primary-600 dark:text-primary-400
                              group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50
                              transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Email</p>
                  <p className="font-medium text-secondary-900 dark:text-white 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400
                             transition-colors duration-300">
                    otmanamrani747@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/otmane-zerifi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-secondary-800 
                         shadow-card hover:shadow-card-hover transition-all duration-300
                         border border-secondary-100 dark:border-secondary-700
                         hover:border-primary-200 dark:hover:border-primary-800"
              >
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 
                              text-primary-600 dark:text-primary-400
                              group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50
                              transition-colors duration-300">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">GitHub</p>
                  <p className="font-medium text-secondary-900 dark:text-white 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400
                             transition-colors duration-300">
                    github.com/otmane-zerifi
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/otmane-amrani-zerifi-905799280/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-secondary-800 
                         shadow-card hover:shadow-card-hover transition-all duration-300
                         border border-secondary-100 dark:border-secondary-700
                         hover:border-primary-200 dark:hover:border-primary-800"
              >
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 
                              text-primary-600 dark:text-primary-400
                              group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50
                              transition-colors duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">LinkedIn</p>
                  <p className="font-medium text-secondary-900 dark:text-white 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400
                             transition-colors duration-300">
                    linkedin.com/in/otmane-amrani-zerifi
                  </p>
                </div>
              </a>

              <a
                href="mailto:otmanamrani747@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-primary-600 hover:bg-primary-700 
                         shadow-card hover:shadow-card-hover transition-all duration-300
                         text-white"
              >
                <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Send size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/80">Send Message</p>
                  <p className="font-medium">Let's talk about your project</p>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
