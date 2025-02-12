"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Bride",
    content:
      "John captured our wedding day perfectly. The photos are absolutely stunning and bring back such wonderful memories.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Fashion Designer",
    content:
      "Working with John was a pleasure. He has an incredible eye for detail and really brought my designs to life.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Travel Blogger",
    content:
      "John's travel photography is breathtaking. He has a unique ability to capture the essence of a place in his images.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">What Clients Say</h2>
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              {testimonials[currentTestimonial].content}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <p className="font-semibold text-gray-800 dark:text-white">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
              </div>
              <div className="flex">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

