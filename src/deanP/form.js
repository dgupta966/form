import React, { useState, useEffect } from "react";
import "./form.css";

const Form = (props) => {
  const [percentValue, setPercent] = useState("");

  const [res, setRes] = useState([]);
  useEffect(() => {
    console.log("first use effect console");
  });
  const useProp = () => {
    console.log(props.data);
  };
  const inputHandler = (e) => {
    setPercent(e.target.value);
  };
  const checkBoxHandler = (e) => {
    if (e.target.value === "Jasinthe Bracelet") {
      for (let x of props.data) {
        //console.log(x);
        if (x.name === "Jasinthe Bracelet") {
          const per = percentValue;
          console.log(x.amount);
          const amount = x.amount;
          let val = amount * (per / 100);
          console.log(val);
          let temp = [...res];
          temp.push(val);
          setRes(temp);
        }
      }
    }
    if (e.target.value === "Inspire Bracelet") {
      for (let x of props.data) {
        //console.log(x);
        if (x.name === "Inspire Bracelet") {
          const per = percentValue;
          console.log(x.amount);
          const amount = x.amount;
          let val = amount * (per / 100);
          console.log(val);
          let temp = [...res];
          temp.push(val);
          setRes(temp);
        }
      }
    }
  };
  return (
    <div>
      <form id="form">
        <formik>
          <div>
            <h1>Add Tax</h1>
            <div>
              <p>
                <label>
                  {/* <input type="text" placeholder="Enter Percentage" /> &nbsp; */}
                  <input
                    type="number"
                    placeholder="%"
                    value={percentValue}
                    onChange={inputHandler}
                  />
                </label>
              </p>
            </div>

            <div>
              <p>
                <input type="radio" />
                Apply to all items in collection
              </p>
            </div>

            <div>
              <p>
                <input type="radio" />
                Apply to specific items
              </p>
            </div>
            <div className="bg-grey" id="ram">
              <input
                type="checkbox"
                value="Bracelest"
                onChange={checkBoxHandler}
              />
              Bracelest
            </div>
            <div className="bg-grey" id="">
              <input
                type="checkbox"
                value="Jasinthe Bracelet"
                onChange={checkBoxHandler}
              />{" "}
              Jasinthe Bracelest
            </div>
            {/* <div className="bg-grey" id="">
              <input type="checkbox" /> Jasinthe Bracelest
            </div> */}
            <div className="bg-grey" id="">
              <label>
                <input
                  type="checkbox"
                  id="b1"
                  className="padding-5"
                  value="Inspire Bracelet"
                  onChange={checkBoxHandler}
                />{" "}
                inspire Bracelest
              </label>
            </div>
            <div className="bg-grey" id="ram">
              <input type="checkbox" /> Bracelest
            </div>
            <div className="bg-grey" id="">
              <input type="checkbox" /> Zero amount item with question
            </div>
            <div className="bg-grey" id="">
              <input type="checkbox" /> Normal items with questions
            </div>
            <div className="bg-grey" id="">
              <input type="checkbox" /> Normal items
            </div>
            <div className="result">{res}</div>
          </div>
        </formik>
      </form>
      <button onClick={useProp}>Check</button>
    </div>
  );
};

export default Form;
