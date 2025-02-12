import HeroSection from "./components/HeroSection"
import AboutServices from "./components/AboutServices"
import PortfolioGallery from "./components/PortfolioGallery"
import Testimonials from "./components/Testimonials"
import BookingInquiry from "./components/BookingInquiry"
import SocialMedia from "./components/SocialMedia"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutServices />
      <PortfolioGallery />
      <Testimonials />
      <BookingInquiry />
      <SocialMedia />
    </>
  )
}

