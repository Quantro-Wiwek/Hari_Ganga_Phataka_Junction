import React, { useState } from 'react'

export default function ProductCard({product, onAdd}){
  const [added, setAdded] = useState(false);
  const discountPercent = Math.round((1 - product.discountPrice / product.mrp) * 100);

  const handleAdd = () => {
    setAdded(true);
    onAdd(product);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition p-2 sm:p-3">
      <div className="h-24 sm:h-32 md:h-40 bg-gray-100 flex items-center justify-center">
        <img src={product.image} alt={product.productName} className="h-20 sm:h-28 md:h-full object-contain" />
      </div>
      <div className="p-2 sm:p-4">
        <div className="text-xs sm:text-sm text-gray-500">{product.id}</div>
        <div className="font-semibold text-sm sm:text-base">{product.productName}</div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-gray-500 text-xs sm:text-sm">MRP ₹{product.mrp}</div>
            <div className="text-festive-red font-bold text-sm sm:text-base">₹{product.discountPrice} <span className="text-xs sm:text-sm text-gray-500">({discountPercent}% OFF)</span></div>
          </div>
          <button
            onClick={handleAdd}
            className={`relative flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm transition-colors duration-300 focus:outline-none ${added ? 'bg-green-500' : 'bg-festive-orange'} text-white`}
            disabled={added}
          >
            {added ? (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Added
              </span>
            ) : (
              'Add'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
