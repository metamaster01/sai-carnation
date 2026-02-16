'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Simple fade-in animation
    const elements = document.querySelectorAll('.hero-animate')
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0')
      }, 300 + index * 150)
    })
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Properly sized to cover entire viewport */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-125"
        >
          <source src="/farmhouse-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        <h1 className="hero-animate opacity-0 translate-y-8 transition-all duration-700 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-playfair text-white mb-2">
          Sai Carnation
        </h1>
        <h2 className="hero-animate opacity-0 translate-y-8 transition-all duration-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-greatVibes italic text-white mb-6">
          Farmhouse
        </h2>
        <p className="hero-animate opacity-0 translate-y-8 transition-all duration-700 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed">
          A perfect escape into nature – luxury, comfort & calm.
        </p>
        <button
          onClick={() => scrollTo('contact')}
          className="hero-animate opacity-0 translate-y-8 transition-all duration-700 px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          Book Your Stay
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}