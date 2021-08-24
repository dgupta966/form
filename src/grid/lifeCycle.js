import React from "react";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
class LifeCycle extends React.Component {
  state = { first_textField: "Deepak" };
  handleChange = (e) => {
    this.setState({ first_textField: e.target.value });
    console.log(e.target.value);
  };
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUpdate() {
      console.log("component_Will_Update");
  }
  componentDidMount() {
      console.log("component_Did_Mount");
  }
  componentWillMount() {
    console.log("component_Will_Mount");
  }
//   constructor(){
//       console.log("constructor");
//   }
  shouldComponentUpdate() {
    console.log("should_Component_Update");
    return true;
  }
  componentWillUnmount() {
    console.log("component_Will_Unamount");
    //Called immediately before a component is destroyed or make a clean up activity
  }
   render() {
    return (
      <Grid container>
        <Grid container xs={12} lg={6} justify="center">
          <TextField
            id="standard-basic"
            label="First"
            value={this.first_textField}
            onChange={this.handleChange}
          />
        </Grid>
       </Grid> 
    );
  }
}

export default LifeCycle;

