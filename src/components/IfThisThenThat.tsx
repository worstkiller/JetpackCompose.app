import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

enum ComponentType {
  KEY,
  VALUE,
}

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
            suffix="In Classic Android"
            selectedKey={selectedClassicAndroid}
            map={classicAndroidVsJetpackComposeMap}
            handleChange={handleChange}
            componentType={ComponentType.KEY}
          />
        </Grid>
        <Grid container item xs={6} className={classes.secondColumn}>
          <IfThisThenThanColumnComponent
            prefix="Then, you should use......"
            suffix="In Jetpack Compose 🚀"
            selectedKey={selectedClassicAndroid}
            map={classicAndroidVsJetpackComposeMap}
            handleChange={handleChange}
            componentType={ComponentType.VALUE}
          />
        </Grid>
      </Grid>
    </div>
  );
}

interface IfThisThenThanColumnComponentProps {
  prefix: string;
  suffix: string;
  selectedKey: string;
  map: Map<string, string>;
  componentType: ComponentType;
  handleChange: (value: string) => void;
}

export const IfThisThenThanColumnComponent: FunctionComponent<IfThisThenThanColumnComponentProps> = (
  props
) => {
  const classes = useStyles();
  const classicAndroid = Array.from(classicAndroidVsJetpackComposeMap.keys());

  return (
    <>
      <Box display="flex" flexDirection="column" className={classes.boxCenter}>
        <Box>
          <Typography
            variant="h4"
            align="center"
            className={classes.typography}
          >
            {props.prefix}
          </Typography>
        </Box>
        {props.componentType === ComponentType.KEY ? (
          <Box className={classes.autocompleteBox}>
            <Autocomplete
              id="combo-box-demo"
              options={classicAndroid}
              classes={{
                option: classes.dropdownOptions,
              }}
              onInputChange={(event, newInputValue) => {
                console.log(newInputValue);
                props.handleChange(newInputValue);
              }}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  InputProps={{
                    ...params.InputProps,
                    classes: {
                      input: classes.inputTextField,
                    },
                  }}
                />
              )}
            />
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h4"
              align="center"
              className={classes.inputTextField}
            >
              {props.selectedKey === "" ? (
                <div>
                  <span role="img" aria-label="Pointing in Left Direction">
                    👈
                  </span>
                  &nbsp; Choose a value
                </div>
              ) : (
                props.map.get(props.selectedKey)
              )}
            </Typography>
          </Box>
        )}
        <Box>
          <Typography
            variant="h4"
            align="center"
            className={classes.typography}
          >
            {props.suffix}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  boxCenter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  firstColumn: {
    background: "#FFFFFF",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typography: {
    fontSize: 50,
    marginBottom: 100,
    marginTop: 100,
    color: "#000000",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
  },
  autocompleteBox: {
    width: "75%",
  },
  inputTextField: {
    fontSize: 70,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
  },
  dropdownOptions: {
    fontSize: 50,
  },
  secondColumn: {
    background: "#ccff90",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const classicAndroidVsJetpackCompose = [
  { classic: "LinearLayout", compose: "Row/Column" },
  { classic: "FrameLayout", compose: "Stack" },
  { classic: "ConstraintLayout", compose: "ConstraintLayout" },
  { classic: "TextView", compose: "Text" },
  { classic: "EditText", compose: "TextField" },
  { classic: "Themes", compose: "MaterialTheme" },
  { classic: "CardView", compose: "Card" },
];

let classicAndroidVsJetpackComposeMap = new Map([
  ["LinearLayout", "Row/Column"],
  ["FrameLayout", "Stack"],
  ["ConstraintLayout", "ConstraintLayout"],
  ["TextView", "Text"],
  ["EditText", "TextField"],
  ["Themes", "MaterialTheme"],
]);
