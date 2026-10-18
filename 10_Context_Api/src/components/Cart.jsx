import React,{useContext} from "react";
import {MyShop} from "../context/MyWebsite.jsx"

const Cart = () => {
    let { cartItems } = useContext(MyShop);
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-8">

            <h1 className="text-3xl font-bold mb-8">
                Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
                <div className="flex justify-center items-center h-80">
                    <h2 className="text-2xl text-gray-500">
                        Your cart is empty 🛒
                    </h2>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Products */}
                    <div className="lg:col-span-2 flex flex-col gap-5">

                        {cartItems.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-sm p-5 flex gap-6"
                            >

                                {/* Image */}
                                <div className="w-32 h-32 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">

                                    <h2 className="text-lg font-semibold line-clamp-2">
                                        {product.title}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-2">
                                        {product.category}
                                    </p>

                                    <p className="text-yellow-500 mt-2">
                                        ⭐ {product.rating?.rate}
                                    </p>

                                    <div className="flex items-center justify-between mt-5">

                                        <span className="text-2xl font-bold">
                                            ${product.price}
                                        </span>

                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white rounded-xl shadow-sm p-6 h-fit">

                        <h2 className="text-2xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-3">
                            <span>Items</span>
                            <span>{cartItems.length}</span>
                        </div>

                        <div className="border-t pt-4 flex justify-between text-xl font-bold">
                            <span>Total</span>

                            <span>
                                $
                                {cartItems
                                    .reduce(
                                        (total, product) =>
                                            total + product.price,
                                        0
                                    )
                                    .toFixed(2)}
                            </span>
                        </div>

                        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                            Proceed to Checkout
                        </button>

                    </div>

                </div>
            )}
        </div>
    );
};

export default Cart;


