'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, BedDouble, PartyPopper, Waves, UtensilsCrossed } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Amenity {
  id: number
  title: string
  description: string
  image: string
  icon: React.ReactNode
}

const amenities: Amenity[] = [
  {
    id: 1,
    title: 'Stay & Comfort',
    description:
      'Spacious, fully furnished rooms designed for relaxation, privacy, and comfort—perfect for families and groups.',
    image: '/amenities-1.jpg',
    icon: <BedDouble className="w-8 h-8 text-white/80" />,
  },
  {
    id: 2,
    title: 'Events & Celebrations',
    description:
      'Host birthdays, private parties, family get-togethers, and small celebrations in a serene farmhouse setting with lawn & pool access.',
    image: '/amenities-1.jpg',
    icon: <PartyPopper className="w-8 h-8 text-white/80" />,
  },
  {
    id: 3,
    title: 'Leisure & Outdoor Fun',
    description:
      'Enjoy a private swimming pool, lush green lawns, outdoor seating, and open-air vibes—ideal for day & night enjoyment.',
    image: '/amenities-1.jpg',
    icon: <Waves className="w-8 h-8 text-white/80" />,
  },
  {
    id: 4,
    title: 'Food & BBQ ( On Request )',
    description:
      'Fresh, hygienic food options and BBQ setups available to elevate your stay and celebrations.',
    image: '/amenities-1.jpg',
    icon: <UtensilsCrossed className="w-8 h-8 text-white/80" />,
  },
]

export default function Amenities() {
  const [hovered, setHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Entrance animation for rows
  useEffect(() => {
    if (!sectionRef.current) return

    gsap.from('.amenity-header', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.amenity-row', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power3.out',
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative bg-emerald-950 py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="amenity-header text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-playfair text-white mb-4">
            Amenities
          </h2>
          <p className="text-white/60 text-lg">
            Every comfort designed for a peaceful & memorable stay
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="space-y-3">
          {amenities.map((amenity) => {
            const isHovered = hovered === amenity.id

            return (
              <div
                key={amenity.id}
                className="amenity-row"
                onMouseEnter={() => setHovered(amenity.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Row Container */}
                <div
                  className={`
                    relative rounded-2xl border cursor-pointer
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isHovered
                      ? 'border-emerald-600/60 bg-emerald-900/80'
                      : 'border-white/10 bg-transparent hover:border-white/20'
                    }
                  `}
                  style={{
                    height: isHovered ? '200px' : '90px',
                  }}
                >
                  <div className="absolute inset-0 flex items-center px-6 lg:px-10 gap-6">

                    {/* Icon — only visible when hovered */}
                    <div
                      className={`
                        flex-shrink-0 transition-all duration-500
                        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75 w-0 overflow-hidden'}
                      `}
                    >
                      {amenity.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`
                          font-playfair transition-all duration-300
                          ${isHovered
                            ? 'text-2xl lg:text-3xl text-white mb-2'
                            : 'text-xl lg:text-2xl text-white/90'
                          }
                        `}
                      >
                        {amenity.title}
                      </h3>

                      {/* Description — only visible when hovered */}
                      <p
                        className={`
                          text-white/70 text-sm lg:text-base leading-relaxed
                          transition-all duration-500 max-w-xl
                          ${isHovered
                            ? 'opacity-100 max-h-24 translate-y-0'
                            : 'opacity-0 max-h-0 -translate-y-2 overflow-hidden'
                          }
                        `}
                      >
                        {amenity.description}
                      </p>
                    </div>

                    {/* Right side: Image + Arrow */}
                    <div className="flex items-center gap-6 flex-shrink-0 ml-auto">

                      {/* Oval image — only visible when hovered */}
                      <div
                        className={`
                          transition-all duration-500 overflow-hidden flex-shrink-0
                          ${isHovered
                            ? 'opacity-100 scale-100 w-72 h-40 rounded-[80px]'
                            : 'opacity-0 scale-90 w-0 h-0 rounded-[80px]'
                          }
                        `}
                      >
                        <img
                          src={amenity.image}
                          alt={amenity.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Arrow Button */}
                      <button
                        className={`
                          flex-shrink-0 flex items-center justify-center
                          w-12 h-12 rounded-full border transition-all duration-300
                          ${isHovered
                            ? 'border-white bg-white/10 hover:bg-white hover:text-emerald-900'
                            : 'border-white/30 bg-transparent'
                          }
                          text-white
                        `}
                        aria-label={`Learn more about ${amenity.title}`}
                      >
                        <ArrowRight
                          className={`
                            w-5 h-5 transition-transform duration-300
                            ${isHovered ? 'translate-x-0.5' : ''}
                          `}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Bottom divider line */}
                  <div
                    className={`
                      absolute bottom-0 left-6 right-6 h-px
                      transition-opacity duration-300
                      ${isHovered ? 'opacity-0' : 'opacity-20 bg-white'}
                    `}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}