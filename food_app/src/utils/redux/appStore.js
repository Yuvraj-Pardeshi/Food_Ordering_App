import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice";
// Building store
const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        user : userReducer
    }
})

export default appStore;