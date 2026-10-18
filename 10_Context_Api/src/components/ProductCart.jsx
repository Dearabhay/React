import React,{useContext} from "react";
import {MyShop} from "../context/MyWebsite.jsx"

const ProductCart = ({product}) => {
  let {setCartItems} = useContext(MyShop);
  

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl">

        {/* Product Image */}
        <div className="flex h-64 items-center justify-center bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">
          <p className="mb-2 text-sm font-medium capitalize text-indigo-600">
            {product.category}
          </p>

          <h2 className="mb-3 text-lg font-bold text-gray-800">
            {product.title}
          </h2>

          <p className="mb-3 line-clamp-3 text-sm text-gray-500">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-sm text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>

            <button onClick={()=> setCartItems(prev =>[...prev,product])} className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;