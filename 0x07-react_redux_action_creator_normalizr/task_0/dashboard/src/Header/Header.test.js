import React from "react";
import Header from "./Header.js";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });
  it("renders img and h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("h1").length).toBe(1);
  });
});
