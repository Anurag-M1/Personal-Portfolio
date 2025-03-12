import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import SnowParticles from "@/components/snow-particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Data Engineer Portfolio | AI & ML Specialist",
  description: "Portfolio of a data engineer specializing in AI and machine learning solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SnowParticles />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'