import React, { useState, useEffect } from "react";
import "./form.css";

const NewForm = (props) => {
  const [percentValue, setPercent] = useState("");
  const [amt,setAmt] = useState("");

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
          setAmt(x.amount);
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
          setAmt(x.amount);
          
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
    <form id="form">
      <formik>
        <div className="container">
          <div>
            <div className="sub-container-1">
              <h2 className="title">Add Tax</h2>
              <div className="input-text">
                <input
                  type="number"
                  name=""
                  id="word"
                  className="input-text-field"
                  value={percentValue}
                  onChange={inputHandler}
                />
                <input
                  type="text"
                  name=""
                  id="perc"
                  className="input-text-field"
                />
              </div>
              <div className="radio-input-container">
                <label for="all-terms">
                  <input type="radio" name="" id="all-terms" />
                  Apply to all items in collection
                </label>
                <label for="specific-terms">
                  <input type="radio" name="" id="specific-terms" />
                  Apply to specific terms
                </label>
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="sub-container-2">
              <div className="search-bar">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search items"
                  className="input-text-field"
                />
              </div>
              <div className="cb-container">
                <div className="cb-title">
                  <label for="">
                    <input type="checkbox" name="" id="" /> Bracelets
                  </label>
                </div>
                <div className="cb-body">
                  <label for="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value="Jasinthe Bracelet"
                      onChange={checkBoxHandler}
                    />{" "}
                    Jasinthe Bracelets
                  </label>
                  {/* <label for="">
                    <input type="checkbox" name="" id="" /> Jasinthe Bracelets
                  </label> */}
                  <label for="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value="Inspire Bracelet"
                      onChange={checkBoxHandler}
                    />{" "}
                    Inspire Bracelets
                  </label>
                </div>
              </div>

              <div className="cb-container">
                <div className="cb-title">
                  <label for="">
                    <input type="checkbox" name="" id="" />
                  </label>
                </div>
                <div className="cb-body">
                  <label for="">
                    <input type="checkbox" name="" id="" /> Zero amount item
                    with questions
                  </label>
                  <label for="">
                    <input type="checkbox" name="" id="" /> Normal item with
                    questions
                  </label>
                  <label for="">
                    <input type="checkbox" name="" id="" /> Normal item
                  </label>
                </div>
              </div>
            </div>
            <div className="result">
                <label>Amount</label>{amt}
                <label>Tax</label>{res}
                </div>
          </div>
          {/* <div>
            <button onClick={useProp}>Check</button>
          </div> */}
        </div>
      </formik>
    </form>
  );
};

export default NewForm;
