import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
// Building store
const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
})

export default appStore;