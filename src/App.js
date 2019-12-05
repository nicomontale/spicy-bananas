import React from 'react';
import logo from './assets/img/logo.svg';
import Questionario from './components/Questionario';
import Risultati from './components/Risultati';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './assets/img/attivita_1.jpg';

import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Container fluid={true} className="risultati-section">
                   <Row>
                   <Link to="/questionario">Questionario</Link>
          <Link to="/risultati">Risultati</Link>
                       <ul>
                        <li><a href="#">Attività</a></li>
                        <li><a href="#">Ostacoli</a></li>
                        <li><a href="#">Pendenza</a></li>
                        <li><a href="#">Dimensione</a></li>
                    </ul>
                   </Row>
                </Container>
        
          <div>
          
          <Switch>
              <Route path="/questionario">
                <Questionario 
                img1={img1}
                img2={img1}
                img3={img1}
                />
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
