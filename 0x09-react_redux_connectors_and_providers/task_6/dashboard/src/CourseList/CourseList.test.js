import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe("<CourseList />", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });
  it("renders 3 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
});

describe("<Courselist listCourse={[]} />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseList listCourse={[]} />);
  });
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("<Courselist listCourse={listCourse} />", () => {
  let wrapper;
  beforeEach(() => {
    const listCourse = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    wrapper = shallow(<CourseList listCourse={listCourse} />);
  });
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
