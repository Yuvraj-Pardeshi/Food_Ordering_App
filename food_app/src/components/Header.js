import React  from "react"
import { FaCartShopping } from "react-icons/fa6";
import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
// import ReactDOM from "react-dom/client"

export const Header = ()=>{
    const [loginvalue,setloginvalue] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_IMG_URL} alt="" className="logo"/>
            </div>
            <div className="nav-items-list">
                {/* do not us <a> tag to navigate to pages, it reloads our whole page. Instead use <Link> */}
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
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