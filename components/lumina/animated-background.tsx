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
      size: 200,
      duration: 20,
      delay: 0,
      x: 10,
      y: 20,
      color: 'rgba(193, 164, 97, 0.15)', // Soft Gold with transparency
    },
    {
      id: 2,
      size: 150,
      duration: 25,
      delay: 2,
      x: 80,
      y: 80,
      color: 'rgba(26, 34, 56, 0.1)', // Deep Navy with transparency
    },
    {
      id: 3,
      size: 180,
      duration: 22,
      delay: 4,
      x: 50,
      y: 10,
      color: 'rgba(193, 164, 97, 0.12)', // Soft Gold variant
    },
    {
      id: 4,
      size: 120,
      duration: 28,
      delay: 1,
      x: 20,
      y: 70,
      color: 'rgba(26, 34, 56, 0.08)', // Deep Navy variant
    },
    {
      id: 5,
      size: 160,
      duration: 24,
      delay: 3,
      x: 85,
      y: 30,
      color: 'rgba(193, 164, 97, 0.1)', // Soft Gold muted
    },
  ]
}

export function AnimatedBackground() {
  const orbs = generateOrbs()

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90" />

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
            y: [0, 30, -20, 15, 0],
            x: [0, 20, -15, 25, 0],
            opacity: [0.3, 0.5, 0.3, 0.4, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Light overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  )
}
