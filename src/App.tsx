import React from "react";
import Home from "./components/Home";


import { BrowserRouter as Router} from "react-router-dom";

export default function App() {
  return (
    <Router>
          <Home />
    </Router>
  );
}
