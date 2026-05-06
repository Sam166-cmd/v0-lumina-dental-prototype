import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumina Dental Studio | Premium Cosmetic Dentistry in Montreal',
  description: 'Transform your smile with Montreal\'s top-rated cosmetic dental studio. Specializing in veneers, Invisalign, and teeth whitening. Book your free consultation today.',
  keywords: ['cosmetic dentistry', 'veneers', 'Invisalign', 'teeth whitening', 'Montreal dentist', 'smile makeover'],
  openGraph: {
    title: 'Lumina Dental Studio | Premium Cosmetic Dentistry in Montreal',
    description: 'Transform your smile with Montreal\'s top-rated cosmetic dental studio.',
    type: 'website',
    locale: 'en_CA',
  },
}

export const viewport = {
  themeColor: '#1A2238',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
