import IfThisThenThatComponent from "./components/IfThisThenThat";
import IfThisThenThatFooter from "./components/IfThisThenThatFooter";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function JetpackComposeApp() {
  return (
    <Router>
      <Switch>
        <Route path="/blogs">
          <div>Blogs</div>
        </Route>
        <Route path="/videos">
          <div>Videos</div>
        </Route>
        <Route path="/">
          <IfThisThenThatComponent />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<JetpackComposeApp />, document.getElementById("root"));
