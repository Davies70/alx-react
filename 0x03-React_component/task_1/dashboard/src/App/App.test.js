/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { jest } from "@jest/globals";

describe("Test App.js", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Renders App without crashing", () => {
    expect(wrapper.exists());
  });

  it("App component contains Notifications component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("App component contains Header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("App component contains Login component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("App component contains Footer component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("test to check that CourseList is not displayed inside App", () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  it(" the CourseList component is included", () => {
    expect(wrapper.find("CourseList").exists());
  });
});

describe("App", () => {
  let wrapper;
  const logOutMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App logOut={logOutMock} />);
  });


  it("calls logOut function and displays alert when Ctrl and H keys are pressed", () => {
    const event = { key: "h", ctrlKey: true };
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    wrapper.find("div.App").simulate("keydown", event);
    expect(alertMock).toBeCalledWith("Logging you out");
    expect(logOutMock).toBeCalled();
    jest.restoreAllMocks();
  });
});
