import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class Risultati extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, description, url } = this.props;

    return (
      <div className="risultati">
        <Container>
          <Row>
            <Col md="12">
              <div className="space">
                <div className="card">
                  <h1 className="card__main-title">{title}</h1>
                  <div className="card__box-img"></div>
                  <div className="card__box-text">
                    <p>{description}</p>
                  </div>
                </div>
                <a className="card__btn" href={url}>
                  ECCO COSA ABBIAMO SCELTO PER TE
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Risultati;
