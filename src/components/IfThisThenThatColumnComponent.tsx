import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box } from "@material-ui/core";
import classicAndroidVsJetpackComposeMap from "../utils/Data";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import IfThisThenThatColumnComponentType from "../models/IfThisThenThatColumnComponentType";
import JetpackComposeMetadata from "../models/JetpackComposeMetadata";
import Link from "@material-ui/core/Link";
import React, { FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

interface IfThisThenThanColumnComponentProps {
  prefix: string;
  suffix: string;
  selectedKey: string;
  map: Map<string, JetpackComposeMetadata>;
  componentType: IfThisThenThatColumnComponentType;
  handleChange: (value: string) => void;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ccff90",
    },
  },
});

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
        {props.componentType === IfThisThenThatColumnComponentType.KEY ? (
          <Box className={classes.autocompleteBox}>
            <ThemeProvider theme={theme}>
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
                    placeholder="Android Thing"
                    InputProps={{
                      ...params.InputProps,
                      classes: {
                        input: classes.inputTextField,
                      },
                    }}
                  />
                )}
              />
            </ThemeProvider>
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
                </div>
              ) : (
                props.map.get(props.selectedKey)?.composableName
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

        {props.componentType === IfThisThenThatColumnComponentType.VALUE ? (
          <Box>
            <Link href={props.map.get(props.selectedKey)?.composableGithubLink}>
              Here is an example to learn more
            </Link>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  boxCenter: {
    width: "100%",
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
});
