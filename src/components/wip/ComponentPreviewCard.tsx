import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";

export interface ComponentPreviewCardProps {
  title: string;
  contributor: string;
  imageUrl: string;
  resourceLink: string;
  description: string;
}

export const ComponentPreviewCard: FunctionComponent<ComponentPreviewCardProps> = (
  props
) => {
  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.root}
        onClick={() => {
          window.open(props.resourceLink, "_blank");
        }}
      >
        <CardMedia image={props.imageUrl} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Grid
            container
            className={classes.cardContentGrid}
            wrap="nowrap"
            direction="column"
          >
            <Grid item className={classes.cardTitleGrid}>
              <Grid container className={classes.cardContentGrid} wrap="nowrap">
                <Grid item xs={11}>
                  <Typography variant="body1" className={classes.cardTitle}>
                    {props.title}
                  </Typography>
                </Grid>
                <Grid item xs={1} alignContent="center">
                  <FavoriteIcon fontSize="small" color="primary" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.cardTitleGrid}>
              <Typography variant="subtitle2" className={classes.cardSubtitle}>
                {props.description}
              </Typography>
            </Grid>
            <Grid item className={classes.cardChipGrid}>
              <span className={classes.chip}>Text</span>
              <span className={classes.chip}>Animation</span>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: 264,
    "&:hover": {
      cursor: "pointer",
    },
  },
  media: {
    height: 0,
    paddingTop: "104%", // 16:9
  },
  cardContent: {},
  cardContentGrid: {
    width: "100%",
  },
  cardTitleGrid: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // marginLeft: "4%",
  },
  cardChipGrid: {
    marginTop: "4%",
  },
  cardTitle: {},
  cardSubtitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
  },
  chip: {
    margin: "2%",
    backgroundColor: "#FAD1E6",
    color: "#C44250",
    padding: "2%",
    borderRadius: "5px",
  },
});
