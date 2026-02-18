'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Heading word by word
    gsap.from('.cta-heading', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from('.cta-sub', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
    })

    gsap.from('.cta-btn', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      scale: 0.85,
      opacity: 0,
      duration: 0.7,
      ease: 'back.out(1.7)',
      delay: 0.4,
    })

    // Diamond ornament float
    gsap.to('.cta-diamond', {
      y: -10,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.4,
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/cta-image.jpg"
          alt="Farmhouse background"
          className="w-full h-full object-cover"
        />
        {/* Tinted green overlay */}
        <div className="absolute inset-0 bg-emerald-900/60" />
      </div>

      {/* Vertical line + diamonds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <div className="w-px h-16 bg-white/30" />
        <div className="cta-diamond w-2 h-2 bg-white/80 rotate-45 mt-1" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <div className="cta-diamond w-2 h-2 bg-white/80 rotate-45 mb-1" />
        <div className="w-px h-16 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-24">
        <h2 className="cta-heading font-playfair text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto">
          A Peaceful Escape Into Nature
        </h2>
        <p className="cta-sub text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience comfort, privacy, and open green spaces—perfect for weekend
          getaways, family stays, and private celebrations.
        </p>
        <button
          onClick={() => {
            const phoneNumber = '919595524424'
            const message = 'Hi, I would like to know more and book your farmhouse services.'
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
            window.open(whatsappUrl, '_blank')
          }}
          className="cta-btn group relative inline-flex items-center gap-3 border-2 border-white text-white
            px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium
            hover:bg-white hover:text-emerald-900 transition-all duration-300 overflow-hidden"
        >
          Book Your Stay
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
        </button>
      </div>
    </section>
  )
}