import React,{useRef} from 'react';
import Form from './componets/Form';
import RHF from './componets/RHF';

const App = () => {
 
  // let inpRef = useRef();
  return(
    <div className="h-screen bg-grey-300 w-full p-5">
      <h1>Hello</h1>
      {/* <Form /> */}
      <RHF />
      {/* <input ref={inpRef} className="p-2 border-gray-500 rounded border" type="text" placeholder='Enter your Product name' />
      <button onClick={()=>console.log(inpRef.current.value)} className="p-2 border bg-blue-600 text-white rounded">Submit</button> */}
    </div>
  )
}

export default App;