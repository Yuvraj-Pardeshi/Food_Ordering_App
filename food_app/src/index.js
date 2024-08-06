import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import AboutUs from "./components/AboutUs.js"
import ContactUs from "./components/ContactUs.js"
import Login from "./components/Login.js"
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import "../index.css"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import {Provider} from "react-redux"
import appStore  from "./utils/redux/appStore.js"
import Cart from "./components/Cart.js"
const App = ()=>{
    return (
        <Provider store={appStore} >
            <div className="app">
                <Header />
                <Outlet />
            </div>
         </Provider>
    )
}

const approuter = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "/",
                element : <MainContent />
            },
            {
                path : "/aboutus",
                element : <AboutUs />
            },
            {
                path : "/contactus",
                element : <ContactUs />
            },
            {
                path : "/restaurantinfo/:resId",
                element : <RestaurantMenu />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/login",
                element : <Login />
            }
        ],
        errorElement : <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />)

