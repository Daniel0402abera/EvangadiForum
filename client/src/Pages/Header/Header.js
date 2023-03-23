import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/evangadi_logo.png";
import "./Header.css";

function Header() {
 const [islogin,setlogin]= useState(false)


  return (
    <>
      <div className="container ">
        <div className="row header">
          <div className="logo_img col-md-6">
            <Link to="/">
              <img src={logo} alt="log" />
            </Link>
          </div>

          <div className=" col-md-4">
            <ul className="header_link">
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div className=" col-md-2">
            <Link className="header-btn " to="">
              {islogin ? "Log out" : "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
