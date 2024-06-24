import React  from "react"
import { FaCartShopping } from "react-icons/fa6";
import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useonlineStatus from "../utils/useonlineStatus";
// import ReactDOM from "react-dom/client"
import { useSelector } from "react-redux";

const Header = ()=>{
    const [loginvalue,setloginvalue] = useState("Login");
    const onlineStatus = useonlineStatus();
    // Subscribing to store using useSelector hook
    const cartItems = useSelector((store)=>store.cart.items)
    // console.log(cartItems)
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_IMG_URL} alt="" className="logo"/>
            </div>
            <div className="nav-items-list">
                {/* do not us <a> tag to navigate to pages, it reloads our whole page. Instead use <Link> */}
                <ul className="nav-items">
                    <li>Online Status:{onlineStatus ? "✅" : "🔴" } </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/cart">Cart<sup>({cartItems.length})</sup></Link> </li>
                    <button className="login-btn"
                        onClick={()=>{
                            setloginvalue(()=>{
                                loginvalue === 'Login' ? setloginvalue("Logout") : setloginvalue("Login")
                            });
                        }}
                    >{loginvalue}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;