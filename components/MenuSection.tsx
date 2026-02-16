'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return

    // Animate on scroll into view
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br bg-[#628B35] py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Text Content */}
          <div ref={textRef} className="text-white space-y-6 lg:space-y-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-playfair leading-tight">
              Always fresh. Always served with care.
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-white/90">
              Our meals are made on request and can be customized for parties, events, 
              and group bookings—so every guest enjoys comfort food in a peaceful farmhouse setting.
            </p>
            <button className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-green-700 transition-all duration-300 rounded-sm uppercase tracking-wider text-sm font-medium">
              View Menu
            </button>
          </div>

          {/* Right - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative  overflow-hidden">
              <img
                src="/menu-image.png"
                alt="Fresh farmhouse meals"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  )
}