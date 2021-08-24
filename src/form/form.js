import React from "react";

class Form extends React.Component {
  handleProps = () => {
      console.log(this.props);
  };
  handleClick = () => {
    this.props.history.push("/");
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <p>Hello world</p>
        <div>
            {this.props.attr}
          <button onClick={this.handleClick}>Switch</button>
          <button onClick={this.handleProps}>Props</button>
        </div>
      </div>
    );
  }
}

export default Form;
