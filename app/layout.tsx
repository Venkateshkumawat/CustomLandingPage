import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ben Achana Photography | Visual Storytelling Through the Lens",
  description:
    "Experience the art of visual storytelling through the lens of Ben Achana. Specializing in wedding, fashion, travel, and portrait photography.",
  keywords:
    "photography, visual arts, wedding photographer, fashion photography, travel photography, portrait photographer",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"



import './globals.css'