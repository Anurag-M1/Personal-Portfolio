"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Predictive Maintenance System",
    description:
      "Developed an ML-powered system that predicts equipment failures before they occur, reducing downtime by 35%.",
    tags: ["Machine Learning", "Python", "IoT", "Time Series"],
    category: "ml",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Real-time Data Pipeline",
    description:
      "Built a scalable, fault-tolerant data pipeline processing 10TB of data daily using Apache Kafka and Spark Streaming.",
    image: "/placeholder.svg?height=300&width=300text=Data+Pipeline",
    tags: ["Data Engineering", "Kafka", "Spark", "AWS"],
    category: "data",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Customer Segmentation Engine",
    description:
      "Created an unsupervised learning model that identified 7 distinct customer segments, increasing marketing ROI by 28%.",
    image: "/placeholder.svg?height=300&width=600&text=Customer+Segmentation",
    tags: ["Machine Learning", "Clustering", "Python", "Visualization"],
    category: "ml",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Data Warehouse Optimization",
    description: "Redesigned a data warehouse architecture, reducing query times by 65% and storage costs by 40%.",
    image: "/placeholder.svg?height=300&width=600&text=Data+Warehouse",
    tags: ["Data Engineering", "SQL", "Snowflake", "ETL"],
    category: "data",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 5,
    title: "NLP-based Document Classifier",
    description:
      "Developed an NLP system that automatically categorizes documents with 94% accuracy, saving 20 hours of manual work weekly.",
    image: "/placeholder.svg?height=300&width=600&text=NLP+Document+Classifier",
    tags: ["NLP", "Deep Learning", "Python", "BERT"],
    category: "ml",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 6,
    title: "Interactive Data Dashboard",
    description:
      "Created a real-time dashboard visualizing key business metrics, enabling data-driven decisions across the organization.",
    image: "/placeholder.svg?height=300&width=600&text=Data+Dashboard",
    tags: ["Data Visualization", "React", "D3.js", "API"],
    category: "visualization",
    demoLink: "#",
    codeLink: "#",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section
      id="projects"
      className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-8">
            Explore a selection of my most impactful projects in data engineering, machine learning, and data
            visualization.
          </p>

          <Tabs defaultValue="all" className="w-full max-w-xs sm:max-w-md mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")} className="rounded-full">
                All
              </TabsTrigger>
              <TabsTrigger value="ml" onClick={() => setActiveTab("ml")} className="rounded-full">
                ML/AI
              </TabsTrigger>
              <TabsTrigger value="data" onClick={() => setActiveTab("data")} className="rounded-full">
                Data
              </TabsTrigger>
              <TabsTrigger value="visualization" onClick={() => setActiveTab("visualization")} className="rounded-full">
                Viz
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700">
                  <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                    <Image
                      src={
                        project.image ||
                        "/placeholder.svg?height=300&width=600&text=" + encodeURIComponent(project.title) ||
                        "/placeholder.svg"
                      }
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3 sm:p-6 flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-gray-600 dark:text-gray-400 text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 sm:p-6 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-blue-50 dark:hover:bg-blue-900 text-xs sm:text-sm"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-blue-50 dark:hover:bg-blue-900 text-xs sm:text-sm"
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

