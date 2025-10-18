import React from 'react'

export default function Header({cartCount}){
  return (
    <header className="bg-gradient-to-r from-festive-orange to-festive-red text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">HARI GANGA PHATAKA JUNCTION</div>
          <div className="bg-white text-festive-red text-sm px-2 py-1 rounded">🚚 Free Delivery</div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <a href="#catalogue" className="hover:underline">Catalogue</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <button className="relative">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="absolute -top-2 -right-2 bg-white text-festive-red rounded-full px-2 text-xs">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
