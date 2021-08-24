import React from "react";

class Calling extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.func}>Calling</button>
      </div>
    );
  }
}

export default Calling;
