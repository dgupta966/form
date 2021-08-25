import React, { useState, useEffect } from "react";

import { Avatar, Grid, Paper, TextField } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

import "./main.css";

const Main = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [printCity,setPrintCity] = useState("");

  const [msg,setMsg] = useState("");

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
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=8add6899e23e3ceef4633109f1b4ad7d&units=metric";
  Http.open("GET", url);
  Http.send();
  Http.onload = () => {
    a = JSON.parse(Http.responseText);
    console.log(a);
  };
  console.log(a);

  const print = () => {
    const next2 = () => {
      for (let z in a) {
        if (z == "main") {
          for (let w in a[z]) {
            //console.log(w);
            if (w == "temp") {
              setTemp(a[z][w]);
              console.log(a[z][w]);
            } else if (w == "temp_min") {
              setMinTemp(a[z][w]);
              console.log(a[z][w]);
            } else if (w == "temp_max") {
              setMaxTemp(a[z][w]);
              console.log(a[z][w]);
              setMsg("");
            }
          }
          //    console.log(z);
        }
      }
    };

    const next = () => {
      for (let y in a) {
        if (y == "name") {
          if (a[y] == city) {
              setPrintCity(a[y]);
            next2();
          } 
        }
      }
    };
    for (let x in a) {
      if (x == "main") {
        next();
      } else  {
            if(x=="message"){
                setMsg(a[x]);
            }
        //   console.log(x);
      }
    }
  };
  const inputChangeHandler = (e) => {
    setCity(e.target.value);
    console.log(a);
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
    backgroundColor: `#009ef400`,
  };
  const tempStyle2 = {
    padding: 10,
    height: "120px",
    width: 100,
    margin: "30px 200px",
    position: "absolute",
    backgroundColor: `#009ef400`,
  };
  const tempStyle3 = {
    padding: 10,
    height: "120px",
    width: 100,
    margin: "30px 355px",
    position: "absolute",
    backgroundColor: `#009ef400`,
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>W</Avatar>
          <h3>Weather</h3>
        </Grid>
        <Grid align="center">
          <h3>{msg}</h3>
        </Grid>
        <Grid align="center">
          <TextField
            label="City"
            type="search"
            placeholder="Enter Your City"
            variant="outlined"
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid align="center"><h2>{printCity}</h2></Grid>
        <Grid className="main-grid">
          <Grid>
            <Paper elevation={10} style={tempStyle}>
              Temperature <span>{temp}</span>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={10} style={tempStyle2}>
              Max Temp <span> {maxTemp}</span>
            </Paper>
          </Grid>
          <Grid>
            <Paper elevation={10} style={tempStyle3}>
              Min Temp <span>{minTemp} </span>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Main;
