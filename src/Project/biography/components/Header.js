import React, { Component } from "react";
import "../styles/Header.css";
import { FaBullhorn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="headerBody">
        <div className="headerName">
          <a href="">
            <FaBullhorn />
          </a>
          <ul className="myName">
            <li>MOSES NONSOGTE (AJEBO)</li>
          </ul>
        </div>

        <div className="headerName">
          <ul className="myList">
            <NavLink to="/">
              <li> HOME </li>
            </NavLink>
            <NavLink to="/about">
              <li> ABOUT </li>
            </NavLink>
            <NavLink to="/contact">
              <li> CONTACT </li>
            </NavLink>
            <NavLink to="/Project">
              <li> PROJECTS </li>
            </NavLink>
          </ul>

          <h2>MENU</h2>
        </div>
      </div>
    );
  }
}
export default Header;
