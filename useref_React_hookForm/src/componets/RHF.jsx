import React from 'react';
import {useForm} from 'react-hook-form';

const RHF = () => {
   let {register,handleSubmit,reset,formState:{errors},}= useForm();
    console.log('App hhh Rendered');
   
  return (
      <div className="w-80 bg-white h-full flex flex-col ">
        <h1>REACT HOOK FORM</h1>
         <form onSubmit={handleSubmit((data)=>{
            console.log(data);
            reset();
         })}
         className=" p-2 border border-pink-400 rounded bg-white flex flex-col gap-4">
            <input {...register("productName")}
            className="p-2 border border-grey-400 rounded" type="text" 
            placeholder='Enter your Product name' />

            <input {...register("productPrice")}
            className="p-2 border rounded border-grey-400" type="text" 
            placeholder='Enter your Product price' />

            

            <input {...register("productImage")}
            className="p-2 border rounded border-grey-400"
            type="text" placeholder='Enter your Product image' />

            <button 
            className="p-2 border border-red-500 rounded bg-blue-700 text-white">Submit</button>
         </form>
        </div>
  )
}
export default RHF;