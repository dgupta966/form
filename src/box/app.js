import React, { useState, useEffect } from "react";

import { Avatar, Grid, Paper, TextField } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

import "./app.css";

const App = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [location, setLocation] = useState("fetching location");
  const [state, setState] = useState("fetching state");
  const [abb, setAbb] = useState("state abbreviation");
  useEffect(() => {
    // console.log("first use effect console");
  });
  //   const inputChangeHandler = (e) => {
  //     setCity(e.target.value);
  //   };
  let a;
  const Http = new XMLHttpRequest();
  const url = "https://api.zippopotam.us/us/90210";
  Http.open("GET", url);
  Http.send();
  Http.onload = () => {
    a = JSON.parse(Http.responseText);
  };
  console.log(a);

  const print = () => {
    for (let x in a) {
      if (x === "country") {
        setCountry(a[x]);
      }

      console.log(a[x]);
      if (x === city) {
        for (let y of a[x]) {
          console.log(y);
          for (let z in y) {
            console.log("z = " + z);
            if (z === "place name") {
              setLocation(y[z]);
            } else if (z === "state") {
              setState(y[z]);
            } else if (z === "state abbreviation") {
              setAbb(y[z]);
            }
            console.log(y[z]);
          }
        }
      }
      // console.log(y);
    }
  };
  const inputChangeHandler = (e) => {
    setCity(e.target.value);
    //console.log(a);
    print();
  };

  const paperStyle = {
    padding: 10,
    height: "70vh",
    width: 500,
    margin: "50px auto",
    backgroundColor: `#00a6ff`,
  };
  const avatarStyle = {
    backgroundColor: `#0077ff`,
  };
  const tempStyle = {
    padding: 10,
    height: "120px",
    width: 100,
    margin: "30px 40px",
    position: "absolute",
    backgroundColor:`#009ef400`,
  };
  const tempStyle2 = {
    padding: 10,
    height: "120px",
    width: 100,
    margin: "30px 200px",
    position: "absolute",
    backgroundColor:`#009ef400`,
  };
  const tempStyle3 = {
    padding: 10,
    height: "120px",
    width: 100,
    margin: "30px 355px",
    position: "absolute",
    backgroundColor:`#009ef400`,
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>W</Avatar>
          <h3>Weather</h3>
        </Grid>
        <Grid align="center">
          <TextField
            label="City"
            placeholder="Enter Your City"
            variant="outlined"
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid>
          <Grid>
            <Paper elevation={10} style={tempStyle}>
              Country <span>{country} </span>
              Location <span>{location} </span>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={10} style={tempStyle2}>
              State <span> {state} </span>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={10} style={tempStyle3}>
              Abbreviation <span> {abb} </span>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default App;
