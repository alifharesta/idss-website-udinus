import React from 'react'
import NavbarCp from '../components/LandingPage/NavbarCp'
import HeroSection from '../components/LandingPage/HeroSection'
import Footer from '../components/LandingPage/Footer'
import LatestNews from '../components/LandingPage/LatestNews';

export default function LandingPage() {
  return (
    <div>
    <NavbarCp />
    <HeroSection />
    <LatestNews />
    <Footer />
    </div>
  )
}
