import React,{useContext,useEffect,useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { MyShop } from './context/MyShop';

const App =()=>{
  let [toggle,setToggle] = useState(false); 
  let {count,setCount} =useContext(MyShop);
  useEffect(()=>{
    console.log("App rendering... 1");
  },[toggle])
  console.log("App rendering... ")
  return(
      <div className=" flex flex-col gap-4 items-center justify-center h-screen bg-gray-700">
        <h1>hello{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setToggle(prev =>!prev)}>Toggle</button>
        {/* <Home/> */}
        {toggle ? <About/> :<Contact/>}
        {/* <About/>
        <Contact/> */}
      </div>
  )
}
export default App;