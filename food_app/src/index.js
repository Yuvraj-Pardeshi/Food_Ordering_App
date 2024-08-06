import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/redux/appStore.js";
import { auth } from "./utils/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/redux/userSlice.js";
import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import Login from "./components/Login.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Cart from "./components/Cart.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css";

// App Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Authentication Handler Component
const AuthHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  // This component doesn't render anything on the screen.
};

// Router Configuration
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContent />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/restaurantinfo/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
    errorElement: <Error />
  }
]);

// Root Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={approuter}>
      <AuthHandler /> {/* Handles authentication logic */}
      <App /> {/* Main application */}
      <ToastContainer />
    </RouterProvider>
  </Provider>
);
