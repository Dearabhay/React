import React,{useState} from 'react';

const App =()=>{

  let [user,setUser] = useState({
    name:"Aman",
  })
  let [count,setCount] =useState(0);
  return(
    <div>
      <h1>Count is{count}</h1>
      <h1>Name is-{user.name}</h1>
      <button onClick={()=>{setCount(count+1)}}>Count incremenet</button>
      <button onClick={()=>{setUser({name:"baman"})}}>Name Change</button>
    </div>
  )
}
export default App;