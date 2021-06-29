import React from "react"
import {Router, BrowserRouter, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from "history";

import First from "./views/First";
import Second from "./views/Second";
import Ref from "./views/Ref";
import './App.css';

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
        <Switch>
            <Route exact path="/sec" component={Second} />
            <Route exact path="/" component={First} />
            <Route exact path="/ref" component={Ref} />
        </Switch>
    </Router>
  );
}

export default App;
