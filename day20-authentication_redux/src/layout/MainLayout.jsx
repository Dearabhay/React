import React from 'react'
import {Outlet} from 'react-router'

const MainLayout =()=>{
    console.log("main")
    return(
        <div>
            <nav><h1>hello </h1></nav>
            <Outlet/>
        </div>
    )
}
export default MainLayout;