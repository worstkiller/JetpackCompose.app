import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function IfThisThenThatComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.firstColumn}>
          <Autocomplete
            id="combo-box-demo"
            className={classes.autocompleteBox}
            options={oldVsNew}
            classes={{
              option: classes.dropdownOptions,
            }}
            getOptionLabel={(option) => option.old}
            renderInput={(params) => (
              <TextField
                {...params}
                label="If in Classic Android View System You Used....."
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
        </Grid>
        <Grid container item xs={6} className={classes.secondColumn}>
          <Box display="flex" flexDirection="column" className={classes.boxCenter}>
            <Box>
            <Typography variant="h4" align="center" className={classes.typography}>
              Then you will use......
            </Typography>
            </Box>
            <Box className={classes.autocompleteBox}>
            <Autocomplete
              id="combo-box-demo"
              options={oldVsNew}
              classes={{
                option: classes.dropdownOptions,
              }}
              getOptionLabel={(option) => option.new}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // label={

                  // }
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
            <Box>
            <Typography variant="h4" align="center" className={classes.typography}>
              In Jetpack Compose!
            </Typography>
            </Box>
          </Box>



          {/* <Grid item xs={12} className={classes.topTypography}>
            <Typography variant="h4" align="center" className={classes.topTypography}>
              Then you will use......
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.alignCenter}>
            <Autocomplete
              id="combo-box-demo"
              className={classes.autocompleteBox}
              options={oldVsNew}
              classes={{
                option: classes.option,
              }}
              getOptionLabel={(option) => option.new}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // label={

                  // }
                  variant="standard"
                  InputProps={{
                    ...params.InputProps,
                    classes: {
                      input: classes.textField,
                    },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
            in Jetpack Compose
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

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
    marginBottom:100,
    marginTop:100,
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
const oldVsNew = [
  { old: "LinearLayout", new: "Row/Column" },
  { old: "FrameLayout", new: "Stack" },
  { old: "ConstraintLayout", new: "ConstraintLayout" },
  { old: "TextView", new: "Text" },
  { old: "EditText", new: "TextField/FIlledTextField" },
  { old: "Themes", new: "MaterialTheme" },
  { old: "CardView", new: "Card" },
];
