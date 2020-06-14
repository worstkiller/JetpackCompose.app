import classicAndroidVsJetpackComposeMap from "../utils/Data";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IfThisThenThanColumnComponent } from "./IfThisThenThatColumnComponent";
import IfThisThenThatColumnComponentType from "../models/IfThisThenThatColumnComponentType";
import IfThisThenThatFooter from "./IfThisThenThatFooter";

import React, { useState } from "react";

export default function IfThisThenThatComponent() {
  const classes = useStyles();
  const [selectedClassicAndroid, setClassicAndroidValue] = useState("");

  function handleChange(newValue: string) {
    setClassicAndroidValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.firstColumn}>
          <IfThisThenThanColumnComponent
            prefix="If you used..."
            suffix="In Classic Android 🤖💚"
            selectedKey={selectedClassicAndroid}
            map={classicAndroidVsJetpackComposeMap}
            handleChange={handleChange}
            componentType={IfThisThenThatColumnComponentType.KEY}
          />
        </Grid>
        <Grid container item xs={6} className={classes.secondColumn}>
          <IfThisThenThanColumnComponent
            prefix="Then, you should use..."
            suffix="In Jetpack Compose 🚀"
            selectedKey={selectedClassicAndroid}
            map={classicAndroidVsJetpackComposeMap}
            handleChange={handleChange}
            componentType={IfThisThenThatColumnComponentType.VALUE}
          />
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <IfThisThenThatFooter />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  firstColumn: {
    background: "#FFFFFF",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondColumn: {
    background: "#ccff90",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: "20vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000000",
  }
});
