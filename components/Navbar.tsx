'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-emerald-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left - Menu Button (Desktop) */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-white hover:text-emerald-300 transition-colors"
              >
                <Menu className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">Menu</span>
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-center">
              <button 
                onClick={() => scrollTo('hero')}
                className="text-white font-greatVibes italic text-3xl lg:text-5xl hover:text-emerald-300 transition-colors"
              >
                Sai Carnation
              </button>
            </div>

            {/* Right - Contact (Desktop) / Menu (Mobile) */}
            <div className="flex items-center gap-4 border border-white rounded-full px-4 py-2">
              <a
                href="tel:+919595524424"
                className="hidden lg:flex items-center gap-2 text-white hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-4 h-4 " />
                <span className="text-sm">+91 9595 524 424</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown Menu */}
        <div className={`hidden lg:block overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}>
          <div className="bg-emerald-950/95 backdrop-blur-sm border-t border-emerald-800/30">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-5 gap-4">
                <button
                  onClick={() => scrollTo('hero')}
                  className="text-left text-white hover:text-emerald-300 transition-colors text-sm uppercase tracking-wider"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-left text-white hover:text-emerald-300 transition-colors text-sm uppercase tracking-wider"
                >
                  About
                </button>
                <button
                  onClick={() => scrollTo('services')}
                  className="text-left text-white hover:text-emerald-300 transition-colors text-sm uppercase tracking-wider"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollTo('amenities')}
                  className="text-left text-white hover:text-emerald-300 transition-colors text-sm uppercase tracking-wider"
                >
                  Amenities
                </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-sm uppercase tracking-wider transition-colors"
              >
                Book Your Stay
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-emerald-950/98 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollTo('hero')}
              className="text-white text-2xl uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-white text-2xl uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-white text-2xl uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('amenities')}
              className="text-white text-2xl uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-lg uppercase tracking-wider transition-colors"
            >
              Book Your Stay
            </button>
            
            <a
              href="tel:+919595524424"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mt-8"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 9595 524 424</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}