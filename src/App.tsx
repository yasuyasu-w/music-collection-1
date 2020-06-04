import React,{useReducer} from "react";
import Home from "./components/Home";
import {initialState} from './initiasState'
import reducers from './reducers/reducers'


import { BrowserRouter as Router} from "react-router-dom";



export default function App() {

  const [state,dispatch]=useReducer(reducers,initialState)
  console.log(state)

  return (
    <Router>
          <Home state={state} dispatch={dispatch} />
    </Router>
  );
}
