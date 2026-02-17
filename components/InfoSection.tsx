'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function InfoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Image slides in from left
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      x: -80,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
    })

    // Card slides in from right with slight delay
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      x: 60,
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.25,
    })

    // Animate inner text lines staggered
    gsap.from('.info-line', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      delay: 0.4,
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      ref={sectionRef}
      id="info"
      className="relative bg-[#e8e4dc] py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-end justify-center">

          {/* Main image — large, with inner shadow */}
          <div
            ref={imageRef}
            className="relative w-full lg:w-[85%] rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src="/info.jpg"
              alt="Sai Carnation Farms entrance"
              className="w-full h-full object-cover"
            />
            {/* inner vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.25)] rounded-2xl pointer-events-none" />
          </div>

          {/* Overlapping text card */}
          <div
            ref={cardRef}
            className="absolute bottom-0 right-0 lg:right-0 w-[85%] sm:w-[60%] lg:w-[42%]
              bg-[#628B35] text-white rounded-2xl p-8 lg:p-10 shadow-2xl
              translate-y-8 lg:translate-y-0 lg:-translate-x-0"
          >
            <h3 className="info-line font-playfair text-2xl lg:text-3xl leading-snug mb-4">
              Live the Farm Life in Comfort
            </h3>
            <p className="info-line text-white/85 text-sm lg:text-base leading-relaxed">
              Welcome to Sai Carnation Farmhouse, a peaceful countryside retreat offering a perfect blend of comfort, nature, and privacy. Designed for relaxing stays and joyful celebrations, our farmhouse is ideal for families, friends, and private events. Surrounded by greenery and open spaces, we focus on creating memorable experiences with warm hospitality, modern amenities, and a calm natural atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}