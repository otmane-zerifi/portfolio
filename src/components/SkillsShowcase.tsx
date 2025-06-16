"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Server, Terminal, Tool, Globe, Cpu } from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
  category: string
  color: string
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <Code2 className="w-6 h-6" />,
    level: 90,
    category: "Frontend",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Node.js",
    icon: <Server className="w-6 h-6" />,
    level: 85,
    category: "Backend",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "MongoDB",
    icon: <Database className="w-6 h-6" />,
    level: 80,
    category: "Database",
    color: "from-green-600 to-green-400"
  },
  {
    name: "TypeScript",
    icon: <Code2 className="w-6 h-6" />,
    level: 85,
    category: "Frontend",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Tailwind CSS",
    icon: <Layout className="w-6 h-6" />,
    level: 90,
    category: "Frontend",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Express",
    icon: <Terminal className="w-6 h-6" />,
    level: 85,
    category: "Backend",
    color: "from-gray-600 to-gray-400"
  },
  {
    name: "Git",
    icon: <Tool className="w-6 h-6" />,
    level: 85,
    category: "Tools",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-6 h-6" />,
    level: 80,
    category: "Database",
    color: "from-blue-700 to-blue-500"
  },
  {
    name: "Next.js",
    icon: <Globe className="w-6 h-6" />,
    level: 85,
    category: "Frontend",
    color: "from-black to-gray-700"
  },
  {
    name: "Docker",
    icon: <Cpu className="w-6 h-6" />,
    level: 75,
    category: "Tools",
    color: "from-blue-600 to-blue-400"
  }
]

const SkillsShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="group relative perspective-1000"
            >
              <div className="relative bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform-style-3d">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, ${skill.color})` }} />
                
                <div className="relative z-10">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white mb-4 inline-block`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-4">
                    {skill.category}
                  </p>
                  <div className="relative h-2 bg-secondary-100 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsShowcase 