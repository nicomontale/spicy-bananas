import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Logo } from "./../assets/img/checked.svg";
import { ReactComponent as Checked } from "./../assets/img/checked.svg";
class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="step-card">
        <div className="step-card__img">
          <div className={this.props.filterClass}>
            <Checked className="checked"></Checked>
            <div className="checked__filter"></div>

            <img src={this.props.img}></img>
          </div>
          <img
            className=""
            src={this.props.img}
            alt="img_alt"
            id={this.props.id}
            onClick={this.props.onclick}
          />
        </div>

        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}

export default Step1;
