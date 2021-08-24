import React from "react";

class About extends React.Component {
  handleClickToHome = () => {
    this.props.history.push("/");
    console.log(this.props);
  };
  handleClickToContactUs = () => {
    this.props.history.push("/contact");
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
            <button onClick={this.handleClickToContactUs}>contact</button>
          </li>
        </ul>
        <h2>About</h2>
      </div>
    );
  }
}

export default About;
