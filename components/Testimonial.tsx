'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    id: 0,
    name: 'Priya Sharma',
    role: 'Guest at Sai Carnation Farmhouse',
    image: '/user-1.jpg',
    quote:
      '"An unforgettable stay! The ambiance, cleanliness, and attention to detail were outstanding. Perfect place for parties and weekend relaxation."',
    rating: 5,
  },
  {
    id: 1,
    name: 'Ananya Mehta',
    role: 'Guest at Sai Carnation Farmhouse',
    image: '/user-2.jpg',
    quote:
      '"We hosted our family get-together here and it exceeded every expectation. The pool, lawns, and food service made it truly special."',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rhea Kapoor',
    role: 'Guest at Sai Carnation Farmhouse',
    image: '/user-3.jpg',
    quote:
      '"From the moment we arrived, we felt completely at home. The greenery, privacy, and warm hospitality made our trip absolutely memorable."',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goTo((active + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [active])

  const goTo = (index: number) => {
    if (animating || index === active) return
    setAnimating(true)

    // Animate out
    if (quoteRef.current && nameRef.current) {
      gsap.to([quoteRef.current, nameRef.current], {
        opacity: 0,
        y: -16,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setActive(index)
          // Animate in
          gsap.fromTo(
            [quoteRef.current, nameRef.current],
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power3.out',
              stagger: 0.08,
              onComplete: () => setAnimating(false),
            }
          )
        },
      })
    } else {
      setActive(index)
      setAnimating(false)
    }
  }

  // Entrance animation
  useEffect(() => {
    if (!sectionRef.current) return

    gsap.from('.testimonial-wrapper', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from('.testimonial-avatars', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const current = testimonials[active]

  return (
    <section
      ref={sectionRef}
      className="relative bg-emerald-950 py-14 lg:py-20 overflow-hidden"
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

        {/* Pill card */}
        <div className="testimonial-wrapper relative rounded-[60px] bg-emerald-700 px-8 md:px-16 pt-24 pb-14">

          {/* Floating avatars — sits half outside the pill top */}
          <div className="testimonial-avatars absolute -top-10 left-1/2 -translate-x-1/2 flex items-end justify-center gap-4">
            {testimonials.map((t, i) => {
              const isActive = i === active
              const isAdjacent = Math.abs(i - active) === 1 ||
                (active === 0 && i === testimonials.length - 1) ||
                (active === testimonials.length - 1 && i === 0)

              return (
                <button
                  key={t.id}
                  onClick={() => goTo(i)}
                  className="relative flex-shrink-0 focus:outline-none"
                  style={{
                    // Center avatar is larger
                    transform: isActive
                      ? 'scale(1.15) translateY(-6px)'
                      : 'scale(0.9) translateY(0px)',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    zIndex: isActive ? 10 : 5,
                  }}
                >
                  {/* Active ring */}
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{
                      boxShadow: isActive
                        ? '0 0 0 3px #fff, 0 0 0 6px rgba(255,255,255,0.4)'
                        : '0 0 0 2px rgba(255,255,255,0.15)',
                      borderRadius: '50%',
                    }}
                  />

                  {/* Avatar image */}
                  <div
                    className="rounded-full overflow-hidden transition-all duration-500"
                    style={{
                      width: isActive ? '80px' : '68px',
                      height: isActive ? '80px' : '68px',
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <div ref={quoteRef}>
            <p className="text-center text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-playfair italic mb-8">
              {current.quote}
            </p>
          </div>

          {/* Name */}
          <div ref={nameRef}>
            <p className="text-center text-white/80 text-base tracking-wide">
              — {current.role}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === active
                    ? 'rgba(255,255,255,0.9)'
                    : 'rgba(255,255,255,0.3)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}