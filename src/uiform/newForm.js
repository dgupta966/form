/////// work on success message

import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";

import "./newForm.css";

const NewForm = () => {
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
    if (name === "") {
      setNameError("* Please Enter your name");
    } else if (name.length > 100) {
      setNameError("* Limit of character is not greater than 100");
    } else {
      setNameError("");
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
      setEmailError("* Please Enter your email");
    } else if (!email.match(mailformat)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }

    if (mobile === "") {
      setMobileError("* Please Enter your mobile");
    } else if (mobile.length > 10 || mobile.length < 10) {
      setMobileError("* Mobile Number must be 10 digits only");
    } else {
      setMobileError("");
    }

    if (age === "") {
      setAgeError("* Please Enter your age");
    } else if (age > 85) {
      setAgeError("* Age limit 85");
    } else {
      setAgeError("");
    }

    if (address === "") {
      setAddressError("* Please Enter your address");
    } else if (address.length > 200) {
      setAddressError("* Address limit 200 character");
    } else {
      setAddressError("");
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
    <div>
      <div className="nav">exm.com</div>
      <div className="box">
        <Grid container justify="center" className="form-container">
          {/* <Paper className={classes.paper} /> */}
          <Grid container lg={12} md={12} xs={12} justify="center">
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={nameChangeHandler}
              placeholder="Enter you name"
            />
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <small>{nameError}</small>
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <TextField
              label="email"
              name="email"
              value={email}
              onChange={emailChangeHandler}
              placeholder="Enter you email"
            />
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <small>{emailError}</small>
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <TextField
              label="mobile"
              name="mobile"
              type="number"
              value={mobile}
              onChange={mobileChangeHandler}
              placeholder="Enter you mobile"
            />
          </Grid>

          <Grid container lg={12} md={12} xs={12} justify="center">
            <small>{mobileError}</small>
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <TextField
              label="age"
              type="number"
              value={age}
              onChange={ageChangeHandler}
              placeholder="Enter you age"
            />
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <small>{ageError}</small>
          </Grid>
          <Grid>
            {" "}
            <br />
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <textarea
              name="address"
              rows="5"
              cols="25"
              placeholder="Address"
              value={address}
              onChange={addressChangeHandler}
            />
          </Grid>
          <Grid container lg={12} md={12} xs={12} justify="center">
            <small>{addressError}</small>
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
    </div>
  );
};

export default NewForm;
