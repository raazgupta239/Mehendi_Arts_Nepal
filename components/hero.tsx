"use client"

import { ArrowRight } from "lucide-react"

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.7)",
        }}
      />
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige-50 mb-4">
            Exquisite Henna Art for Your Special Moments
          </h1>
          <p className="text-xl text-beige-100 mb-8">
            Traditional and contemporary henna designs crafted with passion and precision for weddings, celebrations,
            and personal adornment.
          </p>
          <button
            onClick={onContactClick}
            className="bg-gold-500 hover:bg-gold-600 text-maroon-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center group"
          >
            Book a Session
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

