"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ComponentType } from "react"

type ShapeType = "circle" | "triangle" | "square" | "icon"

type ShapeConfig = {
  id?: string
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  type?: ShapeType
  speed?: number // bobbing speed (seconds)
  amplitude?: number // bob distance
  icon?: ComponentType<any> // optional lucide/react icon component
}

interface GeometricBackgroundProps {
  className?: string
  shapes?: ShapeConfig[]
}

function renderInnerShape(s: ShapeConfig) {
  const base = cn(
    "absolute inset-0",
    s.type === "circle" && "rounded-full",
    s.type === "square" && "rounded-lg",
    s.type === "triangle" && "overflow-hidden",
  )

  if (s.type === "triangle") {
    // CSS triangle using SVG for consistent gradients
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <polygon points="50,0 100,100 0,100" className={cn("w-full h-full", s.gradient)} />
      </svg>
    )
  }

  if (s.type === "icon" && s.icon) {
    const Icon = s.icon
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Icon className="w-10 h-10 text-white opacity-90" />
      </div>
    )
  }

  // circle or square default
  return <div className={cn(base, "bg-gradient-to-r to-transparent", s.gradient)} />
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  type = "circle",
  speed = 12,
  amplitude = 15,
  icon,
}: ShapeConfig) {
  const bob = amplitude || 15
  const dur = speed || 12

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, bob, 0] }}
        transition={{
          duration: dur,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0",
            type === "circle" ? "rounded-full" : "",
            type === "square" ? "rounded-lg" : "",
            "backdrop-blur-[2px] border-2 border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.12)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]"
          )}
        >
          {/* inner visual */}
          {renderInnerShape({ type, gradient, width, height, icon })}
        </div>
      </motion.div>
    </motion.div>
  )
}

/** Animated geometric background with customizable shapes */
export function GeometricBackground({
  className,
  shapes,
}: GeometricBackgroundProps) {
  const defaultShapes: ShapeConfig[] = [
    { id: "s1", type: "circle", delay: 0.3, width: 600, height: 140, rotate: 12, gradient: "from-indigo-500/[0.22]", className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]", speed: 12 },
    { id: "s2", type: "circle", delay: 0.5, width: 500, height: 120, rotate: -15, gradient: "from-rose-500/[0.22]", className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]", speed: 14 },
    { id: "s3", type: "triangle", delay: 0.4, width: 300, height: 160, rotate: -8, gradient: "from-violet-500/[0.20]", className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]", speed: 10 },
    { id: "s4", type: "square", delay: 0.6, width: 240, height: 120, rotate: 20, gradient: "from-amber-500/[0.20]", className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]", speed: 9 },
    { id: "s5", type: "circle", delay: 0.7, width: 150, height: 40, rotate: -25, gradient: "from-cyan-500/[0.22]", className: "left-[20%] md:left-[25%] top-[5%] md:top-[10%]", speed: 12 },
  ]

  const list = shapes && shapes.length ? shapes : defaultShapes

  return (
    <div className={cn("relative w-full h-full pointer-events-none", className)}>
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08] blur-2xl" />

      

      {list.map((s) => (
        <ElegantShape key={s.id ?? JSON.stringify(s)} {...s} />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/0 via-transparent to-[#030303]/60 pointer-events-none" />
    </div>
  )
}

export default GeometricBackground
