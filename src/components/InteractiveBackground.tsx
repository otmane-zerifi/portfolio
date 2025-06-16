"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
}

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<FloatingElement[]>([])
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    // Create initial floating elements
    const newElements: FloatingElement[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      delay: Math.random() * 5
    }))
    setElements(newElements)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ perspective: "1000px" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40 dark:from-secondary-900/80 dark:to-secondary-900/40 backdrop-blur-[2px]" />

      {/* Floating elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            background: element.color,
            filter: "blur(40px)"
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5 + element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        {elements.map((element, i) => {
          const nextElement = elements[(i + 1) % elements.length]
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${element.x}%`}
              y1={`${element.y}%`}
              x2={`${nextElement.x}%`}
              y2={`${nextElement.y}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity={0.1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          )
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary-500)" />
            <stop offset="100%" stopColor="var(--secondary-500)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Scroll-based parallax effect */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 to-transparent" />
      </motion.div>
    </div>
  )
}

export default InteractiveBackground 