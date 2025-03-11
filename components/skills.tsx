"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Database, Brain, LineChart, Cloud, Code, BarChart4 } from "lucide-react"
import Image from "next/image"

const skills = [
  {
    category: "Data Engineering",
    icon: <Database className="h-6 w-6" />,
    logos: [
      { src: "./images/sql.png?height=50&width=50&text=SQL", alt: "SQL" },
      { src: "./images/ELT.jpg?height=50&width=50&text=ETL", alt: "ETL" },
      { src: "./images/Data Warehousing.png?height=50&width=50&text=Snowflake", alt: "Snowflake" },
      { src: "./images/hadoop.png?height=50&width=50&text=Hadoop", alt: "Hadoop" },
    ],
    items: [
      { name: "SQL & NoSQL Databases", level: 95 },
      { name: "ETL/ELT Pipelines", level: 90 },
      { name: "Data Warehousing", level: 85 },
      { name: "Spark & Hadoop", level: 80 },
    ],
  },
  {
    category: "Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    logos: [
      { src: "./images/Superwise Learning.jpg?height=50&width=50&text=TensorFlow", alt: "TensorFlow" },
      { src: "./images/Deep learning.png?height=50&width=50&text=PyTorch", alt: "PyTorch" },
      { src: "./images/nlp.png?height=50&width=50&text=scikit-learn", alt: "scikit-learn" },
      { src: "./images/computer vision.png?height=50&width=50&text=Keras", alt: "Keras" },
    ],
    items: [
      { name: "Supervised Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP", level: 80 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    category: "Data Visualization",
    icon: <LineChart className="h-6 w-6" />,
    logos: [
      { src: "./images/tableau.png?height=50&width=50&text=Tableau", alt: "Tableau" },
      { src: "./images/power bi.png?height=50&width=50&text=PowerBI", alt: "PowerBI" },
      { src: "./images/d3.jpg?height=50&width=50&text=D3.js", alt: "D3.js" },
      { src: "./images/matplotlib.jpg?height=50&width=50&text=Matplotlib", alt: "Matplotlib" },
    ],
    items: [
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "D3.js", level: 75 },
      { name: "Matplotlib/Seaborn", level: 90 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    logos: [
      { src: "./images/aws.jpg?height=50&width=50&text=AWS", alt: "AWS" },
      { src: "./images/azure.jpg?height=50&width=50&text=Azure", alt: "Azure" },
      { src: "./images/docker.png?height=50&width=50&text=Docker", alt: "Docker" },
      { src: "./images/ci cd.png?height=50&width=50&text=Kubernetes", alt: "Kubernetes" },
    ],
    items: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 85 },
      { name: "Docker & Kubernetes", level: 80 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    category: "Programming",
    icon: <Code className="h-6 w-6" />,
    logos: [
      { src: "./images/python.png?height=50&width=50&text=Python", alt: "Python" },
      { src: "./images/sql.png?height=50&width=50&text=SQL", alt: "SQL" },
      { src: "./images/scala.png?height=50&width=50&text=Scala", alt: "Scala" },
      { src: "./images/js.png?height=50&width=50&text=JavaScript", alt: "JavaScript" },
    ],
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Scala", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "Big Data",
    icon: <BarChart4 className="h-6 w-6" />,
    logos: [
      { src: "./images/spark.jpg?height=50&width=50&text=Spark", alt: "Spark" },
      { src: "./images/kafka.jpg?height=50&width=50&text=Kafka", alt: "Kafka" },
      { src: "./images/airflow.jpg?height=50&width=50&text=Airflow", alt: "Airflow" },
      { src: "./images/hadoop.png?height=50&width=50&text=Hadoop", alt: "Hadoop" },
    ],
    items: [
      { name: "Spark", level: 90 },
      { name: "Kafka", level: 85 },
      { name: "Airflow", level: 80 },
      { name: "Hadoop", level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            My technical toolkit spans across data engineering, machine learning, and cloud technologies, enabling me to
            build end-to-end data solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 sm:mr-4">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-1 sm:gap-3 mb-3 sm:mb-6">
                {skillGroup.logos.map((logo, i) => (
                  <div key={i} className="bg-white dark:bg-gray-700 p-1 sm:p-2 rounded-md shadow-sm">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700"
                      indicatorClassName="bg-blue-600 dark:bg-blue-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

