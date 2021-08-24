import React from "react";
// import About from "./about";
// import Contact from "./contact";
import Calling from "./calling";

class Home extends React.Component {
  display = () => {
    for(let i=1; i<=10; i++) {
      console.log(i);
    }
  };
  handleClickToAbout = () => {
    this.props.history.push("/about");
    console.log(this.props);
    //console.log(this.props.history.location.pathname);
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
            <button onClick={this.handleClickToAbout}>About</button>
          </li>
          <li>
            <button onClick={this.handleClickToContactUs}>contact</button>
          </li>
        </ul>
        <h1>Home</h1>
        {/* <input type="text" value={this.inputVal}  onChange={this.inputChangeHandler} /> */}
        <Calling attr={"Deepak"} func={this.display} />
      </div>
    );
  }
}

export default Home;
