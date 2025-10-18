
import React, { useEffect, useRef, useState } from 'react'

export default function HeroSection(){
  const [blur, setBlur] = useState(0)
  const bgRef = useRef()

  useEffect(() => {
    function onScroll(){
      const y = window.scrollY
      setBlur(Math.min(16, y/30))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <section className="relative overflow-hidden min-h-[400px] flex items-center justify-center">
      <img
        ref={bgRef}
        src="/images/Gemini_Generated_Image_b2kmcob2kmcob2km.png"
        alt="Diwali Ship Background"
        style={{ filter: `blur(${blur}px)`, transition: 'filter 0.3s' }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-festive-gold drop-shadow-lg">Celebrate This Diwali with <span className="text-white">40%–60% OFF</span></h1>
          <p className="mt-4 text-lg text-white/90">Lighting up your Diwali with Joy & Savings. Explore colourful fancy crackers, chakris, anars and more.</p>
          <a href="#catalogue" className="inline-block mt-6 bg-white text-festive-red px-6 py-3 rounded shadow">View Catalogue</a>
        </div>
      </div>
      {/* floating diays/fireworks placeholder */}
      <svg className="absolute -left-10 top-4 opacity-20" width="120" height="120" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#FFD700"/></svg>
    </section>
  )
}
