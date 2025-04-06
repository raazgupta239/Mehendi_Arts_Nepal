"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Bridal Henna",
    description:
      "Elaborate and intricate designs for the bride's special day. Traditional and modern patterns available.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Party Henna",
    description: "Quick and beautiful designs for parties, celebrations and special events.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Festival Henna",
    description: "Celebrate festivals with traditional and symbolic henna patterns that bring joy and good fortune.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Custom Designs",
    description: "Personalized henna art created just for you, based on your preferences and style.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Group Sessions",
    description: "Perfect for parties and events. Discounted rates for groups of 5 or more.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Henna Training",
    description: "Learn the art of henna application with our beginner to advanced training sessions.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-4 text-maroon-700 max-w-2xl mx-auto">
            Discover our range of henna services, each crafted with care and artistic excellence to make your moments
            special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-beige-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(service.image)}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-maroon-800 mb-2">{service.title}</h3>
                <p className="text-maroon-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged service"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}

