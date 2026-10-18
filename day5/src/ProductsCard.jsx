import React from 'react';

const ProductsCard =({product,del})=>{
   
    return(
        <div className ="p-4 border-2 h-fit flex flex-col rounded gap-4">
            <div className="w-40 h-59">
       <img src ={product.image}></img>
                </div>
                <div>
                    <h2 className="font-semibold">Name of Products-{product.title.substring(0,10)}</h2>
                    <p className="text-xs">Category-{product.category}</p>
                    <p className="text-green-600 ">Price $-{product.price}</p>
                </div>
                <button onClick={()=>del(product.id)

                } className='p-2 bg-red-600'>Delete</button>
        </div>
    )
}

export default ProductsCard;