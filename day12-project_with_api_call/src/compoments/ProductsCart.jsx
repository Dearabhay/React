import React,{useContext} from "react";
import {MyStore} from "../context/MyContext.jsx";

const ProductCard=({product,isInCart})=>{
    let {setCartItems,incrementQuantity,decrementQuantity} = useContext(MyStore);
    const addToCart=()=>{
        setCartItems((prev)=>[...prev,{...product,quantity:1}]);
        
    }
    const deleteToCart=()=>{
        setCartItems((prev)=>prev.filter((val)=>val.id!==product.id));
        
    }

  return (
    <div className="flex max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-64 w-full bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold capitalize text-gray-600">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
        <div className="space-y-2">
          {/* Title */}
          <h2 className="line-clamp-1 text-lg font-bold text-gray-900" title={product.title}>
            {product.title}
          </h2>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2">
              <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-800">
                ★ {product.rating.rate}
              </span>
              <span className="text-xs text-gray-400">
                ({product.rating.count} reviews)
              </span>
            </div>
          )}

          {/* Description */}
          <p className="line-clamp-2 text-sm text-gray-500">
            {product.description}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="space-y-3 pt-2">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          {/* Buttons */}
          <div className="flex gap-3">
            { isInCart ? <button className="w-full bg-gray-600 flex item-center justify-center gap-5 rounded">
              <span onClick={()=>incrementQuantity(product.id)} className="text-4xl">+</span><span className="text-4xl">{isInCart.quantity}</span>
              <span onClick={()=>decrementQuantity(product.id)} className="text-4xl">-</span></button> :
              <button onClick={addToCart} className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
              Add to Cart
            </button>
            }

            
              <button onClick={deleteToCart} className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95">
                Delete
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;