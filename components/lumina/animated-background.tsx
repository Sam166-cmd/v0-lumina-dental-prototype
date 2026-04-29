'use client'

import { motion } from 'framer-motion'

interface Orb {
  id: number
  size: number
  duration: number
  delay: number
  x: number
  y: number
  color: string
}

const generateOrbs = (): Orb[] => {
  return [
    {
      id: 1,
      size: 300,
      duration: 20,
      delay: 0,
      x: 15,
      y: 25,
      color: 'rgba(193, 164, 97, 0.4)', // Soft Gold - increased opacity
    },
    {
      id: 2,
      size: 250,
      duration: 25,
      delay: 2,
      x: 75,
      y: 75,
      color: 'rgba(26, 34, 56, 0.3)', // Deep Navy - increased opacity
    },
    {
      id: 3,
      size: 280,
      duration: 22,
      delay: 4,
      x: 50,
      y: 15,
      color: 'rgba(193, 164, 97, 0.35)', // Soft Gold variant
    },
    {
      id: 4,
      size: 200,
      duration: 28,
      delay: 1,
      x: 25,
      y: 70,
      color: 'rgba(26, 34, 56, 0.25)', // Deep Navy variant
    },
    {
      id: 5,
      size: 240,
      duration: 24,
      delay: 3,
      x: 80,
      y: 35,
      color: 'rgba(193, 164, 97, 0.3)', // Soft Gold muted
    },
  ]
}

export function AnimatedBackground() {
  const orbs = generateOrbs()

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-muted" />

      {/* Animated orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            y: [0, 40, -25, 20, 0],
            x: [0, 25, -20, 30, 0],
            opacity: [0.6, 0.9, 0.6, 0.8, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle gradient overlay for smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/5 pointer-events-none" />
    </div>
  )
}
