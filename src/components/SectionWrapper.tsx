"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface SectionWrapperProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

const SectionWrapper = ({ id, title, children, className = "" }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative py-20 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Section background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 to-transparent dark:via-primary-900/10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-4">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>

      {/* Section connector */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary-500/50 to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.section>
  )
}

export default SectionWrapper