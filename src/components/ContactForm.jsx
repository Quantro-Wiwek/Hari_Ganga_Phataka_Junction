import React, {useState} from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', address:'', message:''})
  const [status, setStatus] = useState('')

  function sendContact(e){
    e.preventDefault()
    const params = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      message: form.message,
      summary: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nAddress: ${form.address}\nMessage: ${form.message}`
    }
    emailjs.send('service_qxoey0h','template_ovy5fus', params, 'aIudfdL2B9L_8MVnd')
      .then(()=>{ setStatus('sent'); alert('Message sent! We will contact you soon.') })
      .catch(err=>{ console.error(err); setStatus('error'); alert('Failed to send message.') })
  }

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-yellow-50 via-festive-gold/20 to-festive-orange/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 400 120">
          <circle cx="60" cy="60" r="50" fill="#FFD70022" />
          <circle cx="340" cy="80" r="40" fill="#FF6A0022" />
        </svg>
      </div>
      <h2 className="text-3xl font-extrabold mb-6 text-center text-festive-orange drop-shadow-lg flex items-center justify-center gap-2">
        <span>📞</span> Contact / Custom Order <span>🪔</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <form onSubmit={sendContact} className="bg-white/95 p-6 rounded-2xl shadow-lg border-2 border-festive-gold/40 flex flex-col gap-3 animate-fade-in">
          <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
          <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
          <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
          <input placeholder="Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} className="w-full border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
          <textarea placeholder="Message / Custom Order" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition min-h-[80px]" />
          <button className="bg-gradient-to-r from-festive-orange to-festive-gold text-white px-4 py-2 rounded shadow font-bold hover:scale-105 hover:from-festive-gold hover:to-festive-orange transition-all duration-200">Send</button>
        </form>
        <div className="bg-white/90 rounded-xl shadow border border-festive-gold/30 p-6 flex flex-col gap-4 justify-center animate-fade-in w-full h-full min-h-[320px] md:min-h-0 md:h-auto md:w-auto md:flex-1">
          <h3 className="font-bold text-festive-gold mb-2 flex items-center gap-2 text-xl"><span>🏪</span> Contact Details</h3>
          <div className="flex items-center gap-3 text-lg"><span className="text-festive-gold text-2xl">📍</span> <span><b>Address:</b> Hari Ganga Society, Yerawada, Pune</span></div>
          <div className="flex items-center gap-3 text-lg"><span className="text-festive-gold text-2xl">☎️</span> <span><b>Phone:</b> +91 99227 82894</span></div>
          <div className="flex items-center gap-3 text-lg"><span className="text-festive-gold text-2xl">✉️</span> <span><b>Email:</b> hgphatakajunction@gmail.com</span></div>
        </div>
      </div>
    </section>
  )
}
