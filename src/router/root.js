import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "../form/form";
import NewGrid from "../grid/grid";

class Root extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/grid" exact component={NewGrid} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
