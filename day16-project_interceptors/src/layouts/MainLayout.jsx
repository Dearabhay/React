import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="h-screen w-screen bg-gray-100 p-3 grid grid-cols-[260px_1fr] gap-3 overflow-hidden">
            
            <div className="h-full">
                <Navbar />
            </div>
            
            
            <div className="h-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;