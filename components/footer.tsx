"use client"

import { Facebook, Instagram, ArrowUp } from "lucide-react"

interface FooterProps {
  onHomeClick: () => void
  onServicesClick: () => void
  onAboutClick: () => void
  onContactClick: () => void
}

export default function Footer({ onHomeClick, onServicesClick, onAboutClick, onContactClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-maroon-900 text-beige-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-xl font-bold text-gold-500 mb-4">MehendiArtsNepal</h3>
            <p className="mb-4">
              Bringing the ancient art of henna to life with passion, creativity, and cultural authenticity.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mehandiartsnepal" className="text-beige-100 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/mehendiartsnepal" className="text-beige-100 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-beige-100 hover:text-gold-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gold-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={onHomeClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onServicesClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={onAboutClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={onContactClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-gold-500 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={onServicesClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Bridal Henna
                </button>
              </li>
              <li>
                <button onClick={onServicesClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Party Henna
                </button>
              </li>
              <li>
                <button onClick={onServicesClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Festival Henna
                </button>
              </li>
              <li>
                <button onClick={onServicesClick} className="text-beige-100 hover:text-gold-500 transition-colors">
                  Custom Designs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-gold-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Jarankhu, Kathmandu, Nepal</li>
              <li>+977 9843645698</li>
              <li>raazgupta958@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-maroon-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} MehendiArtsNepal. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-maroon-800 hover:bg-maroon-700 text-gold-500 p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

