"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onBookingClick: () => void
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-muted pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.9 Rating on Google
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Transform Your Smile,</span>
              <br />
              <span className="text-primary">Transform Your Life</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground lg:mx-0 lg:text-xl">
              Montreal&apos;s premier cosmetic dental studio. Experience personalized care 
              with Dr. Sophie Tremblay and discover the smile you&apos;ve always dreamed of.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                onClick={onBookingClick}
                size="lg"
                className="group w-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="#results"
                className="flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                See Our Results
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl font-bold text-foreground">1,200+</p>
                <p className="text-sm text-muted-foreground">Smiles Created</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-2xl">
              {/* Placeholder for Dr. Tremblay image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-secondary-foreground">
                  <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-secondary-foreground/20" />
                  <p className="text-lg font-medium">Dr. Sophie Tremblay</p>
                  <p className="text-sm opacity-80">Cosmetic Dentistry Specialist</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full border-4 border-primary" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-xl sm:p-6"
            >
              <p className="text-sm font-medium text-muted-foreground">Member of</p>
              <p className="font-serif text-lg font-semibold text-foreground">
                ACDQ & ODQ
              </p>
              <p className="text-xs text-muted-foreground">
                Professional Dental Associations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
