
import React from 'react'

export default function Footer(){
  return (
    <footer className="relative bg-gradient-to-tr from-festive-orange via-festive-yellow to-festive-pink text-white mt-8 pt-2 pb-6 overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-festive-pink via-festive-yellow to-festive-orange animate-pulse" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="flex items-center gap-2 text-lg font-bold drop-shadow-sm">
          <span className="inline-block animate-spin-slow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-festive-yellow"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2"/></svg>
          </span>
          © 2025 HARI GANGA PHATAKA JUNCTION — Made with <span className="animate-pulse text-pink-200">❤️</span> From Quantro Services
        </div>
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="#" className="flex items-center gap-1 hover:text-festive-pink transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-pink-400"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.25.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/></svg>
            Instagram
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-green-300 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.472-.148-.67.15c-.198.297-.767.967-.94 1.166c-.173.198-.347.223-.644.075c-.297-.149-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.372-.025-.521c-.075-.149-.669-1.612-.916-2.21c-.242-.58-.487-.501-.669-.51c-.173-.007-.372-.009-.571-.009c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.099 3.21 5.077 4.377c.71.306 1.263.489 1.695.626c.712.227 1.36.195 1.872.118c.571-.085 1.758-.719 2.007-1.413c.248-.694.248-1.288.173-1.413c-.074-.124-.272-.198-.57-.347z"/></svg>
            WhatsApp
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
            Facebook
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-festive-orange via-festive-yellow to-festive-pink blur-sm opacity-70" />
    </footer>
  )
}
