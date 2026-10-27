import React,{useEffect} from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router';
import AuthLayout from "../layout/AuthLayout";
import LoggingPage from '../pages/LoggingPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import {toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import {addUser} from '../features/authSlice';
import PublicProtected from '../routes/protected/PublicProtected';
import MainProtected from '../routes/protected/MainProtected'


const AppRoutes =()=>{
    let dispatch = useDispatch();
    const hydrateUser =()=>{
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if(!loggedInUser){
            toast.error("unAuthoried User");
            return;
        }

        dispatch(addUser(loggedInUser))
    }
    useEffect(()=>{
        hydrateUser();
    },[]);



    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected/>,
            children:[{
                path:"",
                element:<AuthLayout/>,
               children:[{
                path:"",
                element:<LoggingPage/>
                 },
                {
                path:"register",
                element:<RegisterPage/>
               },
             ],
            }
            ]
       },
       {
        path:"/main",
        element:<MainProtected/>,
        children:[{
              element:<MainLayout/>,
              children:[
            {
                path:"",
                element:<HomePage/>
            }
             ]
            }]
       }
   ])
    return <RouterProvider router={router}></RouterProvider>
}
export default AppRoutes;