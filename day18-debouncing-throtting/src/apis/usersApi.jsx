import axios from 'axios'
import React from 'react';


 export let getUsers =async ()=>{
    console.log("Apis is runnning...")

    let res = await axios.get("https://fakestoreapi.com/users");
    console.log(res.data);
}