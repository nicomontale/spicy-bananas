import React, { Component } from 'react';
import attiva_1 from './../assets/img/attivita_1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


class Questionario extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="App-container">

          <br />

          <Container fluid={true}>
            <Row>
              <Col>
              
              </Col>
            </Row>
          </Container>
          {/* CARDS CONTAIONER  */}
          <div className="step-cards-container">
            <div className="step-card">
              <img src={this.props.img1} alt="img_alt" />
              <div className="title">Tenere in ordine il mio giardino</div>
              <div className="description">Falciatura ordinaria del prato, rifinitura aiuole</div>
            </div>

            <div className="step-card">
              <img src={this.props.img2} alt="img_alt" />
              <div className="title">Tenere in ordine il mio giardino</div>
              <div className="description">Falciatura ordinaria del prato, rifinitura aiuole</div>
            </div>

            <div className="step-card">
              <img src={this.props.img3} alt="img_alt" />
              <div className="title">Tenere in ordine il mio giardino</div>
              <div className="description">Falciatura ordinaria del prato, rifinitura aiuole</div>
            </div>
          </div>

          <br />

          {/* BUTTON */}
          <div className="button disabled">
            <span>CONTINUA</span>
          </div>

        </div>
         );
    }
}
 
export default Questionario;