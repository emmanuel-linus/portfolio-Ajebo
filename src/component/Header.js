import React from "react";
import "../component/Main.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Header() {
  return (
    <div className="front">
      <ul>
        <li className="flit">JOMBAKYIOn</li>
      </ul>
      <a href="#">
        <FaFacebookSquare />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaMedium />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaTwitterSquare />
      </a>
    </div>
  );
}
export default Header;
