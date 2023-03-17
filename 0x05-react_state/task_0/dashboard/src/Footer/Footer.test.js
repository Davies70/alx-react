import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer />", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });
  it("renders at least the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
