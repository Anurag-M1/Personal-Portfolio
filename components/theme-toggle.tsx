'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to dark (black)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      const initialTheme = savedTheme || 'dark'
      setTheme(initialTheme)
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    if (!mounted || !theme) return
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  if (!mounted || !theme) {
    return (
      <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-accent" />
      ) : (
        <Moon className="w-5 h-5 text-accent" />
      )}
    </button>
  )
}
