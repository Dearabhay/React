import React,{useState} from "react";

const Register = ({setToggle,setUser}) => {
    const [formData,setFromData] = useState({
        name:"",
        email:"",
        password:"",
        image:""
    });
    
    

    const handleChange =(e)=>{
        let {name,value} = e.target;
        setFromData({...formData,[name]:value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser((prev)=>[...prev,formData]);
        setFromData({
            name:"",
            email:"",
            password:"",
            image:""
        });
    }
  return (
    <div className ="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      
    <h1>Register</h1>
     <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
    <input required value={formData.name} name="name" onChange={handleChange} className="p-2 border border-gray-400 rounded" type="text" placeholder="Enter Your Name " />
    <input required value={formData.email} name="email" onChange={handleChange} className="p-2 border border-gray-400 rounded" type="email" placeholder="Enter Your Email " />
    <input required value={formData.image} name="image" onChange={handleChange} className="p-2 border border-gray-400 rounded" type="url" placeholder="Enter Your Image Url " />
    <input required value={formData.password} name="password" onChange={handleChange} className="p-2 border border-gray-400 rounded" type="password" placeholder="Set Password" />
    <button className="p-2 bg-blue-600 text-white rounded">Login</button>

  </form>
  <p>Already have an Account? <span onClick={()=>setToggle((prev)=>!prev)} className="text-blue-600 cursor-pointer">Login Here</span> </p>

    </div>
  );
}

export default Register;