import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

//import "./contact.css";

const SirAPI = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    console.log("first use effect console");
  });

  const handleClick = () => {
    const http = new XMLHttpRequest();

    http.open("GET", "https://api.thecatapi.com/v1/images/search");
    http.send();

    http.onload = () => {
      let a = JSON.parse(http.responseText);
      let tempArr = [...arr];
      tempArr.push(a[0]);
      setArr(tempArr);
    };
    console.log(arr);
  };

  return (
    <div className="homeBody">
      <button onClick={handleClick}>Click me!</button>
      <Grid container xs={12} justify="center">
        {arr.map((e) => {
          return (
            <Grid container xs={3}>
              <Grid container xs={12} justify="center">
                {e.id}
              </Grid>
              <Grid container xs={12} justify="center">
                <img
                  alt={e.id}
                  src={e.url}
                  style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SirAPI;
