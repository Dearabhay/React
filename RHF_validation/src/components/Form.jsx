import React from 'react'
import { useForm } from 'react-hook-form';
import {nanoid} from "nanoid";

const Form =({setUsers,update,setToggle,users})=>{
    const {register, handleSubmit,reset, formState:{errors}} = useForm({
        mode:"onChange",
        defaultValues:update

    });
  
    
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold">Create User</h1>
            <form onSubmit={handleSubmit((data)=>{
                if(update){
                        setUsers((prev)=>{
                            return prev.map((val)=>{
                                return val.id === update.id ?{...data}: val
                            });
                        });
                }else{
                let arr = [...users,{...data, id:nanoid() }]
                console.log(arr);
                setUsers(arr);
                localStorage.setItem("users",JSON.stringify(arr));
                }
                
                reset();
                setToggle((prev)=>!prev);
                
            })} className="w-60 flex flex-col gap-2 p-4 rounded border-2 border-black">
                {errors.Name && <label className="text-red-500">{errors.Name.message}</label> }
                <input {...register("Name",{required:"Name is Required"
                })} className="p-2 rounded outline-0 border border-black" type="text" placeholder="Name"></input>
                  {errors.Email && <label className="text-red-500">{errors.Email.message}</label>}
                <input {...register("Email",{required:"Email is Required",pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Please Enter Valid Email"
                }})}className="p-2 rounded outline-0 border border-black"  type="email" placeholder="Email"></input>

                {errors.number &&<label className="text-red-500">{errors.number.message}</label>}
                <input {...register("number",{required:"Please Enter Number",minLength:{value:10,message:"Enter Correct Number"},maxLength:{value:10,message:"Enter Correct Number"}})} className="p-2 rounded outline-0 border border-black" type="number" placeholder="Contact"></input>
                {errors.url && <label className="text-red-500">{errors.url.message}</label>}
                <input {...register("url",{required:"Please proved URL of Image"})}className="p-2 rounded outline-0 border border-black" type="url" placeholder="Image Url"></input>
                <button className="p-2 font-bold bg-red-500  rounded border border-pink-600 cursor-pointer text-black">Add User</button>
            </form>
        </div>
    )
}
export default Form;