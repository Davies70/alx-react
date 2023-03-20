import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe("<NotificationItem />", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });
  it("renders the correct html for type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toBe(
      '<li data-notification-type="default" class=\"default_1tsdo2i-o_O-li_1t4zs8l\">test</li>'
    );
  });
  it("renders the correct html for html prop", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.html()).toBe(
      '<li data-notification-type="default" class=\"default_1tsdo2i-o_O-li_1t4zs8l\"><u>test</u></li>'
    );
  });
});

describe("NotificationItem", () => {
  test("that a click on the component the spy function is called with the right id", () => {
    const id = 3;
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(
      <NotificationItem markAsRead={markAsReadSpy} id={id} />
    );
    wrapper.simulate("click");
    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});
