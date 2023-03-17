/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { StyleSheetTestUtils } from 'aphrodite';

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

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
  it('displayDrawer default state is false', () => {
    expect(wrapper.state().displayDrawer).toBe(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
    
  });
  it('verifies that after calling handleHideDrawer, state is flase', () => {
    const instance = wrapper.instance();
    instance.handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
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

// describe("App", () => {
//   let originalAlert;
//   let mockAlert;

//   beforeEach(() => {
//     originalAlert = global.alert;
//     mockAlert = jest.fn();
//     global.alert = mockAlert;
//   });

//   afterEach(() => {
//     global.alert = originalAlert;
//   });

//   it("calls logOut function when ctrl+h are pressed", () => {
//     const mockLogOut = jest.fn();
//     const wrapper = mount(<App logOut={mockLogOut} />);
//     const event = new KeyboardEvent("keydown", { keyCode: 72, ctrlKey: true });
//     document.dispatchEvent(event);
//     expect(mockLogOut).toHaveBeenCalledTimes(1);
//     expect(mockAlert).toHaveBeenCalledWith("Logging you out");
//     wrapper.unmount();
//   });
// });
