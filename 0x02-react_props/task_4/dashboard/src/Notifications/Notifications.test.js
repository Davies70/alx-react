import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  // it('renders three list items', () => {
  //     const wrapper = shallow(<Notifications />);
  //     expect(wrapper.find('li')).toHaveLength(3);
  // });

  it("renders the text: Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("renders NotificationItem", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the right html for the first NotifcationItem element", () => {
    const wrapper = shallow(<Notifications displayDrawer/>);
    expect(wrapper.find(NotificationItem).at(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it("Your notification div renders when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.containsMatchingElement(<div>Your notifications</div>)).toBe(
      true
    );
  });
  it("div.Notifications is not rendered when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });
  it("Your notification div renders when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.containsMatchingElement(<div>Your notifications</div>)).toBe(true);
  });
  it("div.Notifications is rendered when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });
});
