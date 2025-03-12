"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAutoMode, setIsAutoMode] = useState(true)

  // Check if it's day or night
  const isDayTime = () => {
    const hours = new Date().getHours()
    return hours >= 6 && hours < 18 // Day time is between 6 AM and 6 PM
  }

  // Set theme based on time of day
  const setThemeBasedOnTime = () => {
    if (isAutoMode) {
      setTheme(isDayTime() ? "light" : "dark")
    }
  }

  // Initialize theme based on time when component mounts
  useEffect(() => {
    setMounted(true)

    // Check if user has manually set a theme before
    const savedTheme = localStorage.getItem("theme")
    const savedAutoMode = localStorage.getItem("themeAutoMode")

    if (savedAutoMode !== null) {
      setIsAutoMode(savedAutoMode === "true")
    }

    if (savedTheme && savedAutoMode === "false") {
      // If user has manually set a theme, use that
      setTheme(savedTheme)
    } else {
      // Otherwise set based on time
      setThemeBasedOnTime()
    }

    // Set up interval to check time every minute
    const interval = setInterval(() => {
      setThemeBasedOnTime()
    }, 60000)

    return () => clearInterval(interval)
  }, [setTheme, isAutoMode])

  // Toggle theme manually
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    // When manually toggling, turn off auto mode
    setIsAutoMode(false)
    localStorage.setItem("themeAutoMode", "false")
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-700" />}
    </Button>
  )
}

