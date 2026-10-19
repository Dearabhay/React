import{createContext,useState} from "react"
export const Auth = createContext();

export const AuthProvider =({children})=>{
 const[registerUser,setRegisterUser] =useState(JSON.parse(localStorage.getItem("registerUser")) ||[]) 
 const[loggedInUser,setLoggedInUser]=useState(JSON.parse(localStorage.getItem('loggedInUser')));

 console.log("registerUser" ,registerUser);
 console.log("LoggedInUser" ,loggedInUser);

    return <Auth.Provider value={
        {registerUser,setRegisterUser,
        loggedInUser,setLoggedInUser}}>{children}</Auth.Provider>
}

