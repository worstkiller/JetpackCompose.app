import { ComponentPreviewCard } from "./ComponentPreviewCard";
import ComponentPreviewCardMetadata from "../../models/ComponentPreviewCardMetadata";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";

export interface ComponentPreviewCardsSectionProps {
  sectionTitle: string;
  metadataArray: Array<ComponentPreviewCardMetadata>;
}

export const ComponentPreviewCardsSection: FunctionComponent<ComponentPreviewCardsSectionProps> = (
  props
) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Typography variant="h6" className={classes.title} noWrap={true}>
        {props.sectionTitle}
      </Typography> */}
      <Container maxWidth="lg">
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <Grid container spacing={7}>
              {props.metadataArray.map((metadata) => (
                <Grid key={metadata.id} item>
                  <ComponentPreviewCard
                    title={metadata.contributionTitle}
                    contributor={metadata.contributor}
                    imageUrl={metadata.contributionPreviewImageUrl}
                    resourceLink={metadata.contributionLink}
                    description={metadata.contributionDescription}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FAFAFA",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    paddingTop: "1%",
  },
  title: {
    marginBottom: 0,
    paddingBottom: 0,
  },
});
