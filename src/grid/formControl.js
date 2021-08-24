import React, { Component } from "react";

class Forms extends Component {
  state = { percentValue: "" };
  percentHandle = (ev) => {
    this.setState({ percentValue: ev.target.value });
  };

  
  bracelest = (e) => {
   
    if (e.target.value === "Jasinthe Bracelet") {
      for (let x of arr) {
        //console.log(x);
        if (x.name === "Jasinthe Bracelet") {
          const per = this.state.percentValue;
          console.log(x.amount);
          const amount = x.amount;
          let val = amount * (per / 100);
          console.log(val);
        }
      }
    }
    if (e.target.value === "Inspire Bracelet") {
      for (let x of arr) {
        //console.log(x);
        if (x.name === "Inspire Bracelet") {
          const per = this.state.percentValue;
          console.log(x.amount);
          const amount = x.amount;
          let val = amount * (per / 100);
          console.log(val);
        }
      }
    }
  };
  render() {
    return (
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
                    value={this.state.percentValue}
                    onChange={this.percentHandle}
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
                
              />
              Bracelest
            </div>
            <div className="bg-grey" id="">
              <input type="checkbox" value="Jasinthe Bracelet" onChange={this.bracelest} /> Jasinthe Bracelest
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
                  onChange={this.bracelest}
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
          </div>
        </formik>
      </form>
    );
  }
}

export default Forms;
