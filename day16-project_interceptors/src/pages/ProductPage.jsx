import React,{useEffect,useState} from "react";
import {axiosInstance} from "../config/axiosInstance"
import ProductCard from "../components/ProductCard";


const ProductPage=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [productData,setProductData] = useState([]);
    let getProductData = async ()=>{
        try{
            let res = await axiosInstance.get("/products");;
            setProductData(res.data);
            console.log(res);
            setIsLoading(false);
        }catch(error){
            console.log("error in api",error);
        }}

useEffect(()=>{
    getProductData();
},[])


if (isLoading) {
    return (
      <div className="h-96 w-full flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-xl font-semibold text-gray-700 tracking-wide">
          Loading Product...
        </h1>
      </div>
    );
  }

    return (
        <div className="grid grid-cols-3 gap-5 rounded">
            {
                productData.map((val)=><ProductCard key={val.id} product={val}/>)
            }
        </div>
    )
}
export default ProductPage;