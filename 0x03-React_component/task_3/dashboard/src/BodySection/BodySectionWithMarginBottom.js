import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import "./BodySectionWithMarginBottom.css";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.Proptypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
export default BodySectionWithMarginBottom;
