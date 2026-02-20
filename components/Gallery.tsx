'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GalleryItem {
  id: number
  type: 'image' | 'video'
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'large' | 'normal'
}

const galleryItems: GalleryItem[] = [
  { id: 1, type: 'image', src: '/image-3.jpg', alt: 'Farmhouse exterior', span: 'large' },
  { id: 2, type: 'video', src: '/gallery-video-1.mp4', alt: 'Pool area video', span: 'normal' },
  { id: 3, type: 'image', src: '/image-5.jpg', alt: 'Green lawns', span: 'tall' },
  { id: 4, type: 'image', src: '/image-13.jpg', alt: 'Dining area', span: 'normal' },
  { id: 5, type: 'image', src: '/image-11.jpg', alt: 'Pool deck', span: 'wide' },
  { id: 6, type: 'video', src: '/gallery-video-2.mp4', alt: 'Garden walkthrough', span: 'normal' },
  { id: 7, type: 'image', src: '/image-12.jpg', alt: 'PLayground area', span: 'normal' },
  { id: 8, type: 'image', src: '/image-7.jpg', alt: 'Outdoor seating', span: 'tall' },
  { id: 9, type: 'image', src: '/image-2.jpg', alt: 'Bedroom suite', span: 'normal' },
  { id: 10, type: 'image', src: '/image-16.jpg', alt: 'Events Lawn', span: 'wide' },
  { id: 11, type: 'video', src: '/gallery-video-3.mp4', alt: 'Sunset timelapse', span: 'normal' },
  { id: 12, type: 'image', src: '/image17.jpg', alt: 'Interior living', span: 'normal' },
  { id: 13, type: 'image', src: '/image-9.jpg', alt: 'Fun & Activity area', span: 'normal' },
]

export default function Gallery() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map())

  // Track cursor position for custom play button
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    if (hoveredVideo !== null) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [hoveredVideo])

  // Handle video hover play/pause
  const handleVideoHover = (id: number, isHovering: boolean) => {
    const video = videoRefs.current.get(id)
    if (!video) return

    if (isHovering) {
      setHoveredVideo(id)
      video.play().catch(() => {})
    } else {
      setHoveredVideo(null)
      video.pause()
      video.currentTime = 0
    }
  }

  // Entrance animations
//   useEffect(() => {
//     if (!sectionRef.current) return

//     Header animation
//     gsap.from('.gallery-header', {
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top 75%',
//         toggleActions: 'play none none reverse',
//       },
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: 'power3.out',
//     })

//     // Grid items stagger in with more dynamic effect
//     gsap.from('.gallery-item', {
//       scrollTrigger: {
//         trigger: '.gallery-grid',
//         start: 'top 70%',
//         toggleActions: 'play none none reverse',
//       },
//       y: 100,
//       opacity: 0,
//       scale: 0.85,
//       rotation: () => Math.random() * 4 - 2, // Random slight rotation
//       stagger: {
//         amount: 1.4,
//         from: 'random',
//         ease: 'power2.out',
//       },
//       duration: 0.9,
//       ease: 'power3.out',
//     })

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill())
//   }, [])

  const getSpanClass = (span?: string) => {
    switch (span) {
      case 'tall':
        return 'md:row-span-2'
      case 'wide':
        return 'md:col-span-2'
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      default:
        return ''
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#628B35] py-20 lg:py-32 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative blur orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="gallery-header text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-white/40 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair text-white mb-5">
            Gallery
          </h2>
          <p className="text-white/75 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our beautiful farmhouse through stunning visuals
          </p>
        </div>

        {/* Justified Masonry Grid */}
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3 sm:gap-4 lg:gap-5">
          {galleryItems.map((item) => {
            const isVideo = item.type === 'video'
            const isHovered = hoveredVideo === item.id

            return (
              <div
                key={item.id}
                className={`
                  gallery-item group relative overflow-hidden rounded-2xl lg:rounded-3xl
                  bg-emerald-900/20 shadow-lg hover:shadow-2xl
                  transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1
                  ${getSpanClass(item.span)}
                `}
                onMouseEnter={() => isVideo && handleVideoHover(item.id, true)}
                onMouseLeave={() => isVideo && handleVideoHover(item.id, false)}
                style={{
                  cursor: isVideo ? 'none' : 'default',
                }}
              >
                {/* Image */}
                {item.type === 'image' && (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)] pointer-events-none" />
                  </>
                )}

                {/* Video */}
                {item.type === 'video' && (
                  <>
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current.set(item.id, el)
                      }}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    {/* Vignette for video too */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.25)] pointer-events-none" />
                  </>
                )}

                {/* Overlay gradient (on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Video badge (shows when not hovering) */}
                {isVideo && !isHovered && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 transition-opacity duration-300 group-hover:opacity-0">
                    <Play className="w-3 h-3 text-white fill-white" />
                    <span className="text-white text-[10px] font-semibold uppercase tracking-widest">Video</span>
                  </div>
                )}

                {/* Caption slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-white font-medium text-sm lg:text-base drop-shadow-lg">
                    {item.alt}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <button className="group relative px-8 py-3.5 border-2 border-white/30 text-white rounded-full hover:border-white hover:bg-white hover:text-[#628B35] transition-all duration-300 text-sm uppercase tracking-widest font-medium overflow-hidden">
            <span className="relative z-10">View All Photos</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-0" />
          </button>
        </div>
      </div>

      {/* Custom play button cursor for videos */}
      {hoveredVideo !== null && (
        <div
          className="play-cursor pointer-events-none fixed z-50 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-2xl"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Play className="w-7 h-7 text-[#628B35] fill-[#628B35] translate-x-0.5" />
        </div>
      )}

      {/* Hide default cursor on video hover */}
      <style jsx global>{`
        .gallery-item[style*="cursor: none"] {
          cursor: none !important;
        }
        .gallery-item[style*="cursor: none"] * {
          cursor: none !important;
        }
      `}</style>
    </section>
  )
}