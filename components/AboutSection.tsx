// 'use client'

// import { useState, useEffect } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const images = [
//   '/about-1.png',
//   '/about-1.png',
//   '/about-1.png',
// ]

// export default function About() {
//   const [active, setActive] = useState(0)

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % images.length)
//   }

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const isActive = (index: number) => {
//     return index === active
//   }

//   const randomRotateY = () => {
//     return Math.floor(Math.random() * 21) - 10
//   }

//   // Auto scroll counter
//   useEffect(() => {
//     const counters = document.querySelectorAll('.counter')
    
//     counters.forEach((counter) => {
//       const target = parseInt(counter.getAttribute('data-target') || '0')
//       const duration = 2000
//       const increment = target / (duration / 16)
//       let current = 0

//       const updateCounter = () => {
//         current += increment
//         if (current < target) {
//           counter.textContent = Math.floor(current).toString()
//           requestAnimationFrame(updateCounter)
//         } else {
//           counter.textContent = target.toString()
//         }
//       }

//       // Intersection Observer to trigger animation when in view
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               updateCounter()
//               observer.disconnect()
//             }
//           })
//         },
//         { threshold: 0.5 }
//       )

//       observer.observe(counter)
//     })
//   }, [])

//   return (
//     <section id="about" className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
//           {/* Left - Text Content */}
//           <div className="text-white space-y-6">
//             <h2 className="text-5xl lg:text-6xl font-playfair mb-6">
//               About Us
//             </h2>
//             <p className="text-lg lg:text-xl leading-relaxed text-white/90">
//               Sai Carnation Farmhouse is a premium countryside getaway designed for comfort, privacy, and peace. Located away from city noise, our farmhouse is ideal for families, friends, corporate gatherings, and private celebrations. With spacious lawns, modern amenities, and a calm natural setting, every stay here feels special.
//             </p>
//             <button className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-emerald-900 transition-all duration-300 rounded-sm uppercase tracking-wider text-sm">
//               Know More About Us
//             </button>
//           </div>

//           {/* Right - 3D Image Carousel */}
//           <div className="relative">
//             <div className="relative h-96 w-full">
//               {images.map((image, index) => {
//                 const rotation = isActive(index) ? 0 : randomRotateY()
//                 const zIndex = isActive(index) ? 40 : images.length + 2 - index
//                 const opacity = isActive(index) ? 1 : 0.7
//                 const scale = isActive(index) ? 1 : 0.95
//                 const zTranslate = isActive(index) ? 0 : -100

//                 return (
//                   <div
//                     key={index}
//                     className="absolute inset-0 transition-all duration-500 ease-out origin-bottom"
//                     style={{
//                       opacity,
//                       transform: `
//                         scale(${scale}) 
//                         translateZ(${zTranslate}px) 
//                         rotateY(${rotation}deg)
//                         ${isActive(index) ? 'translateY(0)' : 'translateY(0)'}
//                       `,
//                       zIndex,
//                     }}
//                   >
//                     <img
//                       src={image}
//                       alt={`Farmhouse view ${index + 1}`}
//                       className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-yellow-500"
//                     />
//                   </div>
//                 )
//               })}
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex gap-4 justify-center mt-8">
//               <button
//                 onClick={handlePrev}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-x-1" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="14">0</span>+
//             </div>
//             <p className="text-lg text-white/80">Years of Experience</p>
//           </div>
          
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="8">0</span>k
//             </div>
//             <p className="text-lg text-white/80">Happy Guests Hosted</p>
//           </div>
          
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="20">0</span>+
//             </div>
//             <p className="text-lg text-white/80">Private Events & Celebrations</p>
//           </div>
          
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="15">0</span>+
//             </div>
//             <p className="text-lg text-white/80">Premium Amenities</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const images = [
//   '/about-1.png',
//   '/about-1.png',
//   '/about-1.png',
// ]

// export default function About() {
//   const [active, setActive] = useState(0)
//   const sectionRef = useRef<HTMLElement>(null)

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % images.length)
//   }

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const isActive = (index: number) => {
//     return index === active
//   }

//   // Section takeover animation on scroll
// //   useEffect(() => {
// //     if (!sectionRef.current) return

// //     const section = sectionRef.current

// //     // Pin the about section and animate it taking over
// //     gsap.to(section, {
// //       scrollTrigger: {
// //         trigger: section,
// //         start: 'top bottom',
// //         end: 'top top',
// //         scrub: 1,
// //         onUpdate: (self) => {
// //           const progress = self.progress
// //           // Animate section sliding up and taking over
// //           gsap.to(section, {
// //             y: -100 * (1 - progress),
// //             ease: 'none',
// //             duration: 0,
// //           })
// //         },
// //       },
// //     })

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
// //     }
// //   }, [])

//   // Counter animation
//   useEffect(() => {
//     const counters = document.querySelectorAll('.counter')
    
//     counters.forEach((counter) => {
//       const target = parseInt(counter.getAttribute('data-target') || '0')
//       const duration = 2000
//       const increment = target / (duration / 16)
//       let current = 0

//       const updateCounter = () => {
//         current += increment
//         if (current < target) {
//           counter.textContent = Math.floor(current).toString()
//           requestAnimationFrame(updateCounter)
//         } else {
//           counter.textContent = target.toString()
//         }
//       }

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               updateCounter()
//               observer.disconnect()
//             }
//           })
//         },
//         { threshold: 0.5 }
//       )

//       observer.observe(counter)
//     })
//   }, [])

//   return (
//     <section 
//       id="about" 
//       ref={sectionRef}
//       className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900 py-20 px-4 relative z-10"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
//           {/* Left - Text Content */}
//           <div className="text-white space-y-6">
//             <h2 className="text-5xl lg:text-6xl font-playfair mb-6">
//               About Us
//             </h2>
//             <p className="text-lg lg:text-xl leading-relaxed text-white/90">
//               Sai Carnation Farmhouse is a premium countryside getaway designed for comfort, privacy, and peace. Located away from city noise, our farmhouse is ideal for families, friends, corporate gatherings, and private celebrations. With spacious lawns, modern amenities, and a calm natural setting, every stay here feels special.
//             </p>
//             <button className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-emerald-900 transition-all duration-300 rounded-sm uppercase tracking-wider text-sm">
//               Know More About Us
//             </button>
//           </div>

//           {/* Right - 3D Image Stack */}
//           <div className="relative">
//             <div className="relative h-96 w-full perspective-1000">
//               {images.map((image, index) => {
//                 // Calculate position in stack (0 = front, 2 = back)
//                 const position = (index - active + images.length) % images.length
                
//                 // Back images are tilted and stacked behind
//                 const rotation = position === 0 ? 0 : position * 3 // Tilt back images
//                 const zIndex = images.length - position
//                 const opacity = position === 0 ? 1 : 0.6
//                 const scale = position === 0 ? 1 : 0.9 - (position * 0.05)
//                 const translateZ = position === 0 ? 0 : -50 * position
//                 const translateY = position === 0 ? 0 : position * 10
//                 const translateX = position === 0 ? 0 : position * 15

//                 return (
//                   <div
//                     key={index}
//                     className="absolute inset-0 transition-all duration-700 ease-out"
//                     style={{
//                       opacity,
//                       transform: `
//                         perspective(1000px)
//                         scale(${scale}) 
//                         translateZ(${translateZ}px)
//                         translateY(${translateY}px)
//                         translateX(${translateX}px)
//                         rotateY(${rotation}deg)
//                       `,
//                       zIndex,
//                       transformStyle: 'preserve-3d',
//                     }}
//                   >
//                     <img
//                       src={image}
//                       alt={`Farmhouse view ${index + 1}`}
//                       className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-yellow-500"
//                     />
//                   </div>
//                 )
//               })}
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex gap-4 justify-center mt-8">
//               <button
//                 onClick={handlePrev}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-x-1" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="14">0</span>+
//             </div>
//             <p className="text-lg text-white/80">Years of Experience</p>
//           </div>
          
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="8">0</span>k
//             </div>
//             <p className="text-lg text-white/80">Happy Guests Hosted</p>
//           </div>
          
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="20">0</span>+
//             </div>
//             <p className="text-lg text-white/80">Private Events & Celebrations</p>
//           </div>
          
//           <div className="text-white">
//             <div className="text-5xl lg:text-6xl font-bold mb-2">
//               <span className="counter" data-target="15">0</span>+
//             </div>
//             <p className="text-lg text-white/80">Premium Amenities</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const images = [
  '/about-1.png',
  '/service-1.png',
  '/amenities-1.jpg',
]

const stats = [
  { value: 14, suffix: '+', label: 'Years of Experience' },
  { value: 8,  suffix: 'k', label: 'Happy Guests Hosted' },
  { value: 20, suffix: '+', label: 'Private Events & Celebrations' },
  { value: 15, suffix: '+', label: 'Premium Amenities' },
]

export default function About() {
  const [active, setActive] = useState(0)

  const sectionRef   = useRef<HTMLElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const lineRef      = useRef<HTMLDivElement>(null)
  const paraRef      = useRef<HTMLParagraphElement>(null)
  const btnRef       = useRef<HTMLButtonElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const arrowsRef    = useRef<HTMLDivElement>(null)
  const statsRef     = useRef<HTMLDivElement>(null)

  const handleNext = () => setActive((p) => (p + 1) % images.length)
  const handlePrev = () => setActive((p) => (p - 1 + images.length) % images.length)

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out' },
    })

    /* 1. Thin rule shoots in from left */
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.6 }
    )

    /* 2. Heading chars cascade up */
    tl.from(
      headingRef.current,
      { y: 70, opacity: 0, duration: 0.85, ease: 'power4.out' },
      '-=0.2'
    )

    /* 3. Paragraph fades + rises */
    tl.from(
      paraRef.current,
      { y: 40, opacity: 0, duration: 0.75 },
      '-=0.45'
    )

    /* 4. Button pops in */
    tl.from(
      btnRef.current,
      { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.35'
    )

    /* 5. Image stack slides in from right */
    tl.from(
      imageWrapRef.current,
      { x: 100, opacity: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.7'
    )

    /* 6. Arrows fade up */
    tl.from(
      arrowsRef.current,
      { y: 20, opacity: 0, duration: 0.4 },
      '-=0.3'
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  /* ── Stat cards — own ScrollTrigger so they fire when visible ── */
  useEffect(() => {
    const cards = gsap.utils.toArray('.stat-card')
    if (!cards.length) return

    gsap.set(cards, { y: 60, opacity: 0 })

    ScrollTrigger.create({
      trigger: '.stat-card',
      start: 'top 88%',
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.13,
          ease: 'power3.out',
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  /* ── Counter animation triggered by IntersectionObserver ── */
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.counter')

    counters.forEach((el) => {
      const target = parseInt(el.dataset.target || '0', 10)
      let started = false

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || started) return
          started = true
          obs.disconnect()

          const duration = 1800
          const increment = target / (duration / 16)
          let current = 0

          const tick = () => {
            current += increment
            if (current < target) {
              el.textContent = Math.floor(current).toString()
              requestAnimationFrame(tick)
            } else {
              el.textContent = target.toString()
            }
          }
          tick()
        },
        { threshold: 0.6 }
      )
      obs.observe(el)
    })
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900 py-24 px-4 overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center mb-24">

          {/* LEFT — Text */}
          <div className="text-white space-y-7">

            {/* Thin rule */}
            <div
              ref={lineRef}
              className="w-16 h-px bg-emerald-400 origin-left"
            />

            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-5xl lg:text-6xl xl:text-7xl font-playfair leading-tight"
            >
              About Us
            </h2>

            {/* Body */}
            <p
              ref={paraRef}
              className="text-base lg:text-lg leading-relaxed text-white/80 max-w-lg"
            >
              Sai Carnation Farmhouse is a premium countryside getaway designed
              for comfort, privacy, and peace. Located away from city noise, our
              farmhouse is ideal for families, friends, corporate gatherings, and
              private celebrations. With spacious lawns, modern amenities, and a
              calm natural setting, every stay here feels special.
            </p>

            {/* CTA */}
            <button
              ref={btnRef}
              className="group relative overflow-hidden mt-4 px-8 py-3 border-2 border-white
                text-white text-sm uppercase tracking-widest
                hover:text-emerald-900 transition-colors duration-300"
            >
                <a
                  href="https://wa.me/919595524424?text=Hi%20Sai%20Carnation%20Farmhouse%2C%20I%20would%20like%20to%20know%20more%20about%20your%20premium%20farmhouse%20services%20and%20amenities.%20Please%20share%20more%20details.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                >
                  Know More About Us
                </a>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </button>
          </div>

          {/* RIGHT — 3-D Image Stack */}
          <div className="relative">
            <div
              ref={imageWrapRef}
              className="relative h-96 w-full"
              style={{ perspective: '1000px' }}
            >
              {images.map((image, index) => {
                const pos   = (index - active + images.length) % images.length
                const isTop = pos === 0

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      zIndex:    images.length - pos,
                      opacity:   isTop ? 1 : 0.55,
                      transform: isTop
                        ? 'perspective(1000px) scale(1) translateX(0) translateY(0) rotateY(0deg)'
                        : `perspective(1000px) scale(${0.92 - pos * 0.04})
                           translateX(${pos * 18}px)
                           translateY(${pos * 12}px)
                           rotateY(${pos * 4}deg)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Farmhouse view ${index + 1}`}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-yellow-400/80"
                    />
                  </div>
                )
              })}
            </div>

            {/* Arrows */}
            <div
              ref={arrowsRef}
              className="flex gap-4 justify-center mt-8"
            >
              {[
                { fn: handlePrev, icon: <ChevronLeft  className="h-5 w-5" />, label: 'Prev', dir: '-' },
                { fn: handleNext, icon: <ChevronRight className="h-5 w-5" />, label: 'Next', dir: ''  },
              ].map(({ fn, icon, label, dir }) => (
                <button
                  key={label}
                  onClick={fn}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full
                    border border-white/30 bg-white/10 text-white
                    hover:bg-white hover:text-emerald-900
                    transition-all duration-300 backdrop-blur-sm"
                >
                  <span className={`transition-transform duration-300 ${dir === '-' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}>
                    {icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={i}
              className="stat-card group relative text-center bg-white/5 hover:bg-white/10
                border border-white/10 hover:border-emerald-400/40
                rounded-2xl p-6 lg:p-8
                transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/50"
            >
              {/* Glow dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-4xl lg:text-6xl font-bold text-white mb-2 tabular-nums">
                <span className="counter" data-target={value}>0</span>
                <span>{suffix}</span>
              </div>
              <p className="text-sm lg:text-base text-white/60 leading-snug">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}