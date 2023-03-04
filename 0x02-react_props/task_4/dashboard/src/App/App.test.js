import React from "react";
import { shallow } from "enzyme";
import App from "./App.js";
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList.js";

describe("<App />", () => {
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });
  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });
  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });
  it("it should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });
  it("it should not render CourseList", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });
});

describe("<App isLoggedIn/>", () => {
  it("should not render Login component", () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find(Login).length).toBe(0);
  });
  it("should render CourseList", () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });
});
