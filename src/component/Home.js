import React, { Component } from "react";
// import HomeLeft from "./HomeLeft";
// import HomeRight from "./HomeRight";
import "../component/styles/Home.css";
import About from "./About";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <About />
        <Contact />
      </div>
    );
  }
}
export default Home;
