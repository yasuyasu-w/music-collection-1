import React from "react";
import DenseAppBar from "./Home-material/DenseAppBar";
import Main from './Main'
import Article from './Article'
import { Route, Switch } from "react-router-dom";


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

        <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        </Switch>
      </div>
   </>
  );
};

export default Home;
