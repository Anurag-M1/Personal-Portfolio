"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useMagnetic } from "@/hooks/use-magnetic"

interface MagneticTextProps {
  children: ReactNode
  className?: string
  strength?: number
  radius?: number
  disableOnMobile?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function MagneticText({
  children,
  className = "",
  strength = 30,
  radius = 200,
  disableOnMobile = true,
  as = "div",
}: MagneticTextProps) {
  const { elementRef, position } = useMagnetic({ strength, radius, disableOnMobile })

  const Component = motion[as] as any

  return (
    <Component
      ref={elementRef}
      className={className}
      style={{
        display: "inline-block",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </Component>
  )
}

