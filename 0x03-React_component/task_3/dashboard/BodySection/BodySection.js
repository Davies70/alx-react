import React, { Component } from "react";

class BodySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    <div className="bodySection">
      <h2>
        <p>{this.props.title}</p>
      </h2>
      {this.props.children}
    </div>;
  }
}
