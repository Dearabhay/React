import React,{useEffect,useState} from "react"
import axios from "axios"

const App =()=>{
  const [searchData,setSearchData]= useState(null);
  const[productData,setProductData]= useState([]);
  let getProduct = async ()=>{
    try{
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProductData(res.data);
    }
    catch(error){
      console.log(error);
    }
  } 
  let filteredData =()=>{
    console.log("filter Data");
    let result = productData.filter((val)=>{
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductData(result);
  }

  useEffect(()=>{
    if(!searchData) return ;
    let timeout = setTimeout(()=>{
          filteredData();

    },700);
    return () => clearTimeout(timeout);
  },[searchData]);
  
  useEffect(()=>{
    getProduct();
  },[]);



  return(
    <div>
      <h1>App is Rendering....</h1>
      <input style={{padding:"10px 30px"}} className="p-2 border flex flex-cols bg-green-400 font-bold text-color-white rounded"
       type="text" placeholder="search products...."
       onChange={(e)=> setSearchData(e.target.value)}></input>
      {
        productData.map((val)=>{
            return<h1 key={val.id} >{val.title}</h1>
        })
      }
    </div>
  )
}
export default App;