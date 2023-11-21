import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:[], //holds more than one item
    reducers:{
        //function to add items into cart
        addToCartList : (state,action)=>{
            state.push(action.payload)
        },
        removeFromCartList:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },

        //function to remove all items from cart

        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addToCartList,removeFromCartList,emptyCart}= cartSlice.actions
export default cartSlice.reducer