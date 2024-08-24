import React from 'react'
import NavbarLP from '../components/LandingPage/NavbarLP'
import HeroSection from '../components/LandingPage/HeroSection'
import News from "../components/LandingPage/News";
import Footer from '../components/LandingPage/Footer'

export default function LandingPage() {
  return (
    <div>
    <NavbarLP />
    <HeroSection />
    <News />
    <Footer />
    </div>
  )
}
