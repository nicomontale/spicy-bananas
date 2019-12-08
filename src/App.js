import React from "react";
import logo from "./assets/img/logo.svg";
import Questionario from "./components/Questionario";
import Risultati from "./components/Risultati";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div>
          <Switch>
            <Route path="/">
              <Questionario />
            </Route>
            <Route path="/risultati">
              <Risultati />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
