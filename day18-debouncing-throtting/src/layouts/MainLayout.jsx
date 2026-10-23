import React from "react";
import { Outlet, NavLink } from 'react-router';

const MainLayout = () => {
    // Helper function for active and inactive link states
    const navLinkStyles = ({ isActive }) => {
        return `px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
            isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top Navigation Bar */}
            <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm flex items-center justify-between">
                
                
                {/* Nav Links */}
                <div className="flex items-center space-x-2">
                    <NavLink to={"/"} className={navLinkStyles} end>
                        Home
                    </NavLink>
                    <NavLink to={"/about"} className={navLinkStyles}>
                        About
                    </NavLink>
                    <NavLink to={"/contact"} className={navLinkStyles}>
                        Contact
                    </NavLink>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 max-w-7xl w-full mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;