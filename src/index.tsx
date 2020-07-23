import { FAQPageComponent } from "./components/FAQPageComponent";
import { mockQnA } from "./utils/Data"
import IfThisThenThatComponent from "./components/IfThisThenThat";
import React from "react";
// @ts-ignore
import { render } from 'react-snapshot';
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
    <Route path="/faqs">
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

render(<JetpackComposeApp />, document.getElementById("root"));
