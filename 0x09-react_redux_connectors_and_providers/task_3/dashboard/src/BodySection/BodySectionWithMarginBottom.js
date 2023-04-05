import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(bodySectionStyles.marginBottom)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}
const bodySectionStyles = StyleSheet.create({
  marginBottom: {
    marginBottom: "40px",
  },
});

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />,
};

BodySectionWithMarginBottom.Proptypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
export default BodySectionWithMarginBottom;
