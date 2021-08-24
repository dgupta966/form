import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

import "./design.css";

const Design = () => {
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

  return (
    <div className="container">
      <Grid className="nav">dpm</Grid>
      <Grid container justify="center" className="form">
        <Grid>
          <span className="success">
            <strong>{msg}</strong>
          </span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <TextField
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={nameChangeHandler}
          />
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <span>
            <small>{nameError}</small>
          </span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <TextField
            label="Email"
            placeholder="Enter your Email"
            value={email}
            onChange={emailChangeHandler}
          />
        </Grid>
        <Grid>
          <span>
            <small>{emailError}</small>
          </span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <TextField
            label="Mobile"
            placeholder="Enter your Mobile"
            type="number"
            value={mobile}
            onChange={mobileChangeHandler}
          />
        </Grid>
        <Grid>
          <span>
            <small>{mobileError}</small>
          </span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <TextField
            label="Age"
            placeholder="Enter your Age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
        </Grid>
        <Grid>
          <span>
            <small>{ageError}</small>
          </span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <br />{" "}
        </Grid>
        <Grid>
          <span></span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <textarea
            rows="5"
            cols="22"
            placeholder="Address"
            value={address}
            onChange={addressChangeHandler}
          />
        </Grid>
        <Grid>
          <span>
            <small>{addressError}</small>
          </span>
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <br />{" "}
        </Grid>
        <Grid container lg={12} md={12} xs={12} justify="center">
          <Button variant="primary" onClick={buttonClickHandler}>
            Submit
          </Button>
          <Button variant="secondary" onClick={resetButtonClickHandler}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Design;
