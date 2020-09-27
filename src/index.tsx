import { ComponentPreviewCardsSection } from "./components/wip/ComponentPreviewCardsSection";
import { FAQPageComponent } from "./components/faq/FAQPageComponent";
import { mockQnA } from "./utils/Data";
import { mockComponentPreviewCardMetadataArray } from "./utils/Mocks";
import NavigationBar from "./components/core/NavigationBar";
import IfThisThenThatComponent from "./components/ifttt/IfThisThenThat";
import QuickBitesComponent from "./components/quickbites/QuickBitesComponent";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function JetpackComposeApp() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route
            path="/What-is-the-equivalent-of-:androidParam-in-Jetpack-Compose"
            render={(props) => <IfThisThenThatComponent />}
          />
          <Route path="/faq">
            <FAQPageComponent listOfQnA={mockQnA} />
          </Route>
          <Route path="/quick-bites">
            <QuickBitesComponent />
          </Route>
          <Route path="/wip">
            <ComponentPreviewCardsSection
              sectionTitle="title"
              metadataArray={mockComponentPreviewCardMetadataArray}
            />
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
    </>
  );
}

ReactDOM.render(<JetpackComposeApp />, document.getElementById("root"));
