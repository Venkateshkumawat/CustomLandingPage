"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function BookingInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically send the form data to your server
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({ name: "", email: "", date: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Book a Shoot
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your special moments? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6 px-4 sm:px-0"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-muted-foreground">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 
              ${
                submitStatus === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : submitStatus === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-primary hover:bg-primary/90"
              } 
              text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>
                  {submitStatus === "success"
                    ? "Message Sent!"
                    : submitStatus === "error"
                      ? "Error Sending"
                      : "Send Message"}
                </span>
                <Send size={18} />
              </>
            )}
          </motion.button>

          {submitStatus === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 text-sm text-center"
            >
              Thank you! I'll get back to you soon.
            </motion.p>
          )}

          {submitStatus === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

