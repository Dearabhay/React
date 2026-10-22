import React,{useState} from "react";

const About =()=>{
console.log("About is rendering...")
const[count,setCount] =useState(0);

    return(
        <div>
            <h1>About this side</h1>
            <h2>Count is {count}</h2>
            <button onClick={()=>setCount(count+1)} >Increment</button>
        </div>
    )
}
export default React.memo(About);