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
  '/about-1.png',
  '/about-1.png',
]

export default function About() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  // Section takeover animation on scroll
//   useEffect(() => {
//     if (!sectionRef.current) return

//     const section = sectionRef.current

//     // Pin the about section and animate it taking over
//     gsap.to(section, {
//       scrollTrigger: {
//         trigger: section,
//         start: 'top bottom',
//         end: 'top top',
//         scrub: 1,
//         onUpdate: (self) => {
//           const progress = self.progress
//           // Animate section sliding up and taking over
//           gsap.to(section, {
//             y: -100 * (1 - progress),
//             ease: 'none',
//             duration: 0,
//           })
//         },
//       },
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('.counter')
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.textContent = Math.floor(current).toString()
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target.toString()
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter()
              observer.disconnect()
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(counter)
    })
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900 py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left - Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-5xl lg:text-6xl font-playfair mb-6">
              About Us
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-white/90">
              Sai Carnation Farmhouse is a premium countryside getaway designed for comfort, privacy, and peace. Located away from city noise, our farmhouse is ideal for families, friends, corporate gatherings, and private celebrations. With spacious lawns, modern amenities, and a calm natural setting, every stay here feels special.
            </p>
            <button className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-emerald-900 transition-all duration-300 rounded-sm uppercase tracking-wider text-sm">
              Know More About Us
            </button>
          </div>

          {/* Right - 3D Image Stack */}
          <div className="relative">
            <div className="relative h-96 w-full perspective-1000">
              {images.map((image, index) => {
                // Calculate position in stack (0 = front, 2 = back)
                const position = (index - active + images.length) % images.length
                
                // Back images are tilted and stacked behind
                const rotation = position === 0 ? 0 : position * 3 // Tilt back images
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
                      alt={`Farmhouse view ${index + 1}`}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-yellow-500"
                    />
                  </div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          <div className="text-white">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              <span className="counter" data-target="14">0</span>+
            </div>
            <p className="text-lg text-white/80">Years of Experience</p>
          </div>
          
          <div className="text-white">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              <span className="counter" data-target="8">0</span>k
            </div>
            <p className="text-lg text-white/80">Happy Guests Hosted</p>
          </div>
          
          <div className="text-white">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              <span className="counter" data-target="20">0</span>+
            </div>
            <p className="text-lg text-white/80">Private Events & Celebrations</p>
          </div>
          
          <div className="text-white">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              <span className="counter" data-target="15">0</span>+
            </div>
            <p className="text-lg text-white/80">Premium Amenities</p>
          </div>
        </div>
      </div>
    </section>
  )
}