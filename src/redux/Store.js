import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slices/Cartslice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
const Store = configureStore({
    reducer:{
        cart:Cartslice,
        category:CategorySlice,
        search:SearchSlice
    },
})
export default Store