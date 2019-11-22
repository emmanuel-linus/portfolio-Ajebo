import React, { Component } from "react";
import Header from "./Header";
import Bio from "./Bio";
import Footer from "./Footer";
import "../styles/Biography.css";

class Biography extends Component {
  render() {
    return (
      <body className="bioBody">
        <Header />
        <Bio />
        <Footer />
      </body>
    );
  }
}
export default Biography;
