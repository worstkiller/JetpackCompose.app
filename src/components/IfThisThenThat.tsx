import classicAndroidVsJetpackComposeMap from "../utils/Data";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IfThisThenThanColumnComponent } from "./IfThisThenThatColumnComponent";
import IfThisThenThatColumnComponentType from "../models/IfThisThenThatColumnComponentType";

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
            prefix="If you Used....."
            suffix="In Classic Android 🤖💚"
            selectedKey={selectedClassicAndroid}
            map={classicAndroidVsJetpackComposeMap}
            handleChange={handleChange}
            componentType={IfThisThenThatColumnComponentType.KEY}
          />
        </Grid>
        <Grid container item xs={6} className={classes.secondColumn}>
          <IfThisThenThanColumnComponent
            prefix="Then, you should use......"
            suffix="In Jetpack Compose 🚀"
            selectedKey={selectedClassicAndroid}
            map={classicAndroidVsJetpackComposeMap}
            handleChange={handleChange}
            componentType={IfThisThenThatColumnComponentType.VALUE}
          />
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
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondColumn: {
    background: "#ccff90",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
