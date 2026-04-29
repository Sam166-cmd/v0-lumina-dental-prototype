"use client"

import { useState } from "react"
import { Header } from "@/components/lumina/header"
import { Hero } from "@/components/lumina/hero"
import { TrustBar } from "@/components/lumina/trust-bar"
import { Services } from "@/components/lumina/services"
import { BeforeAfter } from "@/components/lumina/before-after"
import { Testimonials } from "@/components/lumina/testimonials"
import { FAQ } from "@/components/lumina/faq"
import { Footer } from "@/components/lumina/footer"
import { BookingModal } from "@/components/lumina/booking-modal"

export default function LuminaDentalLanding() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  return (
    <main>
      <Header onBookingClick={openBooking} />
      <Hero onBookingClick={openBooking} />
      <TrustBar />
      <Services onBookingClick={openBooking} />
      <BeforeAfter onBookingClick={openBooking} />
      <Testimonials />
      <FAQ onBookingClick={openBooking} />
      <Footer onBookingClick={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </main>
  )
}
