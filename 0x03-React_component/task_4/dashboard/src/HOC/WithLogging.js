import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${this.getComponentName} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${this.getComponentName} is going to unmount`);
    }
    getComponentName() {
      return WrappedComponent.name || "Component";
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithLogging.displayName = `WithLogging(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
};

export default WithLogging;
