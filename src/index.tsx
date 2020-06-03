import LandingPageComponent from "./components/LandingPageComponent";
import NavigationBar from "./components/NavigationBar";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function JetpackComposeApp() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/blogs">
          <div>Blogs</div>
        </Route>
        <Route path="/videos">
          <div>Videos</div>
        </Route>
        <Route path="/">
          <LandingPageComponent />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<JetpackComposeApp />, document.getElementById("root"));
