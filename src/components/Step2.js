import React, { Component } from "react";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="step-card">
        <img
          src={this.props.img}
          alt="img_alt"
          id={this.props.id}
          onClick={this.props.onclick}
        />
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}

export default Step2;
