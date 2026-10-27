import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        count:0,
    },
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        incrementByValue:(state,action)=>{
            state.count+= action.palyload;
        }
    }

});

export const {increment,decrement,incrementByValue} = cartSlice.actions;
export default cartSlice.reducer;