import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="step-4__child step-4__content ">
        <h1 id={this.props.id} onClick={this.props.onclick}>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Step4;
