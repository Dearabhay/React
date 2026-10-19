import { useNavigate } from "react-router";
import React,{useContext} from "react";
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify';
import {Auth} from "../context/AuthContext"


export const useAuth =()=>{
 const{registerUser,setLoggedInUser,setRegisterUser} =useContext(Auth);
  
     let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let loginFormSubmit = (data) => {
    let user = registerUser.find((val)=>{
        return val.email === data.email && val.password === data.password;
    });
    if(!user){
        toast.error("Invaild creds or user not found");
        reset();
        return
    }
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser',JSON.stringify(user))
    toast.success("User Login Successfully")
    navigate("/main")
    reset();
  };
   let resigterFromSubmit = (data) => {
          let arr =[
             ...registerUser,data 
          ]
          setRegisterUser(arr);
          toast.success("Register Successfully")
          setLoggedInUser(data);
          localStorage.setItem('registerUser',JSON.stringify(arr));
          localStorage.setItem('loggedInUser',JSON.stringify(data));
          navigate("/main")
          reset(); 
      };
  return{
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    resigterFromSubmit
  }
}