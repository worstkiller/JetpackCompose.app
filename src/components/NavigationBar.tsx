import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";

interface IProps {
  history?: any
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function NavigationBar(props: IProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, value: any) => {
    props.history.push(value);
    setValue(value);
  };

  useEffect(() => handleChange("", props.history.location.pathname), []);

  return (
    <div className={classes.root}>
      <Paper square className={classes.header}>
        <Tabs
          value={value}
          className={classes.tabs}
          classes={{
            indicator: classes.tabsIndicator
          }}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
        >
            <Tab label="Which Compose API to use?" {...a11yProps(0)} className={classes.tab} value="/" />
            <Tab label="Frequently Asked Questions" {...a11yProps(1)} className={classes.tab} value="/faq" />
        </Tabs>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor:"#000000",
  },
  tabs: {
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabsIndicator: {
    backgroundColor:"#ccff90",
  },
  tab: {
    color:"#FFFFFF",
    fontSize: 15,
    fontWeight: "bolder",
  },
  typography: {
    color: "#FFFFFF"
  }
});

export default withRouter(NavigationBar)