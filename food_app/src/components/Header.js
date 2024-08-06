import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loginvalue, setloginvalue] = useState("Login");
  const navigate = useNavigate();
  const onlineStatus = useonlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        if (loginvalue === "Login") {
          navigate("/login");
          setloginvalue("Logout");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        // Handle sign-out error
        console.error("Sign-out error:", error);
      });
  };

  // Do not render Header on the login page
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_IMG_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-items-list">
        <ul className="nav-items">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart<sup>({cartItems.length})</sup>
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={handleSignOut}
          >
            {loginvalue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
