import React from 'react';
import ProductCart from '../components/ProductCart'
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Filters from '../components/Filters'
import {useProduct} from '../hooks/ProductHooks'

const ShopPage =()=>{ 
   
  let{filteredProducts,filterProducts,isLoading} = useProduct();
    return (
    <div className="min-h-screen bg-slate-950 p-6 text-white rounded">
      <Filters filterProducts={filterProducts}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          filteredProducts.map((val) => (
            <ProductCart key={val.id} product={val} />
          ))
        ) 
        }
      </div>
    </div>
  );
}
export default ShopPage;