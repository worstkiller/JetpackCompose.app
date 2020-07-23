import { FAQPageComponent } from "./components/FAQPageComponent";
import { mockQnA } from "./utils/Data"
import IfThisThenThatComponent from "./components/IfThisThenThat";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function JetpackComposeApp() {
  return (
    <Router>
      <Switch>
    <Route
      path="/What-is-the-equivalent-of-:androidParam-in-Jetpack-Compose"
      render={(props) => <IfThisThenThatComponent />}
    />
    <Route path="/faq">
      <FAQPageComponent listOfQnA={mockQnA}/>
    </Route>
    <Route
      path="/:androidParam"
      render={(props) => <IfThisThenThatComponent />}
    />
    <Route path="/">
      <IfThisThenThatComponent />
    </Route>
  </Switch>
    </Router>
  );
}

ReactDOM.render(<JetpackComposeApp />, document.getElementById("root"));
