import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Data Engineer Portfolio | AI & ML Specialist",
  description: "Portfolio of a data engineer specializing in AI and machine learning solutions",
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

