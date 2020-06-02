import React from "react";
import DenseAppBar from "./Bar/DenseAppBar";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#1C2022",
      color: "#E84E72"
    }
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DenseAppBar />
        <p>owivnwvnriovrebnvoirbevierbnvierv</p>
      </div>
    </>
  );
};

export default Home;
