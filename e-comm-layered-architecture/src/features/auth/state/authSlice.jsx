import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:true,
    },
    reducers:{
        addUsers:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated =true; 
            state.isLoading=false
        },
        removeUsers:(state)=>{
            state.user= null;
            state.isAuthenticated= false;
            state.isLoading=false

        },
    }
});
export const {addUsers,removeUsers} = authSlice.actions;
export default authSlice.reducer;