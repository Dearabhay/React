import {axiosInstance} from '../config/axiosinstance'

export let getProductsDataApi = async () =>
     {
    try {
        console.log("api is calling...")
        let res = await axiosInstance.get("/products");
        return res.data.products || []; 
    } catch (error) {
        console.log("Error fetching products:", error);
        return [];
    }
}; 