import React from "react";

const ProductCard = ({product}) => {
  
  

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between">
      
      {/* Top Section: Image & Category Badge */}
      <div className="relative bg-gray-50 p-6 flex items-center justify-center h-64 border-b border-gray-100">
        <span className="absolute top-4 left-4 uppercase tracking-wider text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Middle Section: Details */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
            {product.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Rating and Price Row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-sm font-semibold text-gray-800">
              {product.rating.rate}
            </span>
            <span className="text-xs text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-2 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;