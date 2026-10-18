import Rect from 'react';

const Navbar =({setToggle})=>{
  return (
    <div className="p-4 flex rounded items-center justify-between bg-black">
         <div >
          <img className="rounded-full" width={40} src="https://tse4.mm.bing.net/th/id/OIP.z2F78QVOUPcyHRhXTYGSyAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3.svg.png" 
          alt="logo" />
         </div>
           <div className="flex gap-6 font-semibold">
            <p className="text-white">Home</p>
            <p className="text-white">About</p>
            <p className="text-white">Contact</p>
           </div>
           <button onClick={()=>setToggle(prev=>!prev)} className="p-2 bg-red cursor-pointer text-white">Create User</button>
    </div>
  );
}   
export default Navbar;