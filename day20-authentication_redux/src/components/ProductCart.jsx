import React from "react";

const ProductCard = ({ product }) => {
  // Fallback demo data matching your API structure if props aren't passed immediately
  const item = product || {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    discountPercentage: 10.48,
    stock: 99,
    availabilityStatus: "In Stock",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    brand: "Essence",
  };

  // Calculate discounted price
  const discountedPrice = (
    item.price -
    (item.price * item.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="max-w-xs w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden hover:border-slate-700 transition-all duration-300 group flex flex-col justify-between">
      
      {/* Top Section: Image & Stock Badge */}
      <div className="relative bg-slate-950 p-4 flex items-center justify-center overflow-hidden h-52">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Stock / Availability Status Badge */}
        <span
          className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
            item.stock > 0
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
          }`}
        >
          {item.availabilityStatus} ({item.stock})
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Brand & Title */}
        <div>
          {item.brand && (
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              {item.brand}
            </span>
          )}
          <h3 className="text-base font-semibold text-slate-100 line-clamp-1 group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold text-white">
            ${discountedPrice}
          </span>
          {item.discountPercentage > 0 && (
            <span className="text-sm font-medium text-slate-500 line-through">
              ${item.price}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button 
          disabled={item.stock === 0}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-600 text-white text-sm font-medium rounded-xl transition duration-200 shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>{item.stock > 0 ? "Add to Cart" : "Out of Stock"}</span>
        </button>
      </div>

    </div>
  );
};

export default ProductCard;