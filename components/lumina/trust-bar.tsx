"use client"

import { motion } from "framer-motion"
import { Award, Users, Star, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1,200+",
    label: "Smiles Created",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Google Rating",
  },
  {
    icon: MapPin,
    value: "#1",
    label: "Montreal Cosmetic Clinic",
  },
]

export function TrustBar() {
  return (
    <section className="bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="mb-2 h-6 w-6 text-primary" />
              <p className="font-serif text-2xl font-bold text-secondary-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-secondary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
