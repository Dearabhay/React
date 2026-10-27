import {useNavigate} from 'react-router';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {  toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import {addUser} from '../features/authSlice'

export const useAuth =()=>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let{register,handleSubmit,reset,formState:{errors}} = useForm();
    let[registerUsers,setRegisterUsers]= useState(JSON.parse(localStorage.getItem('registerUsers')) || [])
    const registerForm =(data)=>{
        console.log(data)
        let arr = [...registerUsers,data];
        setRegisterUsers(arr);
        localStorage.setItem("registerUsers",JSON.stringify(arr));
        toast.success("user register...")
    }
     const loggingForm =(data)=>{
        let users = registerUsers.find((val)=>{
            return val.email== data.email && val.password == data.password;
        });
        if(!users){
            toast.error("invaild  somthing...")
        }
        dispatch(addUser(users));
        toast.success('user logging...');
        localStorage.setItem('loggedInUser',JSON.stringify(users));
        reset();
    }
    return{
        navigate,register,handleSubmit,reset,errors,registerForm,loggingForm
    }
}