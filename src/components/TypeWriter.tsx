"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypeWriterProps {
  words: string[]
  className?: string
}

const TypeWriter = ({ words, className = "" }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentWord) {
          setIsDeleting(true)
          setTypingSpeed(100)
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
          setTypingSpeed(150)
        }
      } else {
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150)
        } else {
          setCurrentText(currentWord.slice(0, currentText.length - 1))
          setTypingSpeed(50)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        className="inline-block w-[2px] h-6 bg-primary-500 dark:bg-primary-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.span>
  )
}

export default TypeWriter 