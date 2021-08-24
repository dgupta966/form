import React from "react";
//import Child2 from "./child2";
import DashForm from "./dashForm";
import "./dashboard.css";

var userDetailContext = React.createContext(null);

const Dashboard = () => {
  return (
    <div className="container">
      <h1>DashBoard</h1>
      <userDetailContext.Provider>
        <DashForm className="inside" />
      </userDetailContext.Provider>
      {/* <Child2 /> */}
    </div>
  );
};

export default Dashboard;
