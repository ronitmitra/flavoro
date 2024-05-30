import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addTocart: (state, action) => {
            const itemexist = state.cart.find(item=>item.id === action.payload.id)
            if(itemexist){
                state.cart = state.cart.map(item=>item.id === action.payload.id ? {...item,qty:item.qty+1} :item)
            }else{
                state.cart.push(action.payload)
            }
        },
        removeFromcart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        IncrementFn:(state,action)=>{
            state.cart = state.cart.map(item=>item.id === action.payload.id ? {...item,qty:item.qty + 1}:item)
            // state.cart = state.cart.map(item=>item.id === action.payload.id ? {...item,price:item.price+item.price}:item)
        
        },
        DecrementFn:(state,action)=>{
            state.cart = state.cart.map(item=>item.id===action.payload.id ? {...item,qty:item.qty - 1}:item)
        },
    },
})
export const { addTocart, removeFromcart,IncrementFn, DecrementFn } = Cartslice.actions;
export default Cartslice.reducer;