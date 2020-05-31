import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";

export default function JetpackComposeApp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography className={classes.message} align="center">
            Jetpack Compose
        </Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center', 
    height: '100vh',
    backgroundColor: "#ccff90"
  },
  message: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#33691e",
    fontFamily: 'Playfair Display'
  },
});

ReactDOM.render(<JetpackComposeApp />, document.getElementById("root"));
