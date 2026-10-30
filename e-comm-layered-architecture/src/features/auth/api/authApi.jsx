import React from "react";
import{api} from "../../../config/axiosInstance"
export const loginUserApi = async(credentials)=>{
    try{
       let user = await api.post("/auth/login",credentials);
       localStorage.setItem('accessToken',user.data.accessToken);
       return user.data;
    }catch(error){
        console.log("error in api",error);
    }
}
export const hydrateUser=async()=>{
    let token = localStorage.getItem('accessToken')
    try{
        let res = await api.get('/auth/me',{
              headers: {
            Authorization: `Bearer ${token}` 
            },
        });
        return res.data
    }
    catch(error){
        console.log("error in login api",error)
    }
}