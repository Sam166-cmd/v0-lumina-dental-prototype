"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ReactCompareSlider, ReactCompareSliderHandle } from "react-compare-slider"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterProps {
  onBookingClick: () => void
}

const cases = [
  {
    id: 1,
    title: "Complete Smile Makeover",
    description: "Porcelain veneers transformed this patient's chipped and discolored teeth into a stunning, natural-looking smile.",
    treatment: "10 Porcelain Veneers",
    duration: "3 visits over 4 weeks",
  },
  {
    id: 2,
    title: "Invisalign Transformation",
    description: "Clear aligners corrected crowding and spacing issues, giving this patient the confidence to smile again.",
    treatment: "Invisalign Full Treatment",
    duration: "14 months",
  },
  {
    id: 3,
    title: "Professional Whitening",
    description: "In-office whitening removed years of staining, brightening this smile by 6 shades.",
    treatment: "Zoom Whitening",
    duration: "1 visit (90 minutes)",
  },
]

export function BeforeAfter({ onBookingClick }: BeforeAfterProps) {
  const [activeCase, setActiveCase] = useState(0)

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const currentCase = cases[activeCase]

  return (
    <section id="results" className="bg-muted py-20 lg:py-28">
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
            Real Results
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Before & After Transformations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See the life-changing results our patients have achieved. 
            Every smile tells a story of renewed confidence.
          </p>
        </motion.div>

        {/* Slider Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Compare Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <ReactCompareSlider
                itemOne={
                  <div className="flex h-[400px] w-full items-center justify-center bg-secondary/80 sm:h-[500px]">
                    <div className="text-center text-secondary-foreground">
                      <p className="mb-2 text-sm font-medium uppercase tracking-wider opacity-70">Before</p>
                      <p className="font-serif text-xl">Treatment Photo</p>
                    </div>
                  </div>
                }
                itemTwo={
                  <div className="flex h-[400px] w-full items-center justify-center bg-primary/20 sm:h-[500px]">
                    <div className="text-center text-foreground">
                      <p className="mb-2 text-sm font-medium uppercase tracking-wider opacity-70">After</p>
                      <p className="font-serif text-xl">Treatment Photo</p>
                    </div>
                  </div>
                }
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      backdropFilter: undefined,
                      background: "#C1A461",
                      border: 0,
                      color: "#1A2238",
                    }}
                    linesStyle={{
                      background: "#C1A461",
                    }}
                  />
                }
              />
            </div>

            {/* Case Navigation */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prevCase}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
                aria-label="Previous case"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCase(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === activeCase ? "w-6 bg-primary" : "bg-border"
                    }`}
                    aria-label={`View case ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextCase}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
                aria-label="Next case"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Case Details */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left"
          >
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">
              {currentCase.title}
            </h3>
            <p className="mb-6 text-lg text-muted-foreground">
              {currentCase.description}
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-6 lg:justify-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Treatment
                </p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {currentCase.treatment}
                </p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Duration
                </p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {currentCase.duration}
                </p>
              </div>
            </div>

            <Button
              onClick={onBookingClick}
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Your Transformation Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
