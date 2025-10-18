import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const quotes = [
  'Amazing quality and delivery speed!',
  'Loved the variety of fancy crackers!',
  'Best discounts in town – thank you HARI GANGA!'
]

export default function Testimonials(){
  const [form, setForm] = useState({ name: '', email: '', testimonial: '' })
  const [sent, setSent] = useState(false)

  function sendTestimonial(e){
    e.preventDefault()
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.testimonial,
    }
    emailjs.send('service_qxoey0h','template_ovy5fus', templateParams, 'aIudfdL2B9L_8MVnd')
      .then(()=>{ setSent(true) })
      .catch(()=>{ alert('Failed to send testimonial. Please try again.') })
  }

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-br from-yellow-50 via-festive-gold/20 to-festive-orange/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 400 120">
          <circle cx="60" cy="60" r="50" fill="#FFD70022" />
          <circle cx="340" cy="80" r="40" fill="#FF6A0022" />
        </svg>
      </div>
      <h2 className="text-3xl font-extrabold mb-6 text-center text-festive-orange drop-shadow-lg flex items-center justify-center gap-2">
        <span>💬</span> What Customers Say <span>🌟</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10 relative z-10">
        {quotes.map((q,i)=> (
          <div key={i} className="p-6 bg-white/90 rounded-2xl shadow-lg border-2 border-festive-gold/40 flex flex-col items-center animate-fade-in" data-aos="fade-up">
            <div className="text-3xl mb-2">✨</div>
            <div className="italic text-lg text-festive-red text-center">“{q}”</div>
            <div className="mt-3 text-sm text-gray-600">— Happy Customer</div>
          </div>
        ))}
      </div>
      <div className="max-w-md mx-auto bg-white/95 rounded-2xl shadow-lg p-6 border-2 border-festive-orange/40 relative z-10">
        <h3 className="font-bold text-festive-gold mb-3 flex items-center gap-2 text-lg"><span>📝</span> Share Your Experience</h3>
        {!sent ? (
          <form onSubmit={sendTestimonial} className="flex flex-col gap-4">
            <input required placeholder="Your Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
            <input required type="email" placeholder="Your Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
            <textarea required placeholder="Your Testimonial" value={form.testimonial} onChange={e=>setForm({...form, testimonial:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition min-h-[80px]" />
            <button className="bg-gradient-to-r from-festive-orange to-festive-gold text-white px-4 py-2 rounded shadow font-bold hover:scale-105 hover:from-festive-gold hover:to-festive-orange transition-all duration-200">Send Testimonial</button>
          </form>
        ) : (
          <div className="text-green-700 font-bold text-center text-lg flex flex-col items-center gap-2 animate-fade-in">
            <span className="text-3xl">🎉</span>
            Thank you for sharing your experience!
          </div>
        )}
      </div>
    </section>
  )
}
