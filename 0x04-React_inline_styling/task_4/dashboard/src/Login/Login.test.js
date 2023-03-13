import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe("<Login />", () => {
  it("should render", () => {
    shallow(<Login />);
  });
  it("renders 2 inputs tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("label").length).toBe(2);
  });
});
