"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useState } from "react"

export default function SocialMedia() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    console.log("Newsletter subscription submitted", email)
    setEmail("")
    // Clear the input field or show a success message
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Connect With Me
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://www.instagram.com/benachanaphotography"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-pink-500 hover:text-pink-600"
          >
            <Instagram size={32} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/benachanaphotography"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-600 hover:text-blue-700"
          >
            <Facebook size={32} />
          </motion.a>
          <motion.a
            href="https://twitter.com/benachanaphoto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-400 hover:text-blue-500"
          >
            <Twitter size={32} />
          </motion.a>
        </div>
        <div className="max-w-md mx-auto px-4 sm:px-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
            Subscribe to My Newsletter
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white mb-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

