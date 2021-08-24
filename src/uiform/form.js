import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
//import "./form.css";

//reset button

const Form = () => {
  // const [info, setInfo] = useState({
  //   username: "Deepak",
  //   email: "",
  // });
  // const nameChangeHandler = (e) => {
  //   let uname = e.target.name;
  //   let uvalue = e.target.value;
  //   setInfo({[uname] :uvalue});
  // }
  // const buttonClickHandler = () => {
  //   if(info.username === ""){
  //     console.log("name is empty")
  //   }
  // else {
  //     let val = "";
  //   setInfo({[info.username]:val});
  // }
  // let val = "";
  // setInfo({[info.username]:val});

  //  setInfo(info.username);
  // console.log(info);
  //  console.log(info.username);
  // }

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const nameChangeHandler = (e) => {
    let x = e.target.value;
    console.log(x);
    setName(e.target.value);
    console.log(e.target.name);
  };
  const emailChangeHandler = (e) => {
    let x = e.target.value;
    console.log(x);
    setEmail(e.target.value);
  };
  const buttonClickHandler = () => {
    if (name === "") {
      setNameError("Please Enter Name");
      console.log("Please Enter Name");
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("Please Enter email");
      console.log("Please Enter email");
    } else {
      setEmailError("");
    }
    setName("");
    setEmail("");
  };
  return (
    <Grid container>
      <Grid container>Deepak </Grid>
      <Grid container className="form-container" justify="center">
        <Grid container justify="center">
          <TextField
            id="standard-basic"
            label="Name"
            name="username"
            min="1"
            max="100"
            value={name}
            onChange={nameChangeHandler}
          />
        </Grid>
        <Grid>
          <span>
            <small>{nameError}</small>
          </span>
        </Grid>
        <Grid container justify="center">
          <TextField
            id="standard-basic"
            label="Email"
            value={email}
            onChange={emailChangeHandler}
          />
        </Grid>
        <Grid>
          <span>
            <small>{emailError}</small>
          </span>
        </Grid>
        <Grid container justify="center">
          <TextField id="standard-basic" label="Mobile" />
        </Grid>
        <Grid container justify="center">
          <TextField id="standard-basic" label="Age" />
        </Grid>
        <Grid container justify="center">
          <TextField id="standard-basic" label="Address" />
        </Grid>
        <Grid>
          <button onClick={buttonClickHandler}>Submit</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
