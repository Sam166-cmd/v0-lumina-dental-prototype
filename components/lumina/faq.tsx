"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

interface FAQProps {
  onBookingClick: () => void
}

const faqs = [
  {
    question: "How much do cosmetic procedures cost, and do you offer financing?",
    answer: "Our cosmetic treatments range from $350 for professional whitening to $1,500+ per tooth for porcelain veneers. We understand that investing in your smile is a significant decision, which is why we offer flexible financing through PayBright and MediCard with 0% interest options available for qualified patients. During your free consultation, we'll provide a detailed treatment plan with all costs clearly outlined—no hidden fees or surprises.",
  },
  {
    question: "I'm anxious about dental procedures. How do you help nervous patients?",
    answer: "Dental anxiety is incredibly common, and we've designed our entire practice with your comfort in mind. We offer multiple sedation options including nitrous oxide (laughing gas) and oral sedation for more extensive procedures. Our treatment rooms feature calming music, aromatherapy, and even Netflix to help you relax. Dr. Tremblay takes a gentle, patient-first approach—we'll never rush you or make you feel judged. Many of our most loyal patients came to us specifically because of their past dental fears.",
  },
  {
    question: "How long will my treatment take, and how many visits will I need?",
    answer: "Treatment timelines vary depending on your goals. Professional whitening can be completed in a single 90-minute visit. Porcelain veneers typically require 2-3 visits over 3-4 weeks—the first for consultation and digital design, the second for preparation and temporary veneers, and the third for final placement. Invisalign treatment averages 12-18 months depending on complexity. We'll give you a personalized timeline during your consultation so you can plan accordingly.",
  },
  {
    question: "What if I don't like the results? Do you offer any guarantees?",
    answer: "Your satisfaction is our priority. Before any cosmetic treatment begins, we use Digital Smile Design technology to show you a preview of your results—so you know exactly what to expect before we start. Our porcelain veneers come with a 10-year warranty against defects. If you're not completely satisfied with your results, we'll work with you to make it right. That said, with over 1,200 smile transformations and a 98% satisfaction rate, we're confident you'll love your new smile.",
  },
]

export function FAQ({ onBookingClick }: FAQProps) {
  return (
    <section id="faq" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Common Questions
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Frequently Asked Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? We have answers. If you don&apos;t see what you&apos;re looking for, 
            book a free consultation and we&apos;ll address all your concerns.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg font-medium text-foreground hover:no-underline sm:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-lg text-muted-foreground">
            Still have questions? Let&apos;s talk.
          </p>
          <Button
            onClick={onBookingClick}
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
