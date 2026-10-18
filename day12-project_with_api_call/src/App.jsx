import React,{useState,useEffect,useContext} from "react";
import axios from "axios";
import Navbar from "./compoments/Navbar.jsx";
import ProductCard from "./compoments/ProductsCart.jsx";
import CartScreen from "./pages/CartScreen.jsx";
import { MyStore } from "./context/MyContext.jsx";

const App =()=>{
  let {isCartOpen,cartItems } = useContext(MyStore);
  const [productsData,setProductData]=useState([]);
  const getProducts = async ()=>{
    try{
      let res = await  axios.get('https://fakestoreapi.com/products');
      setProductData(res.data);
    }
    catch(error){
      console.log("error in api",error);
    }
  }
 useEffect(()=>{
    getProducts();
 },[])
  
  return(
    <div className ="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? <div>
      <CartScreen />
      </div>
        
      
       : <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsData.map((elem)=>{
          let isInCart = cartItems.find((val)=>val.id===elem.id)
          return <ProductCard key={elem.id} product={elem} isInCart={isInCart} />
          })}
        </div>
        
      }
      


    </div>

  );
};
export default App;