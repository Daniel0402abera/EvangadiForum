import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/evangadi_logo.png'
import './Header.css'

function Header() {
  return (
    <>
      <section className="header">
        <div className="logo_img">
          <Link to="/">
            <img src={logo} alt="log" />
          </Link>
        </div>
        <div className="header_container">
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

            <li>
              <Link
                className="header-btn"
                to=""
                style={{ textDecoration: "none" }}
              >
                <b>Sign in</b>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header