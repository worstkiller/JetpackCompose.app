import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Link to="/">
            <Tab label="Composables" {...a11yProps(0)} />
          </Link>
          <Link to="/blogs">
            <Tab label="Blogs/Articles" {...a11yProps(1)} />
          </Link>
          <Link to="/videos">
            <Tab label="Videos" {...a11yProps(2)} />
          </Link>
        </Tabs>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles({
  root: {},
});
