import React from "react";

class Props extends React.Component {
  data = () => {
    for (let i = 0; i < this.props.name.length; i++) {
      console.log(this.props.name[i]);
    }
  };
  render() {
    return (
      <div>
        {/* {for(let x=0;)} */}
        {/* {this.props.name} */}
        <button onClick={this.data}>Fetch</button>
      </div>
    );
  }
}

export default Props;
