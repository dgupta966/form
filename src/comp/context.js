import React, { useContext } from "react";
import { PropName } from "./App";
//import { useState } from "react";

const Context = (props) => {
  const uname = useContext(PropName);
  //const pname = useContext(App);
  // const; [value, setValue] = useState()
  console.log(props);
  //props.handleClick("ramshyam");
  return (
    <div>
      {/* <PropName.Consumer>
        {(name) => {
          return <h1>{name()}</h1>;
        }}
      </PropName.Consumer> */}
      {uname()}
      {/* {props.value} */}
      {/* {props.handleClick()} */}
    </div>
  );
};

export default Context;
