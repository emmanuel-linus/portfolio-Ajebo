import React, { Component } from "react";
// import { FaAlignJustify } from "react-icons";

export default class Nav extends Component {
  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div>
        <div className="tell">
          <nav>MicroPhoneController</nav>
          <div className="drop">
            <button onClick={this.toggle}> Dropdown </button>

            <div>{this.state.toggle && <p>Hello World</p>}</div>
          </div>
        </div>
      </div>
    );
  }
}
