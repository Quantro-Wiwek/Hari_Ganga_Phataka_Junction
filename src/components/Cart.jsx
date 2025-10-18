import React, {useState} from 'react'
import emailjs from 'emailjs-com'

export default function Cart({items, remove, updateQty}){
  const [open, setOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [form, setForm] = useState({name:'', email:'', phone:'', address:''})
  const [orderSent, setOrderSent] = useState(false)

  const total = items.reduce((s,i)=> s + i.discountPrice * i.qty, 0)

  function sendOrder(e){
    e.preventDefault()
    const locationLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(form.address)}`
    const formattedItems = items.map(it => `${it.productName}-qty-${it.qty}`).join(', ')
    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      location_link: locationLink,
      items: formattedItems,
      total: `₹${total}`,
      summary: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nAddress: ${form.address}\nLocation: ${locationLink}\nItems: ${formattedItems}\nTotal: ₹${total}`
    }
    emailjs.send('service_qxoey0h','template_x75kxf7', templateParams, 'aIudfdL2B9L_8MVnd')
      .then(()=>{
        setOrderSent(true)
        alert('Order sent! Dealer will contact you shortly.')
      }).catch(err=>{
        console.error(err); alert('Failed to send order. Please try via contact form.')
      })
  }

  return (
    <div>
  <div className="fixed right-6 bottom-16 z-50">
        <button onClick={()=>setOpen(true)} className="bg-gradient-to-r from-festive-orange to-festive-gold text-white px-5 py-4 rounded-full shadow-xl font-extrabold text-xl flex items-center gap-3 border-4 border-festive-red hover:scale-110 transition-all duration-200">
          <span className="text-2xl animate-bounce">🛒</span> Cart <span className="bg-white text-festive-red rounded-full px-2 py-1 text-base font-bold ml-1">{items.reduce((s,i)=>s+i.qty,0)}</span>
        </button>
      </div>

      {/* sidebar modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="w-full max-w-md h-full p-0 overflow-auto rounded-l-2xl shadow-2xl bg-white border-l-8 border-festive-gold relative">
            <div className="flex justify-between items-center px-6 py-4 bg-white rounded-tl-2xl border-b-2 border-festive-gold">
              <h3 className="text-2xl font-extrabold text-festive-orange flex items-center gap-2"><span>🛍️</span> Your Cart</h3>
              <div className="flex gap-2">
                <button className="bg-gradient-to-r from-festive-orange to-festive-gold text-white px-4 py-2 rounded shadow font-bold hover:scale-105 transition-all" onClick={()=>setCheckoutOpen(true)}>Checkout</button>
                <button className="bg-gray-100 text-festive-red px-4 py-2 rounded shadow font-bold hover:bg-gray-200 transition-all" onClick={()=>setOpen(false)}>Close</button>
              </div>
            </div>
            <div className="px-6 py-2">
              {items.length===0 && <div className="text-gray-500 italic py-8 text-center">Cart is empty</div>}
              {items.map(i=> (
                <div key={i.id} className="flex items-center gap-4 py-3 border-b border-yellow-200 last:border-b-0">
                  <img src={i.image} className="w-16 h-16 object-contain rounded-xl border-2 border-festive-gold/30 bg-white" />
                  <div className="flex-1">
                    <div className="font-bold text-base text-festive-red">{i.productName}</div>
                    <div className="text-xs text-gray-600">₹{i.discountPrice} x {i.qty}</div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <input type="number" value={i.qty} min="1" onChange={e=>updateQty(i.id, Number(e.target.value))} className="w-14 border-2 border-festive-gold/30 rounded px-1 text-xs" />
                    <button onClick={()=>remove(i.id)} className="text-xs text-red-500 hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-white rounded-bl-2xl border-t-2 border-festive-gold flex justify-between items-center font-extrabold text-xl">
              <span>Total</span> <span className="text-festive-red">₹{total}</span>
            </div>
            <div className="absolute left-0 bottom-0 w-24 h-24 opacity-30 pointer-events-none select-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#FFD700"/></svg>
            </div>
          </div>
        </div>
      )}

      {/* checkout modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-0 w-full max-w-md shadow-2xl border-4 border-festive-gold relative">
            <div className="px-8 py-6 bg-white rounded-t-2xl border-b-2 border-festive-gold flex items-center gap-2">
              <span className="text-2xl">🧾</span>
              <h3 className="text-2xl font-extrabold text-festive-orange">Checkout</h3>
            </div>
            {!orderSent ? (
              <form onSubmit={sendOrder} className="flex flex-col gap-4 px-8 py-6">
                <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
                <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
                <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition" />
                <textarea required placeholder="Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} className="border-2 border-festive-gold/40 px-3 py-2 rounded focus:ring-2 focus:ring-festive-orange outline-none transition min-h-[60px]" />
                <div className="text-xs text-gray-600 mb-2">Location Link: <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(form.address)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on Google Maps</a></div>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-lg">Total: <span className="text-festive-red">₹{total}</span></div>
                  <button className="bg-gradient-to-r from-festive-orange to-festive-gold text-white px-5 py-2 rounded shadow font-bold hover:scale-105 hover:from-festive-gold hover:to-festive-orange transition-all duration-200">Send Order</button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center px-8 py-10">
                <div className="text-festive-gold font-extrabold text-2xl flex items-center gap-2 animate-bounce">
                  <span>🎉</span> Order Confirmed! <span>🎆</span>
                </div>
                <div className="text-green-700 font-semibold text-lg">Thank you for your order. Enjoy your festive shopping!</div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(form.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded shadow hover:bg-green-200 transition"
                >
                  📍 View Your Address on Google Maps
                </a>
                <button className="bg-gradient-to-r from-festive-orange to-festive-gold text-white px-5 py-2 rounded shadow font-bold hover:scale-105 hover:from-festive-gold hover:to-festive-orange transition-all duration-200 mt-2" onClick={()=>{
                  setCheckoutOpen(false);
                  setOrderSent(false);
                  window.location.hash = '';
                  window.scrollTo({top:0, behavior:'smooth'});
                }}>Close</button>
              </div>
            )}
            <div className="absolute right-0 bottom-0 w-24 h-24 opacity-30 pointer-events-none select-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#FFD700"/></svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
