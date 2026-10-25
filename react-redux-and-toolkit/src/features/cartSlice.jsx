import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartitems:null,
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartitems=action.palyload;
        },
        removefromCart:()=>{

        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;