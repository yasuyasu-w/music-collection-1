import React from "react";
import DenseAppBar from "./Home-material/DenseAppBar";
import Main from './Main'
import Article from './Article'
import { Route, Switch } from "react-router-dom";


import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: '100vh',
     // backgroundColor: "#1C2022",
      color: "#E84E72",
      position:'relative'
    }
  })
);

const Home = ({state,dispatch}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DenseAppBar />

        <Switch>
        <Route exact path="/">
          <Main state={state} dispatch={dispatch} />
        </Route>
        <Route path="/article/:id">
          <Article />
        </Route>
        </Switch>
      </div>
   </>
  );
};

export default Home;
