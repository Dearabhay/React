import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App =()=>{
  const[users,setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [toggle, setToggle] = useState(false);

  const deleteUser =(id)=>{
    let filterUser = users.filter((elem,index)=>{ 
      return index !== id;
    })
    
    setUsers(filterUser);
    localStorage.setItem("users",JSON.stringify(filterUser));
    // console.log(filterUser);
  }
  const[update,setUpdate] = useState(null);
  
 
  return (
    <div className="p-3 height-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (<div className="flex flex-wrap gap-2">
        {users.map((elem )=>{
          return <Usercard setToggle={setToggle} key={elem.id} user={elem} deleteUser={deleteUser} setUpdate={setUpdate} />
        })}
        
      </div>):<div className="flex justify-center items-center h-[70%]">
        <Form setUsers={setUsers} setToggle={setToggle} users={users} update={update}/>
        </div>}
      
      
    </div>
  );
}
export default App; 