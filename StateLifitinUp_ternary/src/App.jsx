 import React,{useState} from 'react';
 import Login from './components/Login';
 import Register from './components/Register';
 import Usercard from './components/Usercard';

 const App = () => {
    const [toggle, setToggle] = useState(false);
    const[user,setUser] = useState([]);
    return (
        <div className="bg-gray-300 h-screen flex justify-center items-center">
           
         {toggle ? user.map((elem)=><Usercard user={elem} />) : <Register setUser={setUser}setToggle={setToggle} />}      
    </div>
    );
 }
 export default App; 
//  <Login setToggle={setToggle}/>