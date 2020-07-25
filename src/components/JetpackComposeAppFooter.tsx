import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import React from "react";
import { Box } from "@material-ui/core";

export default function JetpackComposeAppFooter() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <Box>
        <Link
          className={classes.footerText}
          variant="subtitle1"
          href="https://www.twitter.com/vinaygaba"
          target="_blank"
        >
          Made by <span className={classes.link}>Vinay Gaba</span>
        </Link>
      </Box>
      <Box>
        <Link
          className={classes.footerText}
          variant="subtitle1"
          href="https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example"
          target="_blank"
        >
          Powered by <span className={classes.link}>Learn Jetpack Compose By Example</span>
        </Link>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Playfair Display",
  },
  link: {
      color: "#ccff90"
  }
});
