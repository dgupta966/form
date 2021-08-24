import React, { createContext } from "react";
import Context from "./context";

const PropName = createContext();

const App = () => {
  const name = "rahul";

  const handle = () => {
    //console.log(e);
    console.log("this is function in App");
  };
  return (
    <div>
      {/* This is app */}
      <PropName.Provider value={handle}>
        <Context />
      </PropName.Provider>
      {/*     
    {console.log('this is function in App two')}; */}
    </div>
  );
};

export default App;
export { PropName };
