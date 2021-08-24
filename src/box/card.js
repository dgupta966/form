import React, { useState } from "react";

import { Grid, Paper, TextField, Avatar, Button } from "@material-ui/core";

import "./card.css";
import { red } from "@material-ui/core/colors";

const Card = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [msg, setMsg] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const mobileChangeHandler = (e) => {
    setMobile(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const buttonClickHandler = () => {
    let sname = false;
    let semail = false;
    let smobile = false;
    let sage = false;
    let saddress = false;

    if (name === "") {
      setNameError("* Please Enter your name");
    } else if (name.length > 100) {
      setNameError("* Limit of character is not greater than 100");
    } else {
      setNameError("");
      sname = true;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
      setEmailError("* Please Enter your email");
    } else if (!email.match(mailformat)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
      semail = true;
    }

    if (mobile === "") {
      setMobileError("* Please Enter your mobile");
    } else if (mobile.length > 10 || mobile.length < 10) {
      setMobileError("* Mobile Number must be 10 digits only");
    } else {
      setMobileError("");
      smobile = true;
    }

    if (age === "") {
      setAgeError("* Please Enter your age");
    } else if (age > 85) {
      setAgeError("* Age limit 85");
    } else {
      setAgeError("");
      sage = true;
    }

    if (address === "") {
      setAddressError("* Please Enter your address");
    } else if (address.length > 200) {
      setAddressError("* Address limit 200 character");
    } else {
      setAddressError("");
      saddress = true;
    }

    setMsg("");

    if (
      sname === true &&
      semail === true &&
      smobile === true &&
      sage === true &&
      saddress === true
    ) {
      console.log("Success");
      setMsg("Success");
      resetButtonClickHandler();
    }
  };

  const resetButtonClickHandler = () => {
    setName("");
    setNameError("");
    setEmail("");
    setEmailError("");
    setAge("");
    setAgeError("");
    setMobile("");
    setMobileError("");
    setAddress("");
    setAddressError("");
  };

  const paperStyle = {
    padding: 10,
    height: "85vh",
    width: 300,
    margin: "70px auto",
    backgroundColor: `##F3F3F3`,
  };
  const avatarStyle = {
    backgroundColor: `#0077ff`,
  };

  return (
    <Grid>
       <Grid className="nav">dpm</Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          {/* <Avatar style={avatarStyle}></Avatar> */}
          <h3>Form</h3>
        </Grid>
        <Grid align="center">
          <span className="success">
            <strong>{msg}</strong>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Name"
            placeholder="Enter Your name"
            value={name}
            onChange={nameChangeHandler}
          />
        </Grid>
        <Grid align="center">
          <span>
            <small>{nameError}</small>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Email"
            placeholder="Enter Your email"
            value={email}
            onChange={emailChangeHandler}
          />
        </Grid>

        <Grid align="center">
          {" "}
          <span>
            <small>{emailError}</small>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Mobile"
            placeholder="Enter Your mobile"
            type="number"
            value={mobile}
            onChange={mobileChangeHandler}
          />
        </Grid>

        <Grid align="center">
          <span>
            <small>{mobileError}</small>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Age"
            placeholder="Enter Your age"
            value={age}
            onChange={ageChangeHandler}
          />
        </Grid>

        <Grid align="center">
          <span>
            <small>{ageError}</small>
          </span>
        </Grid>
        <Grid><br /></Grid>
        <Grid align="center">
          <textarea
            placeholder="Address"
            rows={5}
            cols={22}
            value={address}
            onChange={addressChangeHandler}
          />
        </Grid>

        <Grid align="center">
          {" "}
          <span>
            <small>{addressError}</small>
          </span>
        </Grid>
        <Grid align="center">
          <Button variant="primary" onClick={buttonClickHandler}>
            Submit
          </Button>
          <Button variant="secondary" onClick={resetButtonClickHandler}>
            Reset
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
