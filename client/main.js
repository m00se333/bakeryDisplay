import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";

// Components

import App from "./components/App.js";
import NotFound from "./components/NotFound.js";
import Main from "./components/Main.js";
import Dashboard from "./components/Dashboard.js";


// import CSS

import "./styles/style.css";


// Router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";



// store
import store, { history } from "./store.js";

const router = (

    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Main}></IndexRoute>
          <Route path="/order" component={Dashboard}></Route>
        </Route>
      </Router>
  </Provider>

  )

render(router, document.querySelector("#root"));


