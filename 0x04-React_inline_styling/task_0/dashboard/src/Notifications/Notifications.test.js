import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Testing the <Notifications /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(1);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    wrapper.setProps({
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
      ],
    });
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });

  it("verify that the first NotificationItem element renders the right html", () => {
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it("renders correctly if you dont pass the listNotifications property", () => {
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
    wrapper.setProps({ listNotifications: [] });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it("verify that when listNotifications is empty the message Here is the list of notifications is not displayed", () => {
    wrapper.setProps({ listNotifications: [] });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
    expect(
      wrapper.findWhere((node) => {
        return node.text() === "Here is the list of notifications";
      })
    ).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });
});

describe('Notifications', () => {
  const wrapper = shallow(<Notifications />);
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });

});

describe("Testing <Notification displayDrawer={true}/> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.find(".Notifications")).toHaveLength(1);
  });
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it("renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });
});

describe("Notifications component", () => {
  let wrapper;
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  test("mocks up the console.log function", () => {
    const notification = new Notifications();
    const id = 4;
    notification.markAsRead(id);
    expect(consoleSpy).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
  });

  afterEach(() => {
    consoleSpy.mockRestore;
  });
});

describe("Notification", () => {
  const testlistNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];
  const longerTestListNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    { id: 4, value: "New resume available", type: "urgent" },
  ];
  it("component doesnt render when list prop is updated with the same list", () => {
    const wrapper = shallow(
      <Notifications listNotifications={testlistNotifications} displayDrawer />
    );
    wrapper.setProps({ listNotifications: testlistNotifications});
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
  });

  it("component renders when list prop is updated with a different list", () => {
    const wrapper = shallow(
      <Notifications listNotifications={testlistNotifications} displayDrawer />
    );
    wrapper.setProps({ listNotifications: longerTestListNotifications });
    expect(wrapper.find("NotificationItem")).toHaveLength(4);
  });
});
