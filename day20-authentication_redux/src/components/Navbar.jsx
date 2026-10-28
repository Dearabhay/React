import React from 'react';
import { NavLink } from 'react-router';
import { LogOut } from 'lucide-react';


const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return `px-4 py-2 rounded-xl text-sm font-medium transition duration-200 ${
            isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-100 font-semibold"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`;
    };

    return (
        <header className="w-full bg-white rounded-lg border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                
                {/* Brand Logo */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-black text-blue-600 tracking-tight">
                        SkyMart
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-2">
                    <NavLink to={"/main"} className={navLinkStyles} end>
                        Home
                    </NavLink>
                    <NavLink to={"/main/shop"} className={navLinkStyles}>
                        Shop
                    </NavLink>
                    <NavLink to={"/main/about"} className={navLinkStyles}>
                        About
                    </NavLink>
                </nav>

                {/* Right Side: User Greeting & Cart Button */}
                <div className="flex items-center gap-4 space-x-4">
                    <span className="text-sm font-semibold text-gray-700 hidden sm:inline-block">
                        Hey,<strong className="text-yellow-500">Dev</strong>
                    </span> 

                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-xl hover:bg-blue-100 transition duration-200 border border-blue-100 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Cart</span>
                    </button>
                    <LogOut className="cursor-pointer" size={20}/>
                </div>

            </div>
        </header>
    );
};

export default Navbar; // ya export default Navbar;