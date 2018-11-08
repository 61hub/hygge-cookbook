import React from "react"
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from "./About";



const container = document.querySelector("#container");

const app = (
  <Router>
    <div>

      <Route path="/about/" component={About}/>
      <Route path="/" exact component={App}/>
    </div>

  </Router>
);

ReactDOM.render(
  app,
  container
);