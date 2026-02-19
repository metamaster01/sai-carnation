'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    gsap.from('.footer-col', {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.footer-logo-text', {
      scrollTrigger: {
        trigger: '.footer-logo-text',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const navLinks = ['Home', 'About', 'Services', 'Amenities']

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer ref={footerRef} id="contact" className="relative bg-white overflow-hidden">

      {/* ── TOP ROW ── 3 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Column 1 — About */}
          <div className="footer-col space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">About Us</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sai Carnation Farmhouse is a peaceful countryside retreat offering comfort, privacy, and the perfect setting for stays and celebrations.
            </p>
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="block text-sm text-gray-500 hover:text-emerald-700 transition-colors duration-200 group"
                >
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                    {link}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 — Map */}
          <div className="footer-col">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Find Us</h4>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0272461650698!2d78.78182679999999!3d21.1114799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4f311224bd531%3A0xaf96d99a0e52150!2sSai%20Carnation%20Farms!5e0!3m2!1sen!2sin!4v1771497252372!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sai Carnation Farmhouse location"
              />
            </div>
            <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>CHICHOLI GAON, VILLAGE, near FUN N FOOD, Nagpur, Maharashtra 440023</span>
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div className="footer-col space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Contact</h4>

            <div className="space-y-4">
              <a
                href="mailto:info@saicarnation.ht"
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-sm">info@saicarnationfarms.in</span>
              </a>

              {/* <a
                href="tel:+393471644693"
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-sm">+39 347 164 4693</span>
              </a> */}

              <a
                href="tel:+919595524424"
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-sm">+91 9595 524 424</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-gray-500 transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sai_carnation/"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-gray-500 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Book CTA */}
            <a
              href="https://wa.me/919595524424?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay%20at%20Sai%20Carnation%20Farmhouse.%20Please%20provide%20me%20with%20available%20dates%20and%20pricing%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-600
              text-white text-sm uppercase tracking-wider rounded-full
              transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 hover:scale-105"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gray-100" />
      </div>

      {/* ── GIANT LOGO + FOOTER IMAGE ── */}
      <div className="relative overflow-hidden">

        {/* Giant Sai Carnation Farmhouse text */}
        <div className="footer-logo-text relative z-30 text-center py-6 select-none pointer-events-none">
          <p className="font-playfair italic text-emerald-700
            text-[13vw] leading-none tracking-tight whitespace-nowrap
            opacity-100">
            Sai Carnation
          </p>
          <p className="font-playfair italic text-emerald-900
            text-[13vw] leading-none tracking-tight whitespace-nowrap
            -mt-4 lg:-mt-8">
            Farmhouse
          </p>
        </div>

        {/* Footer bottom image — sits behind / under the giant text */}
        <div className="relative -mt-16 lg:-mt-28 z-20">
          <img
            src="/footer-2.png"
            alt="Farmhouse"
            className="w-full max-h-[420px] object-cover object-top"
          />
          {/* Fade top of image into white */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="bg-white border-t border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} <Link href="https://metamaster.in">Meta Master</Link>. All rights reserved.</p>
          <p>Designed with care · Nagpur, Maharashtra</p>
        </div>
      </div>
    </footer>
  )
}