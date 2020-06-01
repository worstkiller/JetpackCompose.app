import { Box } from "@material-ui/core";
import { ComponentPreviewCardsSection } from "./components/ComponentPreviewCardsSection";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { mockComponentPreviewCardMetadataArray } from "./utils/Mocks"
import NavigationBar from "./components/NavigationBar"
import React from "react";
import ReactDOM from "react-dom";

export default function JetpackComposeApp() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <NavigationBar />
      <Box height="100%" width="100%">
        <Box height="40%">
          <Header />
        </Box>
        <Box>
          <ComponentPreviewCardsSection
            sectionTitle="Title"
            metadataArray={mockComponentPreviewCardMetadataArray}
          />
        </Box>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    height: "100vh",
    paddingLeft: "0",
    paddingRight: "0",
  },
});

ReactDOM.render(<JetpackComposeApp />, document.getElementById("root"));