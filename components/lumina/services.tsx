"use client"

import { motion } from "framer-motion"
import { Sparkles, SmilePlus, Sun, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServicesProps {
  onBookingClick: () => void
}

const services = [
  {
    icon: Sparkles,
    title: "Porcelain Veneers",
    description: "Custom-crafted veneers that look and feel completely natural. Transform your smile in just 2-3 visits.",
    price: "From $1,500/tooth",
    features: ["Digital Smile Design preview", "Premium ceramic materials", "10-year warranty"],
  },
  {
    icon: SmilePlus,
    title: "Invisalign",
    description: "Straighten your teeth discreetly with clear aligners. Perfect for busy professionals.",
    price: "From $4,500",
    features: ["Invisible aligners", "Removable for eating", "Faster results than braces"],
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Professional-grade whitening that delivers dramatic results safely and comfortably.",
    price: "From $350",
    features: ["Up to 8 shades whiter", "In-office or take-home", "Long-lasting results"],
  },
]

export function Services({ onBookingClick }: ServicesProps) {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Premium Cosmetic Treatments</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every treatment is tailored to your unique goals. We combine artistry with 
            advanced technology to deliver results that exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
                    {service.price}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={onBookingClick}
                    variant="outline"
                    className="group/btn w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Financing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Flexible financing available through{" "}
            <span className="font-medium text-foreground">PayBright</span> and{" "}
            <span className="font-medium text-foreground">MediCard</span>.{" "}
            <button
              onClick={onBookingClick}
              className="text-primary underline-offset-4 hover:underline"
            >
              Ask about 0% interest options
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
