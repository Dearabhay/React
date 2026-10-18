import React,{useRef,useState} from 'react';


const Form = () =>{
        const formRef = useRef({});
    const [obj,setObj] = useState();
    console.log(obj);


    const handleSubmit = (e) =>{
            e.preventDefault();
            let Obje ={
        pName: formRef.current.productName.value,
        pPrice: formRef.current.productPrice.value,
        pCategory: formRef.current.productCategory.value,
        pImage: formRef.current.productImage.value,
    }
    setObj(Obje);
    }
    
  
    return(
        <div className="w-80 bg-white h-full flex flex-col ">
         <form onSubmit={handleSubmit} 
         className=" p-2 border border-pink-400 rounded bg-white flex flex-col gap-4">
            <input ref={(e)=>(formRef.current.productName =e )} 
            className="p-2 border border-grey-400 rounded" type="text" 
            placeholder='Enter your Product name' />

            <input ref={(e)=>formRef.current.productPrice=e}
            className="p-2 border rounded border-grey-400" type="text" 
            placeholder='Enter your Product price' />

            <span>Select Category</span>
            <select ref={(e)=> formRef.current.productCategory=e}>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Food">Food</option>
            </select>

            <input ref={(e)=>formRef.current.productImage=e}
            className="p-2 border rounded border-grey-400"
            type="text" placeholder='Enter your Product image' />

            <button 
            className="p-2 border border-red-500 rounded bg-blue-700 text-white">Submit</button>
         </form>
        </div>
    )   
}
export default Form;