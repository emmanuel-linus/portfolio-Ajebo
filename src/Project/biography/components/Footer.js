import React, { Component } from "react";
import "../styles/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <main className="footerBody">
        <div className="footerList">
          <div className="jungle">
            <ul>
              Explore
              <li>
                <a href="Biography">Home</a>
              </li>
              <a href="Contact">
                <li>Contact</li>
              </a>
              <a href="projects">
                <li>Projects</li>
              </a>
              <a href="About">
                <li>About</li>
              </a>
            </ul>
          </div>
          <div className="den">
            <ul>
              Legal
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="lio">
            <ul>
              Visit
              <a href="Gallery">
                <li>Photos</li>
              </a>
              <li>Videos</li>
            </ul>
          </div>
          <div className="roar">
            <ul className="fire">
              Connect With Me
              <a href="https://www.facebook.com/mmoblaze" target="_blank">
                <FaFacebookSquare className="fa" />
              </a>
              <a
                href="https://www.linkedin.com/in/moses-ajebo-nongoatse-bsc-mpr-1797a776"
                target="_blank"
              >
                <FaLinkedin className="ba" />
              </a>
              <a href="https://instagram.com/ajebowazobiafm" target="_blank">
                <FaInstagram className="ca" />
              </a>
              <a href="https://twitter.com/ajebowazobiafm" target="_blank">
                <FaTwitterSquare className="da" />
              </a>
              <a href="https://wa.me/2348065763542" target="_blank">
                <FaWhatsappSquare className="ea" />
              </a>
            </ul>
          </div>
        </div>

        {/* <hr className="footerRule" /> */}
        <div className="footerPar">
          <p> All materials &copy; Moses Nongoatse 2019 </p>
          <p>
            Made With{" "}
            <span style={{ color: "red", fontSize: 40 }}>&#9829;</span> by
            &nbsp;
            <a href="https://twitter.com/koollykice73" target="_blank">
              ShadowMask
            </a>
          </p>
        </div>
      </main>
    );
  }
}
export default Footer;
