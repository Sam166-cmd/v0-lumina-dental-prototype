"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onBookingClick: () => void
  variant?: "home" | "page"
}

export function Header({ onBookingClick, variant = "home" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const homeNavLinks = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Before & After" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const pageNavLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#results", label: "Before & After" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const navLinks = variant === "home" ? homeNavLinks : pageNavLinks

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="font-serif text-lg font-bold text-primary-foreground">L</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Lumina Dental
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+15145551234"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              (514) 555-1234
            </a>
            <Button
              onClick={onBookingClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-card md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+15145551234"
                className="flex items-center gap-2 text-base font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                (514) 555-1234
              </a>
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onBookingClick()
                }}
                className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
