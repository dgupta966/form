import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../navBar/about";
import Contact from "../navBar/contact";
import Home from "../navBar/home";

class NavRoot extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default NavRoot;
