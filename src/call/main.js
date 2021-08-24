import React from "react";
import Calling from "./calling";

class Main extends React.Component {
  display = () => {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  };
  render() {
    return (
      <div>
        <Calling func={this.display} />
      </div>
    );
  }
}

export default Main;
