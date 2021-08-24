import React, { useContext, useEffect } from "react";
import { newContext } from "./child2";

const Child3 = () => {
  useEffect(() => {
    console.log("first use effect console");
  });
  const data = useContext(newContext);
  //console.log(data);
  const a = [];
  const myInfo = () => {
    for (let x in data) {
      a.push(data[x]);
      console.log(data[x]);
    }
  };
  myInfo();
  return (
    <div>
      <h5>Child - 3</h5>
      <div className="output">{a}</div>
    </div>
  );
};

export default Child3;
