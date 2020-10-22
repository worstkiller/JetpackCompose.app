import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

interface PageTitleProps {
  header: string;
  subheader: string;
}

export default function PageTitle(props: PageTitleProps) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.pageHeader} align="center">
        {props.header}
      </Typography>
      <Typography className={classes.pageSubheader} align="center">
        {props.subheader}
      </Typography>
    </>
  );
}

const useStyles = makeStyles({
  pageHeader: {
    fontSize: 30,
    fontFamily: "Playfair Display",
    marginBottom: "2%",
    color: "#78C257",
  },
  pageSubheader: {
    fontSize: 20,
    fontWeight: "lighter",
    fontFamily: "Roboto",
  },
});
