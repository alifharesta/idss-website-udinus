import { useEffect,useState } from 'react';
import NavbarCp from '../components/LandingPage/NavbarCp'
import HeroSection from '../components/LandingPage/HeroSection'
import Footer from '../components/LandingPage/Footer'
import LatestNews from '../components/LandingPage/LatestNews';
import arrorwup from '../assets/landingpage/arrowup.png'

//button scroll
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-14">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-blue-600 hover:bg-blue-700  inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        <img src={arrorwup} className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};


export default function LandingPage() {
  return (
    <div>
    <NavbarCp />
    <HeroSection />
    <LatestNews />
    <Footer />
    <ScrollToTopButton />
    </div>
  )
}
