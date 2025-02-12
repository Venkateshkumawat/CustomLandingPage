"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white z-50">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              BA Photography
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks scrollToSection={scrollToSection} />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg md:hidden pt-20 z-40"
            >
              <div className="flex flex-col items-center space-y-8 p-8">
                <NavLinks mobile scrollToSection={scrollToSection} />
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} mobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function NavLinks({
  mobile,
  scrollToSection,
}: {
  mobile?: boolean
  scrollToSection: (sectionId: string) => void
}) {
  const router = useRouter()
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "#portfolio", label: "Portfolio", section: true },
    { href: "#services", label: "Services", section: true },
    { href: "#contact", label: "Contact", section: true },
  ]

  return (
    <>
      {links.map((link) => {
        const isActive = router.pathname === link.href
        return (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: mobile ? -10 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={mobile ? "w-full" : ""}
          >
            {link.section ? (
              <button
                onClick={() => scrollToSection(link.href.substring(1))}
                className={`text-muted-foreground hover:text-white transition-colors duration-300 ${
                  mobile ? "text-2xl font-light w-full text-center py-2" : ""
                }`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                href={link.href}
                className={`text-muted-foreground hover:text-white transition-colors duration-300 ${
                  mobile ? "text-2xl font-light w-full text-center block py-2" : ""
                } ${isActive ? "text-white" : ""}`}
              >
                {link.label}
              </Link>
            )}
          </motion.div>
        )
      })}
    </>
  )
}

function ThemeToggle({
  darkMode,
  setDarkMode,
  mobile,
}: {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  mobile?: boolean
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-full bg-primary/20 text-white hover:bg-primary/30 transition-colors duration-300 ${
        mobile ? "w-full flex justify-center" : ""
      }`}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

