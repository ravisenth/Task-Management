import { createSlice } from "@reduxjs/toolkit";
import Cred from './Main.json';

export const Slice=createSlice({

    name:"Ravi",
    initialState:{
        cred:Cred.cred,
        arr:[],
        arr1:[],
        login:false
    },

    reducers:{
            update:(state,action)=>{
                state.login=action.payload
            } ,
            update1:(state,action)=>{
                state.arr=action.payload
            }  ,
            update2:(state,action)=>{
                state.arr1=action.payload
            }  
    }
})
export default Slice.reducer;
export const{update,update1,update2}=Slice.actions
