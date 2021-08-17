import React from "react";

import "./App.css"

import ProductDetails from "./ProductDetails/ProductDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={ProductDetails}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
