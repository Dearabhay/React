import React from "react";
import {Outlet} from 'react-router'

const MainLayout =()=>{
    return(
        <div className="p-2">
            <h1>navbar</h1>
            <div className="p-4">
            <Outlet/>

            </div>
        </div>
    )
}
export default MainLayout;