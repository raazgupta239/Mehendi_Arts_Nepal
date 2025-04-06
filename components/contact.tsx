"use client"

import type React from "react"

import { useState } from "react"
import { Facebook, Instagram, Send, MapPin, Phone, Mail } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number should be 10 digits"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }

  return (
    <section id="contact" className="py-20 bg-maroon-800 text-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-4 text-beige-100 max-w-2xl mx-auto">
            Have questions or ready to book your appointment? Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-maroon-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-maroon-600 border ${errors.name ? "border-red-500" : "border-maroon-500"} focus:outline-none focus:ring-2 focus:ring-gold-500`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-maroon-600 border ${errors.email ? "border-red-500" : "border-maroon-500"} focus:outline-none focus:ring-2 focus:ring-gold-500`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-maroon-600 border ${errors.phone ? "border-red-500" : "border-maroon-500"} focus:outline-none focus:ring-2 focus:ring-gold-500`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="mt-1 text-red-400 text-sm">{errors.phone}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full p-3 rounded-md bg-maroon-600 border ${errors.message ? "border-red-500" : "border-maroon-500"} focus:outline-none focus:ring-2 focus:ring-gold-500`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gold-500 hover:bg-gold-600 text-maroon-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-maroon-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2" size={18} />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-beige-50 mb-1">Our Location</h4>
                  <p className="text-beige-200">
                    Jarankhu, Kathmandu
                    <br />
                    Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-beige-50 mb-1">Phone</h4>
                  <p className="text-beige-200">+977 9843645698</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-gold-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-beige-50 mb-1">Email</h4>
                  <p className="text-beige-200">mehendiartsnepal@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-maroon-700 hover:bg-maroon-600 p-3 rounded-full transition-colors">
                  <Facebook className="text-gold-500" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="bg-maroon-700 hover:bg-maroon-600 p-3 rounded-full transition-colors">
                  <Instagram className="text-gold-500" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://wa.me/9779843645698" className="bg-maroon-700 hover:bg-maroon-600 p-3 rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold-500"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              <ul className="space-y-2 text-beige-200">
                <li className="flex justify-between">
                  <span>Sunday - Friday:</span>
                  <span>06:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>06:00 AM - 10:00 PM</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

