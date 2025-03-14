"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Database, LineChart } from "lucide-react"
import MagneticText from "@/components/magnetic-text"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Data Engineer | AI & ML Specialist"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <MagneticText
            as="h1"
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            strength={40}
            radius={300}
          >
            Anurag Singh
          </MagneticText>

          <div className="h-8 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Transforming complex data into actionable insights and building intelligent systems that solve real-world
            problems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-16 sm:mt-20 gap-4 sm:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Database className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-blue-600 dark:text-blue-400" />
            <MagneticText
              as="span"
              className="mt-2 sm:mt-4 text-xs sm:text-lg font-medium text-gray-700 dark:text-gray-300"
              strength={15}
            >
              Data Engineering
            </MagneticText>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Brain className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-indigo-600 dark:text-indigo-400" />
            <MagneticText
              as="span"
              className="mt-2 sm:mt-4 text-xs sm:text-lg font-medium text-gray-700 dark:text-gray-300"
              strength={15}
            >
              Machine Learning
            </MagneticText>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LineChart className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-purple-600 dark:text-purple-400" />
            <MagneticText
              as="span"
              className="mt-2 sm:mt-4 text-xs sm:text-lg font-medium text-gray-700 dark:text-gray-300"
              strength={15}
            >
              Data Visualization
            </MagneticText>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

