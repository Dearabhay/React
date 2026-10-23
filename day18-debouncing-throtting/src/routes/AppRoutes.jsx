import {RouterProvider,createBrowserRouter} from 'react-router'
import React,{lazy} from 'react'
import MainLayout from "../layouts/MainLayout";
import App from "../App"
import {getUsers} from '../apis/usersApi'
let About = lazy(()=> import ("../pages/About"));
let Contact = lazy(()=> import ("../pages/Contact"));





const AppRoutes =()=>{
    let router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:"",
                    element:<App/>
                },{
                    path:"about",
                    loader:getUsers,
                    hydrateFallback:<h1>Loading users data</h1>,
                    element:<About/>
                },{
                    path:"contact",
                    element:<Contact/>
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>
}
export default AppRoutes;