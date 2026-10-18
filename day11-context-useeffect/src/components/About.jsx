import React,{useEffect} from 'react';
const About =()=>{
    let interval = setInterval(()=>{
        console.log("i m triggered every 1 second");
    },1000);
    useEffect(()=>{

    console.log("About rendering...")
    return()=>{
        clearInterval(interval);
        console.log("i m triggered when component unmounts");
    }
    },[]);
    return(
        <div>
            <h1>About Page</h1>
        </div>
    )
}
export default About;