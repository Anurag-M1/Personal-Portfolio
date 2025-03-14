"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
  life: number
  maxLife: number
  pulse: number
  pulseSpeed: number
}

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const lastMousePositionRef = useRef({ x: 0, y: 0 })
  const { theme } = useTheme()
  const isTouchDevice = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Check if it's a touch device
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      lastMousePositionRef.current = { x: e.clientX, y: e.clientY }

      // Create particles on mouse move
      createParticles(e.clientX, e.clientY)
    }

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        setMousePosition({ x: touch.clientX, y: touch.clientY })
        setIsMouseMoving(true)
        lastMousePositionRef.current = { x: touch.clientX, y: touch.clientY }

        // Create particles on touch move
        createParticles(touch.clientX, touch.clientY)
      }
    }

    // Create particles
    const createParticles = (x: number, y: number) => {
      // Calculate distance from last position to determine how many particles to create
      const dx = x - lastMousePositionRef.current.x
      const dy = y - lastMousePositionRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Create more particles for faster movements
      const particlesToCreate = Math.min(Math.max(Math.floor(distance / 5), 1), 3)

      for (let i = 0; i < particlesToCreate; i++) {
        // Create smaller particles
        const size = Math.random() * 2 + 0.5

        // Random starting opacity
        const opacity = Math.random() * 0.5 + 0.3

        // Random speed
        const speedX = (Math.random() - 0.5) * 2
        const speedY = (Math.random() - 0.5) * 2

        // Life properties
        const life = 0
        const maxLife = Math.random() * 30 + 10

        // Pulse properties for shimmering effect
        const pulse = 0
        const pulseSpeed = Math.random() * 0.1 + 0.05

        // Add to particles array
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 10, // Slight random offset
          y: y + (Math.random() - 0.5) * 10, // Slight random offset
          size,
          opacity,
          speedX,
          speedY,
          life,
          maxLife,
          pulse,
          pulseSpeed,
        })
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get current theme
      const isDark = theme === "dark"

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Update particle life
        particle.life += 1

        // Update pulse for shimmering effect
        particle.pulse += particle.pulseSpeed
        const pulseFactor = Math.sin(particle.pulse) * 0.5 + 0.5

        // Calculate opacity based on life and pulse
        const lifeOpacity = 1 - particle.life / particle.maxLife
        const finalOpacity = particle.opacity * lifeOpacity * (0.7 + pulseFactor * 0.3)

        // Set color based on theme
        const particleColor = isDark ? `rgba(255, 255, 255, ${finalOpacity})` : `rgba(0, 0, 0, ${finalOpacity})`

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * (0.8 + pulseFactor * 0.2), 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(index, 1)
        }
      })

      // Request next frame
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    if (!isTouchDevice.current) {
      window.addEventListener("mousemove", handleMouseMove)
    } else {
      window.addEventListener("touchmove", handleTouchMove)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (!isTouchDevice.current) {
        window.removeEventListener("mousemove", handleMouseMove)
      } else {
        window.removeEventListener("touchmove", handleTouchMove)
      }
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" aria-hidden="true" />
}

