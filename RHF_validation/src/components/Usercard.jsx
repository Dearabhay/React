import React from 'react';
const Usercard =({user,deleteUser ,setUpdate,setToggle})=>{

 
    return (
        <div className="p-4 border bg-grey border-grey rounded flex flex-col gap-2 ">
                <div className="h-40 w-40">
                    <img className="object-cover h-full rounded-xl" src={user.url} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <h1>Name:-{user.Name}</h1>
                    <p className="text-sm">Email:{user.Email}</p>
                    <p className="text-sm">Contact:{user.number}</p>
                </div>
                <div className="flex gap-2 justify-between w-full">
                    <button onClick={()=>deleteUser(user.id)} className="bg-yellow-600 p-1 text-white border rounded">Delete</button>
                    <button onClick={()=>{setUpdate(user); setToggle((prev)=> !prev)}} className="bg-red-600 p-1 text-white border rounded">Update</button>
                </div>
        </div>
    );
}
export default Usercard;