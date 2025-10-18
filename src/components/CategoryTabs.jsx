
import React, {useState} from 'react'
import ProductCard from './ProductCard'

export default function CategoryTabs({categories, onAdd}){
  const [active, setActive] = useState(categories[0]?.name)

  return (
    <>
      <section className="py-4 bg-gradient-to-r from-festive-orange to-festive-gold text-white text-center shadow-lg border-b-8 border-yellow-400">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide flex items-center justify-center gap-2 mb-1">
          <span>🎆✨</span> Our Diwali Catalogue <span>✨🎇</span>
        </h2>
        <p className="text-lg flex items-center justify-center gap-2 mb-0">
          <span>Browse categories and festive offers below</span> <span className="animate-pulse">✨</span>
        </p>
      </section>
      <section id="catalogue" className="py-8 relative overflow-hidden">
        <img
          src="/images/Gemini_Generated_Image_b2kmcob2kmcob2km.png"
          alt="Fireworks Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          style={{ filter: 'blur(4px)' }}
        />
        <div className="relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-5">
            {categories.map(cat=> (
              <button
                key={cat.name}
                onClick={()=>setActive(cat.name)}
                className={`px-4 py-3 rounded-xl shadow bg-white/90 hover:bg-yellow-100 transition border border-yellow-300 flex flex-col items-center gap-1 text-base font-semibold tracking-wide ${active===cat.name? 'ring-2 ring-festive-gold scale-105':''}`}
                style={{minHeight:'64px'}}
              >
                <span className="flex items-center gap-1 text-festive-red text-lg">{cat.name} <span>✨</span></span>
                <span className="text-sm text-gray-600">{cat.products.length} Products</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.find(c=>c.name===active)?.products.map(p=> (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
