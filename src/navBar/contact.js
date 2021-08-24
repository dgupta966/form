import React from "react";
//import Home from "./home";

class Contact extends React.Component {
  handleClickToHome = () => {
    this.props.history.push("/");
    console.log(this.props);
  };
  handleClickToAbout = () => {
    this.props.history.push("/about");
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <button onClick={this.handleClickToHome}>Home</button>
          </li>
          <li>
            <button onClick={this.handleClickToAbout}>About</button>
          </li>
        </ul>
        <h2>Contact</h2>
      </div>
    );
  }
}

export default Contact;
