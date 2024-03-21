import React  from "react"
import { FaCartShopping } from "react-icons/fa6";
import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
// import ReactDOM from "react-dom/client"

export const Header = ()=>{
    const [loginvalue,setloginvalue] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_IMG_URL} alt="" className="logo"/>
            </div>
            <div className="nav-items-list">
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><FaCartShopping /></li>
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