import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import AboutUs from "./components/AboutUs.js"
import ContactUs from "./components/ContactUs.js"
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import "../index.css"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
const App = ()=>{
    return (
         <div className="app">
            <Header />
            <Outlet />
         </div>
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
            }
        ],
        errorElement : <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />)

