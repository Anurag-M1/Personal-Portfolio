"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import MagneticText from "@/components/magnetic-text"

const certifications = [
  {
    id: 1,
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "Jan 2023",
    logo: "/placeholder.svg?height=60&width=60&text=AWS",
    link: "#",
    skills: ["Big Data", "Analytics", "AWS", "Cloud"],
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "Mar 2022",
    logo: "/placeholder.svg?height=60&width=60&text=Azure",
    link: "#",
    skills: ["Azure", "Data Lakes", "ETL", "Synapse"],
  },
  {
    id: 3,
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "Nov 2022",
    logo: "/placeholder.svg?height=60&width=60&text=GCP",
    link: "#",
    skills: ["BigQuery", "Dataflow", "ML", "GCP"],
  },
  {
    id: 4,
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    date: "Jul 2022",
    logo: "/placeholder.svg?height=60&width=60&text=Databricks",
    link: "#",
    skills: ["Spark", "Delta Lake", "Lakehouse", "ETL"],
  },
  {
    id: 5,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Sep 2022",
    logo: "/placeholder.svg?height=60&width=60&text=TensorFlow",
    link: "#",
    skills: ["Deep Learning", "Neural Networks", "ML Models"],
  },
  {
    id: 6,
    name: "Snowflake SnowPro Core Certification",
    issuer: "Snowflake",
    date: "Apr 2023",
    logo: "/placeholder.svg?height=60&width=60&text=Snowflake",
    link: "#",
    skills: ["Data Warehouse", "SQL", "Cloud Data"],
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-blue-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <MagneticText
            as="h2"
            className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100"
            strength={20}
          >
            Certifications & Credentials
          </MagneticText>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Professional certifications that validate my expertise in data engineering, cloud platforms, and machine
            learning technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700 overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 dark:bg-gray-600 p-2 rounded-lg">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.issuer} logo`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <MagneticText
                        as="h3"
                        className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-100"
                        strength={15}
                      >
                        {cert.name}
                      </MagneticText>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {cert.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={cert.link}
                        className="mt-4 inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

