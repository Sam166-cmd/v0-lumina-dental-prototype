"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onBookingClick: () => void
  variant?: "light" | "dark"
  title?: string
  subtitle?: string
}

export function CTASection({ 
  onBookingClick, 
  variant = "dark",
  title = "Ready to Transform Your Smile?",
  subtitle = "Take the first step toward the smile you've always wanted. Book your free consultation today and discover what's possible."
}: CTASectionProps) {
  const isDark = variant === "dark"
  
  return (
    <section className={`relative overflow-hidden ${isDark ? "bg-secondary" : "bg-muted"}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -left-20 -top-20 h-64 w-64 rounded-full ${isDark ? "bg-primary/10" : "bg-primary/5"} blur-3xl`} />
        <div className={`absolute -bottom-20 -right-20 h-64 w-64 rounded-full ${isDark ? "bg-primary/10" : "bg-primary/5"} blur-3xl`} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className={`text-sm font-medium ${isDark ? "text-secondary-foreground" : "text-foreground"}`}>
              Free Consultation - No Obligation
            </span>
          </motion.div>
          
          <h2 className={`mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${isDark ? "text-secondary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          <p className={`mx-auto mb-8 max-w-2xl text-lg ${isDark ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={onBookingClick}
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="tel:+15145551234"
              className={`text-sm font-medium ${isDark ? "text-secondary-foreground/70 hover:text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              Or call us: (514) 555-1234
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
