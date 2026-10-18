import React,{useState} from "react";
// import Contact from './components/Contact.jsx';
// import About from './components/About.jsx';
// import Card from './components/Card.jsx';
import From from "./components/From.jsx"

const Web =()=>{
    //brute force method

    // const [name, setName] = useState("");
    // console.log(name); 

    //better method object method
    const [formData, setFormData] = useState({
        // name:"",
        // email:"",
        // password:""
    })
    // console.log(formData);  

    //optimized method
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setFormData({...formData, [name]:value})
    }


    return (
        <div className="flex flex-col gap-5 w-60">

            {/* //brute force method */}
            {/* <input onChange={(e)=> setName(e.target.value)} className="border-2"  type="text" placeholder="Name"></input> 
            <input className="border-2" type="text" placeholder="Email"></input>
            <input className="border-2" type="text" placeholder="Password"></input> */}
{/* 
            <input onChange={(e)=> setFormData({...formData ,name: e.target.value})} className="border-2"  type="text" placeholder="Name"></input> 
            <input onChange={(e)=> setFormData({...formData,email:e.target.value})}   className="border-2" type="text" placeholder="Email"></input>
            <input onChange={(e)=> setFormData({...formData,password:e.target.value})} className="border-2" type="text" placeholder="Password"></input>
            <button className="border-2">Submit</button> */}


            
            <input onChange={handleChange} className="border-2"  type="text" placeholder="Name"></input> 
            <input onChange={handleChange}   className="border-2" type="text" placeholder="Email"></input>
            <input onChange={handleChange} className="border-2" type="text" placeholder="Password"></input>
            <button className="border-2">Submit</button>

        </div>
    )
}
export default Web;