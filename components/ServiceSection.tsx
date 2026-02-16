'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Weekend Staycation',
    description: 'Relax, unwind, and enjoy a peaceful escape from city life.',
    image: '/service-1.png',
  },
  {
    title: 'Corporate Events',
    description: 'Perfect venue for team building, meetings, and corporate gatherings.',
    image: '/service-1.png',
  },
  {
    title: 'Private Celebrations',
    description: 'Host unforgettable birthdays, anniversaries, and special occasions.',
    image: '/service-1.png',
  },
  {
    title: 'Wedding Functions',
    description: 'Beautiful outdoor setting for pre-wedding shoots and intimate ceremonies.',
    image: '/service-1.png',
  },
  {
    title: 'Family Gatherings',
    description: 'Spacious lawns and modern amenities for memorable family reunions.',
    image: '/service-1.png',
  },
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [autoScroll, setAutoScroll] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
    setAutoScroll(false)
  }

  // Auto scroll on mobile
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 1024) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          // Reset to start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Scroll right
          scrollRef.current.scrollTo({
            left: scrollLeft + 400,
            behavior: 'smooth',
          })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [autoScroll])

  useEffect(() => {
    checkScroll()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll)
      return () => scrollElement.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <section id="services" className="relative bg-zinc-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-playfair text-black mb-4">
              Experiences We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Whether you're looking for a peaceful weekend getaway, a venue for celebrations, 
              or a space for corporate events, we have the perfect experience for you.
            </p>
          </div>
          
          <button className="self-start lg:self-auto flex items-center gap-2 text-black hover:gap-3 transition-all duration-300 group">
            <span className="uppercase tracking-wider text-sm font-medium">View More</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          )}

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 w-[320px] lg:w-[380px] group cursor-pointer",
                  "transform transition-all duration-500 hover:scale-[1.02]"
                )}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair text-black mb-3 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll Indicators */}
          <div className="flex lg:hidden justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}