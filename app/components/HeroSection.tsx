"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-accent opacity-90" />
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Professional photographer in action"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-40"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-text to-accent-light bg-clip-text text-transparent animate-gradient">
            Ben Achana
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-accent-lighter font-light tracking-wide">
            Photography & Visual Arts
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted leading-relaxed">
            Crafting Visual Stories Through the Lens of Imagination
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-medium tracking-wide hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-accent/50 text-center"
            >
              Book a Shoot
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent-light text-white rounded-full font-medium tracking-wide hover:bg-accent-light/10 transition-all duration-300 text-center"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

