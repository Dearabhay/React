import React,{useContext} from "react";
import { NavLink } from "react-router";
import {Auth} from "../context/AuthContext";
import {toast} from 'react-toastify';

const Navbar = () => {
   
   const {setLoggedInUser} = useContext(Auth)

    return (
        <div className="h-full bg-white border-r border-gray-200 flex flex-col p-6 shadow-sm rounded justify-between">
            <div>
            <div className="mb-10">
                <h1 className="text-2xl font-black text-blue-600 tracking-tight">
                    Logo
                </h1>
            </div>

            {/* Navigation Links */}
            <div>
            <nav className="flex flex-col gap-2">
                <NavLink className={({isActive})=>isActive?"font-semibold text-red-500":"text-black"} to={"/main"} end >Home</NavLink>
                <NavLink className={({isActive})=>isActive?"font-semibold text-red-500":"text-black"} to={"/main/product"} >Products</NavLink>
                <NavLink className={({isActive})=>isActive?"font-semibold text-red-500":"text-black"} to={"/main/users"}>Users</NavLink>
            </nav>
            </div>
            </div>
            <div>
                <button onClick={()=>{
                     localStorage.removeItem("loggedInUser");
                    //  localStorage.removeItem("registerUser");
                    setLoggedInUser(null);
                    toast.warn("Logged out successfully!");
                }} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md">
                Logout
               </button>
            </div>
        </div>
    );
};

export default Navbar;