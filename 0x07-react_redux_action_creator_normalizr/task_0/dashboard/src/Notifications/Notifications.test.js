import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe('Testing the <Notifications /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders NotificationItem', () => {
    expect(wrapper.find('NotificationItem')).toHaveLength(1);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    wrapper.setProps({
      listNotifications: [
        { id: 1, value: 'New course available', type: 'default' },
      ],
    });
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    expect(wrapper.find('NotificationItem').first().html()).toEqual(
      '<li data-notification-type="default" class="default_1tsdo2i-o_O-li_1t4zs8l">No new notification for now</li>'
    );
  });

  it('renders correctly if you dont pass the listNotifications property', () => {
    expect(wrapper.find('NotificationItem').first().html()).toEqual(
      '<li data-notification-type="default" class="default_1tsdo2i-o_O-li_1t4zs8l">No new notification for now</li>'
    );
    wrapper.setProps({ listNotifications: [] });
    expect(wrapper.find('NotificationItem').first().html()).toEqual(
      '<li data-notification-type="default" class="default_1tsdo2i-o_O-li_1t4zs8l">No new notification for now</li>'
    );
  });

  it('verify that when listNotifications is empty the message Here is the list of notifications is not displayed', () => {
    wrapper.setProps({ listNotifications: [] });
    expect(wrapper.find('NotificationItem').first().html()).toEqual(
      '<li data-notification-type="default" class="default_1tsdo2i-o_O-li_1t4zs8l">No new notification for now</li>'
    );
    expect(
      wrapper.findWhere((node) => {
        return node.text() === 'Here is the list of notifications';
      })
    ).toHaveLength(0);
  });
});

describe('Notifications', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });
  it('menu item is being displayed when displayDrawer is false', () => {
    expect(wrapper.text()).toBe('Your notifications');
  });
});

describe('Testing <Notification displayDrawer={true}/> ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it('menu item is not displayed when displayDrawer is true', () => {
    const menuItem = wrapper.find('div.menuItem_g0f7r9');
    expect(menuItem).not.toBe();
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('calls handleDisplayDrawer when menuitem is clicked', () => {
    const mockHandleDisplayDrawer = jest.fn();
    wrapper.setProps({
      handleDisplayDrawer: mockHandleDisplayDrawer,
      displayDrawer: false,
    });
    const menuitem = wrapper.find('div.menuItem_g0f7r9');
    menuitem.simulate('click');
    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
    mockHandleDisplayDrawer.mockRestore();
  });
  it('calls handleHideDrawer when button is clicked', () => {
    const mockHandleHideDrawer = jest.fn();
    wrapper.setProps({
      displayDrawer: true,
      handleHideDrawer: mockHandleHideDrawer,
    });
    const button = wrapper.find('button').at(0);
    button.simulate('click');
    expect(mockHandleHideDrawer).toHaveBeenCalled();
    mockHandleHideDrawer.mockRestore();
  });
});

describe('Testing <Notification displayDrawer={true} listNotifications={[...]}/> ', () => {
  let wrapper;
  const listNotifications = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it('renders it correctly and with the right number of NotificationItem', () => {
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
    expect(wrapper.find('NotificationItem').first().props().value).toEqual(
      'New course available'
    );
  });
});



describe('Notification', () => {
  const testlistNotifications = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
  ];
  const longerTestListNotifications = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
    { id: 4, value: 'New resume available', type: 'urgent' },
  ];
  it('component doesnt render when list prop is updated with the same list', () => {
    const wrapper = shallow(
      <Notifications listNotifications={testlistNotifications} displayDrawer />
    );
    wrapper.setProps({ listNotifications: testlistNotifications });
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('component renders when list prop is updated with a different list', () => {
    const wrapper = shallow(
      <Notifications listNotifications={testlistNotifications} displayDrawer />
    );
    wrapper.setProps({ listNotifications: longerTestListNotifications });
    expect(wrapper.find('NotificationItem')).toHaveLength(4);
  });
});
