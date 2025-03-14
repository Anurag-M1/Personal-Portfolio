"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import MagneticText from "@/components/magnetic-text"

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 px-2 sm:px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <MagneticText
            as="h2"
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100"
            strength={20}
          >
            About Me
          </MagneticText>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 mx-auto">
              <Image
                src="/anuragsingh.png?height=300&width=300&text=Profile"
                alt="Anurag Singh"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MagneticText
              as="h3"
              className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100"
              strength={15}
            >
              Data Engineer & AI Specialist
            </MagneticText>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With over 2 years of experience in data engineering and machine learning, I specialize in building
              scalable data pipelines and developing AI solutions that drive business value. My expertise spans across
              various industries including finance, healthcare, and e-commerce.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white dark:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">ML Models Deployed</div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">2+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">12+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

