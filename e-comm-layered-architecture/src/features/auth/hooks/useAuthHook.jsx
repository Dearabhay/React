import React from "react";
import{useNavigate} from "react-router";
import{useForm} from 'react-hook-form';
import{loginUserApi} from '../../auth/api/authApi'
import {useDispatch} from 'react-redux'
import {toast} from "react-toastify";
import {addUsers} from '../../auth/state/authSlice'

export const useAuth =()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let{register,handleSubmit,reset,formState:{errors}} = useForm();
    const registerForm =(data)=>{
        console.log(data)
        
    }
     const loggingForm = async (data)=>{
        try{
            let response = await loginUserApi(data);
            dispatch(addUsers(response));
            toast.success("user login");
            
        }catch(error){
            console.log("form api error",error)
        }
      
    }

    return {
        navigate,register,handleSubmit,reset,errors,registerForm,loggingForm
    }
}