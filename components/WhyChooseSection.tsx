'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const images = [
  '/image-1.jpg',
  '/image-2.jpg',
  '/image-4.jpg',
  '/image-9.jpg',
  '/image-10.jpg',
  '/image-11.jpg',
]

const reasons = [
  {
    icon: '🌿',
    text: 'Spacious & Green Surroundings',
  },
  {
    icon: '🏡',
    text: 'Fully Furnished Luxury Farmhouse',
  },
  {
    icon: '🎉',
    text: 'Ideal for Parties & Get-togethers',
  },
  {
    icon: '🏊',
    text: 'Swimming Pool & Lawn Area',
  },
  {
    icon: '🪑',
    text: 'Outdoor Seating & BBQ Space',
  },
  {
    icon: '🚗',
    text: 'Easy Access & Parking Available',
  },
]

export default function WhyChoose() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length)
  }

  // Animate reasons list on scroll
  useEffect(() => {
    if (!sectionRef.current) return

    gsap.from('.reason-item', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - 3D Image Stack with Auto-rotation */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-96 w-full perspective-1000">
              {images.map((image, index) => {
                const position = (index - active + images.length) % images.length
                const rotation = position === 0 ? 0 : position * 3
                const zIndex = images.length - position
                const opacity = position === 0 ? 1 : 0.6
                const scale = position === 0 ? 1 : 0.9 - (position * 0.05)
                const translateZ = position === 0 ? 0 : -50 * position
                const translateY = position === 0 ? 0 : position * 10
                const translateX = position === 0 ? 0 : position * 15

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      opacity,
                      transform: `
                        perspective(1000px)
                        scale(${scale}) 
                        translateZ(${translateZ}px)
                        translateY(${translateY}px)
                        translateX(${translateX}px)
                        rotateY(${rotation}deg)
                      `,
                      zIndex,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Farmhouse feature ${index + 1}`}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                    />
                  </div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200 transition-all duration-300 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200 transition-all duration-300 group"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-playfair text-black leading-tight">
              Why Choose Sai Carnation Farmhouse
            </h2>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="reason-item flex items-center gap-4 group"
                >
                  <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </span>
                  <p className="text-lg lg:text-xl text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}