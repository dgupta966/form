import React, { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [location, setLocation] = useState("New");
  const [state, setState] = useState("s");
  useEffect(() => {
    // console.log("first use effect console");
  });
  const Http = new XMLHttpRequest();
  const url = "https://api.zippopotam.us/us/90210";
  Http.open("GET", url);
  Http.send();
  Http.onload = () => {
    let a = JSON.parse(Http.responseText);
    //console.log(a);
    for (let x in a) {
      console.log(a[x]);
      if (x === "places") {
        for (let y of a[x]) {
          console.log(y);
          for (let z in y) {
              console.log("z = " + z);
              if(z==="place name"){
                  setLocation(y[z]);
              }
              else if (z=== "state") {
                  setState(y[z]);
              }
            console.log(y[z]);
          }
        }
      }
      // console.log(y);
    }
  };
  const changeHandler = (e) => {
    
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="input-search">
          <input type="search" placeholder="Country" onChange={changeHandler}/>
        </div>
        <div className="location">Location : <span>{location}</span></div>
        
        <div className="state">State : <span>{state}</span></div>
      </div>
    </div>
  );
};

export default App;
