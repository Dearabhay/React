import React from "react"; 


const CartCard = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm mb-4">
      {/* Product Image */}
      <div className="h-24 w-24 flex-shrink-0 rounded-xl bg-gray-50 p-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 text-center sm:text-left">
        <span className="text-xs font-semibold text-gray-400 capitalize">
          {product.category}
        </span>
        <h3 className="font-bold text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="text-lg font-bold text-green-600 mt-1">
          ${product.price}
        </p>
      </div>

      {/* Quantity Controls */}
      {/* Quantity */}
<div className="flex items-center gap-2">
  <span className="text-sm text-gray-500">Quantity:</span>
  <span className="font-bold text-gray-900">
    {product.quantity}
  </span>
</div>
</div>
  );
};

export default CartCard;