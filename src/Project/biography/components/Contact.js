import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import image from "../styles/classic.jpg";
import "../styles/Contact.css";

class Contact extends Component {
  render() {
    return (
      <main className="formBody">
        <Header />

        <div className="form">
          <img src={image} alt="classic man" />
          <form>
            <h2> SAY HELLO </h2>

            <div className="hi">
              <label>
                <input type="text" method="POST" placeholder="NAME" />
              </label>
              <br />

              <label>
                <input type="text" method="POST" placeholder="EMAIL" />
              </label>
              <br />

              <label>
                <input type="text" method="POST" placeholder="MESSAGE" />
              </label>
              <br />

              <button> SEND </button>
            </div>
          </form>
        </div>

        <Footer />
      </main>
    );
  }
}
export default Contact;
