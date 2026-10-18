import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router'; // 1. Fixed package name
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MainLayout from '../layout/MainLayout'; // 2. Added missing dot for relative path

const AppRoutes = () => {
    console.log("hello");
    let route = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "services",
                    element: <Services />
                }
            ]
        }
    ]);

    return <RouterProvider router={route} />;
};

export default AppRoutes;