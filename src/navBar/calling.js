import React from "react";

class Calling extends React.Component {
  render() {
    return (
      <div>
        {this.props.attr}
        <button onClick={this.props.func}>Calling</button>
      </div>
    );
  }
}

export default Calling;
