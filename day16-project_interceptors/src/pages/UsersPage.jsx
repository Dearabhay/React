import React,{useEffect,useState} from "react";
import {axiosInstance} from "../config/axiosInstance"
import UserCard from "../components/UserCard"

const UsersPage=()=>{
  const[usersData,setUsersData] = useState([]);
  const[isLoading,setIsLoading] = useState(true);
  let getUserData = async ()=>{
    try{
        let res = await axiosInstance.get("/users");
        console.log(res);
        setUsersData(res.data);
        setIsLoading(false);

    }
    catch(error){
        console.log("error in users api ",error)
    }
  }
   useEffect(()=>{
    getUserData();
    },[])



if (isLoading) return (
  <div className="h-full w-full flex flex-col items-center justify-center space-y-4 py-20">
    
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    
    
    <h1 className="text-xl font-semibold text-gray-700 tracking-wide">
      Loading Users...
    </h1>
  </div>

);    return (
        <div className="grid grid-cols-3 gap-5 rounded">
            {
                usersData.map((val)=><UserCard key={val.id} user={val}/>

                )
            }
        </div>
    )
}
export default UsersPage;