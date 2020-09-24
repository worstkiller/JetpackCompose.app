import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { ComponentPreviewCardsSection } from "../wip/ComponentPreviewCardsSection";
import Header from "../Header";
import { makeStyles } from "@material-ui/core/styles";
import { mockComponentPreviewCardMetadataArray } from "../../utils/Mocks";
import React from "react";

export default function LandingPageComponent() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
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
