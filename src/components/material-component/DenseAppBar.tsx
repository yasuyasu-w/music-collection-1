import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%"
    },
    appbar: {
      backgroundColor: "black"
    },
    toolbar:{
      justifyContent: 'center'
    },
    typography: {
      color: "#E84E72"
    }
  })
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" className={classes.typography}>
            Music Colection
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
