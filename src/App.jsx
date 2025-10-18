import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryTabs from './components/CategoryTabs'
import Cart from './components/Cart'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import productsData from './data/products.json'

export default function App(){
  const [cart, setCart] = useState([])
  useEffect(()=>{ AOS.init({duration:800}) },[])

  function addToCart(product){
    setCart(prev=>{
      const found = prev.find(p=>p.id===product.id)
      if(found) return prev.map(p=> p.id===product.id ? {...p, qty: p.qty+1} : p)
      return [...prev, {...product, qty:1}]
    })
  }

  function removeFromCart(id){
    setCart(prev => prev.filter(p=>p.id!==id))
  }

  function updateQty(id, qty){
    setCart(prev => prev.map(p=> p.id===id? {...p, qty} : p))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cart.reduce((s,i)=>s+i.qty,0)} />
      <Cart items={cart} remove={removeFromCart} updateQty={updateQty} />
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <CategoryTabs categories={productsData.categories} onAdd={addToCart} />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
