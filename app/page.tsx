'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/HeroSection';
import About from '@/components/AboutSection';
import Services from '@/components/ServiceSection';
import Menu from '@/components/MenuSection';
import WhyChoose from '@/components/WhyChooseSection';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonial';
import InfoSection from '@/components/InfoSection';
import CTASection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function Home() {
  // useEffect(() => {
  //   // Initialize Lenis smooth scroll
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smoothWheel: true,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <main className="relative bg-[#0a0f0d]">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <Hero />

      {/* Placeholder sections for navigation - REMOVE THESE LATER WHEN YOU ADD REAL SECTIONS */}
      {/* <section id="about" className="min-h-screen bg-[#0f1e17] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-playfair mb-4">About Section</h2>
          <p className="text-white/60 font-poppins">Coming next...</p>
        </div>
      </section> */}

      <About />

      {/* <section id="services" className="min-h-screen bg-[#1a3a2e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-playfair mb-4">Services Section</h2>
          <p className="text-white/60 font-poppins">Coming next...</p>
        </div>
      </section> */}

      <Services />
      {/* <Menu /> */}
      <Gallery />
      <WhyChoose />

      {/* <section id="amenities" className="min-h-screen bg-[#0f1e17] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-playfair mb-4">Amenities Section</h2>
          <p className="text-white/60 font-poppins">Coming next...</p>
        </div>
      </section> */}
      <Amenities />
      <Testimonials />

      {/* <section id="contact" className="min-h-screen bg-[#1a3a2e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-playfair mb-4">Contact Section</h2>
          <p className="text-white/60 font-poppins">Coming next...</p>
        </div>
      </section> */}
      <InfoSection />
      <CTASection />
      <Footer />
    </main>
  );
}

