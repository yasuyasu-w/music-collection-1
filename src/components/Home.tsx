import React from "react";
import DenseAppBar from "./Home-material/DenseAppBar";
import AddButton from './Home-material/AddButton'

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height:'100vh',
      backgroundColor: "#1C2022",
      color: "#E84E72",
      position:'relative'
    }
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DenseAppBar />
        <AddButton />
      </div>
   </>
  );
};

export default Home;
