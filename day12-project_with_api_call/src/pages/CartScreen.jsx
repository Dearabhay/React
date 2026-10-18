import React,{useContext} from "react";
import CartCard from "../compoments/CartCard.jsx";
import {MyStore} from "../context/MyContext.jsx";

const CartScreen =()=>{
    let{cartItems} = useContext(MyStore);
    return(
       <div>
        <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
        {
            cartItems.map((elem)=>{
                return <CartCard key={elem.id} product={elem}/>
            })
        }
       </div>
    ) 
}
export default CartScreen;