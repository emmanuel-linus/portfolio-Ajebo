import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Biography from "./Biography";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Errorpage from "./ErrorPage";
import Gallery from "./Gallery";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Biography} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Projects} />
          <Route path="/gallery" component={Gallery} />
          <Route component={Errorpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Router;
