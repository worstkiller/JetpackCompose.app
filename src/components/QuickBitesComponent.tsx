import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TweetEmbed from "react-tweet-embed";
import Typography from "@material-ui/core/Typography";

export default function QuickBitesComponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={12}>
        <Grid container justify="center" spacing={2} xl>
          <Grid key={"issue1"} item xs={12} md={4}>
            <Typography className={classes.issueTitle} align="center">
              Issue #1: What is declarative UI?
            </Typography>
            <TweetEmbed id="1304904120868823040" />
          </Grid>
          <Grid key={"issue2"} item xs={12} md={4}>
            <Typography className={classes.issueTitle} align="center">
              Issue #2: What is this @Composable thing?
            </Typography>
            <TweetEmbed id="1307528586174160896" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "1%",
    padding: "4%",
  },
  issueTitle: {
    fontSize: 20,
    fontFamily: "Playfair Display",
    marginBottom: "2%",
  },
});
