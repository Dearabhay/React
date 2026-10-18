import React ,{useContext}from "react";
import {MyShop} from "../context/MyWebsite.jsx"

const Navbar =()=>{
   let{setIsCartOpen} = useContext(MyShop);
    return(
   <div className="flex items-center p-4 rounded  justify-between bg-black">
    <div className="">
        <h1 className="text-white">logo</h1>
    </div>
    <div className="gap-10 flex text-xl">
        <p onClick ={()=> setIsCartOpen(false)} className="text-white cursor-pointer">Home</p>
        <p onClick ={()=> setIsCartOpen(true)} className="text-white cursor-pointer">cart</p>
    </div>
        <button className="text-white font-bold bg-blue-500  rounded">Log in</button>
   </div>
    )
}
export default Navbar;