"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
}

export default function SnowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Handle resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Determine particle count based on screen size
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 20 : 80

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (isMobile ? 1 : 3) + 0.5,
        speed: Math.random() * (isMobile ? 1 : 2) + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
      })
    }

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set color based on theme
      const isDark = theme === "dark"

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${p.opacity})` : `rgba(255, 255, 255, ${p.opacity})`
        ctx.fill()

        // Move particle
        p.y += p.speed

        // Reset particle if it goes off screen
        if (p.y > canvas.height) {
          p.y = -10
          p.x = Math.random() * canvas.width
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }} aria-hidden="true" />
  )
}

