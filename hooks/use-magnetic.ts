"use client"

import { useRef, useState, useEffect } from "react"

interface MagneticOptions {
  strength?: number
  radius?: number
  disableOnMobile?: boolean
}

export function useMagnetic(options: MagneticOptions = {}) {
  const { strength = 30, radius = 200, disableOnMobile = true } = options

  const elementRef = useRef<HTMLElement | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Skip effect on mobile if disabled
    if (disableOnMobile && isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = element.getBoundingClientRect()

      // Calculate center of the element
      const centerX = left + width / 2
      const centerY = top + height / 2

      // Calculate distance between cursor and center
      const distanceX = clientX - centerX
      const distanceY = clientY - centerY
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

      // Apply magnetic effect if cursor is within radius
      if (distance < radius) {
        // Calculate movement based on distance and strength
        // The closer to the center, the stronger the effect
        const powerX = (distanceX / radius) * strength
        const powerY = (distanceY / radius) * strength

        setPosition({ x: powerX, y: powerY })
      } else {
        // Reset position if cursor is outside radius
        setPosition({ x: 0, y: 0 })
      }
    }

    // Reset position when mouse leaves
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength, radius, disableOnMobile, isMobile])

  return { elementRef, position }
}

