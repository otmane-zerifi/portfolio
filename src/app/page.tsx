"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import ProjectShowcase from "@/components/ProjectShowcase"
import SkillsShowcase from "@/components/SkillsShowcase"
import Contact from "@/components/Contact"
import InteractiveBackground from "@/components/InteractiveBackground"
import SectionWrapper from "@/components/SectionWrapper"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Interactive background that spans the entire page */}
      <InteractiveBackground />

      {/* Main content with z-index to appear above background */}
      <div className="relative z-10">
        {/* Hero section */}
        <Hero />

        {/* Projects section */}
        <SectionWrapper id="projects" title="Featured Projects">
          <ProjectShowcase />
        </SectionWrapper>

        {/* Skills section */}
        <SectionWrapper id="skills" title="Technical Skills">
          <SkillsShowcase />
        </SectionWrapper>

        {/* Contact section */}
        <SectionWrapper id="contact" title="Get in Touch">
          <Contact />
        </SectionWrapper>
      </div>

      {/* Decorative elements that connect sections */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/2 w-px h-1/4 bg-gradient-to-b from-primary-500/50 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: "25vh" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-px h-1/4 bg-gradient-to-b from-secondary-500/50 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: "25vh" }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.div
          className="absolute top-3/4 left-1/2 w-px h-1/4 bg-gradient-to-b from-primary-500/50 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: "25vh" }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </div>
    </main>
  )
} 