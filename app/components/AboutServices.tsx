"use client"

import { motion } from "framer-motion"
import { Camera, Users, Plane, User } from "lucide-react"

const services = [
  { icon: Camera, title: "Wedding Photography", description: "Capture your special day with stunning imagery." },
  {
    icon: Users,
    title: "Fashion Photography",
    description: "Bring your fashion ideas to life with professional shoots.",
  },
  { icon: Plane, title: "Travel Photography", description: "Document your adventures with breathtaking photos." },
  { icon: User, title: "Portrait Photography", description: "Create timeless portraits that tell your story." },
]

export default function AboutServices() {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me & My Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With over 10 years of experience, I specialize in capturing life's most precious moments. My mission is to
            create timeless images that tell your unique story.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

