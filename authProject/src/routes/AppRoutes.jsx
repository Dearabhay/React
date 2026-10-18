import React from 'react';
import{createBrowserRouter,RouterProvider} from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage"; 
import RegisterPage from "../pages/RegisterPage"; 
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../context/ProtectedRoute";

const AppRoutes =()=>{
    let route = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
            children:[
                {
                    path:"",
                    element:<LoginPage/>
                },
                {
                    path:"register",
                    element:<RegisterPage/>

                },{
                    path:"/main",
                    element:<ProtectedRoute/>,
                    children:[
                        {
                            path:"",
                            element:<MainLayout/>
                        }
                    ]
                }
            ]
        }
    ])
    return <RouterProvider router={route}/>;
}
export default AppRoutes;