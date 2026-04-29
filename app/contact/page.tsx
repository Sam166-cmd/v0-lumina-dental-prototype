"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/lumina/header"
import { Footer } from "@/components/lumina/footer"
import { BookingModal } from "@/components/lumina/booking-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setFormState("success")
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "1234 Rue Sherbrooke Ouest",
      subcontent: "Montreal, QC H3A 1G4",
      link: "https://maps.google.com",
      linkText: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(514) 555-1234",
      subcontent: "Mon-Fri 8AM-6PM",
      link: "tel:+15145551234",
      linkText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@luminadental.ca",
      subcontent: "We respond within 24 hours",
      link: "mailto:info@luminadental.ca",
      linkText: "Send Email",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon-Fri: 8AM - 6PM",
      subcontent: "Sat: 9AM - 3PM",
      link: null,
      linkText: null,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header onBookingClick={() => setIsBookingOpen(true)} variant="page" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary-foreground/80">
              Have questions about our services or ready to book your consultation? 
              We&apos;d love to hear from you. Reach out and let&apos;s start your smile transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-12 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-card p-6 shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="font-medium text-foreground">{item.content}</p>
                <p className="mb-3 text-sm text-muted-foreground">{item.subcontent}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="text-sm font-medium text-primary hover:underline"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.linkText} &rarr;
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-muted p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormState("idle")}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-firstName">First Name</Label>
                      <Input
                        id="contact-firstName"
                        placeholder="Sophie"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-lastName">Last Name</Label>
                      <Input
                        id="contact-lastName"
                        placeholder="Martin"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="sophie@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="(514) 555-1234"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Book a Consultation</SelectItem>
                        <SelectItem value="pricing">Pricing Question</SelectItem>
                        <SelectItem value="services">Service Information</SelectItem>
                        <SelectItem value="insurance">Insurance & Financing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                  >
                    {formState === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">
                Find Us
              </h2>
              <p className="mb-8 text-muted-foreground">
                Conveniently located in downtown Montreal, near the McGill metro station.
              </p>

              {/* Map Container */}
              <div className="relative flex-1 min-h-[400px] overflow-hidden rounded-xl bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2937068439387!2d-73.57867492346873!3d45.50372297107579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a447a037e21%3A0x4c9e1eb8c4b8a0a5!2sRue%20Sherbrooke%20Ouest%2C%20Montr%C3%A9al%2C%20QC!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lumina Dental Studio Location"
                />
              </div>

              {/* Quick Info Below Map */}
              <div className="mt-6 rounded-xl bg-muted p-6">
                <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                  Getting Here
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-foreground">Metro:</span>
                    McGill station (Green Line) - 5 min walk
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-foreground">Parking:</span>
                    Underground parking available in building
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-foreground">Accessibility:</span>
                    Wheelchair accessible entrance and elevator
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onBookingClick={() => setIsBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
