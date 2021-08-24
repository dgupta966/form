import React, { useState } from "react";
import Child2 from "./child2";
import "./dashform.css";

const DashForm = () => {
  const [name, setName] = useState("Deepak");
  const [age, setAge] = useState("24");
  const [submitCh, setSubmitCh] = useState();
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    //console.log(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
    //console.log(e.target.value);
  };
  const submitHandler = (event) => {
    const info = {
      sname: name,
      sage: age,
    };
    setSubmitCh(info);
    setName("");
    setAge("");
    //console.log(submitCh);
    //console.log("Name " + info.sname + " Age " + info.sage);
  };
  return (
    <div className="form-container">
      <h2>Form</h2>
      <h6>*Child - 1</h6>
      {/* <form> */}
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Age</label>
        <input type="text" value={age} onChange={ageChangeHandler} />
      </div>
      <button className="button" onClick={submitHandler}>
        Submit
      </button>
      {/* </form> */}

      <Child2 />
    </div>
  );
};

export default DashForm;
export { FormInfo };
