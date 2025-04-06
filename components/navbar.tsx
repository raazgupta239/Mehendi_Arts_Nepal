"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onHomeClick: () => void
  onServicesClick: () => void
  onAboutClick: () => void
  onContactClick: () => void
}

export default function Navbar({ onHomeClick, onServicesClick, onAboutClick, onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (callback: () => void) => {
    callback()
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-beige-50 shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-maroon-700 text-xl md:text-2xl font-bold cursor-pointer" onClick={onHomeClick}>
            MehendiArtsNepal
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={onHomeClick}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 transition-colors",
              activeSection === "home" && "font-semibold border-b-2 border-gold-500",
            )}
          >
            Home
          </button>
          <button
            onClick={onServicesClick}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 transition-colors",
              activeSection === "services" && "font-semibold border-b-2 border-gold-500",
            )}
          >
            Services
          </button>
          <button
            onClick={onAboutClick}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 transition-colors",
              activeSection === "about" && "font-semibold border-b-2 border-gold-500",
            )}
          >
            About Us
          </button>
          <button
            onClick={onContactClick}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 transition-colors",
              activeSection === "contact" && "font-semibold border-b-2 border-gold-500",
            )}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-maroon-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-beige-100 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-maroon-800" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6">
          <button
            onClick={() => handleNavClick(onHomeClick)}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 text-left py-2 border-b border-beige-200",
              activeSection === "home" && "font-semibold",
            )}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick(onServicesClick)}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 text-left py-2 border-b border-beige-200",
              activeSection === "services" && "font-semibold",
            )}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick(onAboutClick)}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 text-left py-2 border-b border-beige-200",
              activeSection === "about" && "font-semibold",
            )}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick(onContactClick)}
            className={cn(
              "text-maroon-800 hover:text-maroon-600 text-left py-2 border-b border-beige-200",
              activeSection === "contact" && "font-semibold",
            )}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Overlay for mobile navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </nav>
  )
}

