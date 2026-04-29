"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Marie-Claude L.",
    location: "Plateau Mont-Royal",
    rating: 5,
    text: "I was terrified of dentists after a bad experience years ago. Dr. Tremblay and her team made me feel completely at ease. My veneers look so natural that even my closest friends think I just have great genetics!",
    treatment: "Porcelain Veneers",
  },
  {
    id: 2,
    name: "Jean-Philippe D.",
    location: "Westmount",
    rating: 5,
    text: "As a business executive, I needed a solution that wouldn't interfere with my work life. Invisalign was perfect. The team was incredibly professional and the results exceeded my expectations.",
    treatment: "Invisalign",
  },
  {
    id: 3,
    name: "Isabelle M.",
    location: "Old Montreal",
    rating: 5,
    text: "I've had my teeth whitened before at other clinics, but nothing compares to this. The results are dramatic yet still look completely natural. I can't stop smiling!",
    treatment: "Professional Whitening",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
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
            Patient Stories
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">What Our Patients Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real experiences from real patients. Discover why our community trusts 
            Lumina Dental Studio for their smile transformations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full border-border bg-card">
                <CardContent className="p-6 sm:p-8">
                  {/* Quote Icon */}
                  <Quote className="mb-4 h-8 w-8 text-primary/30" />

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <span className="font-serif text-lg font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Treatment Tag */}
                  <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {testimonial.treatment}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-serif text-xl font-bold text-foreground">4.9</span>
          </div>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <p className="text-muted-foreground">
            Based on <span className="font-medium text-foreground">200+ reviews</span> on Google
          </p>
        </motion.div>
      </div>
    </section>
  )
}
