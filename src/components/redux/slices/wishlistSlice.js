import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[], //wishlist may have more than one item
    reducers:{
        //actions
        //funtion/logic to add items into wishlist array
        addToWishList : (state,action)=>{
            state.push(action.payload)
        },
        //function to remove items from the wishlist
        removeFromWishlist :(state, action)=>{
            //filter returns a new array satisfying the condition, inorder to add new array into the state we need to return it
           return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishList,removeFromWishlist}= wishlistSlice.actions
export default wishlistSlice.reducer