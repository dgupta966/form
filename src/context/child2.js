import React, { useContext } from "react";
import { FormInfo } from "./dashForm";
import Child3 from "./child3";

const Child2 = () => {
  const data = useContext(FormInfo);
  console.log(data);
  return (
    <div>
      <h5>Child - 2</h5>

      <Child3 />
    </div>
  );
};

export default Child2;
