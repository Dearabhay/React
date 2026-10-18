import React,{useContext} from "react";
import {MyStore} from "../context/MyContext.jsx";


const Navbar =()=>{
    let {setIsCartOpen} = useContext(MyStore);
   
    return(
   <div className="flex items-center p-4 rounded  justify-between bg-black">
    <div className="">
        <img className="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src="https://static.vecteezy.com/system/resources/previews/016/134/475/original/letter-r-logo-design-logo-template-creative-r-logo-symbol-vector.jpg" alt="" />
    </div>
    <div className="gap-10 flex text-xl">
        <p onClick={()=>setIsCartOpen(false)} className="text-white cursor-pointer">Home</p>
        <p onClick={()=>setIsCartOpen(true)} className="text-white cursor-pointer text-yellow-600">Cart</p>
    </div>
        <button className="text-white font-bold py-2 px-3 rounded bg-sky-500 hover:bg-sky-700  cursor-pointer">Log in</button>
   </div>
    )
}
export default Navbar;