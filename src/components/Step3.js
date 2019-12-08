import React, { Component } from "react";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="step-card">
        <img
          src={this.props.img}
          id={this.props.id}
          onClick={this.props.onclick}
          alt="img_alt"
        />
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}

export default Step3;
