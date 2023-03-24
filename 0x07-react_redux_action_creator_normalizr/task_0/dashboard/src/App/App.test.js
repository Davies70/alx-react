/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';
import { getLatestNotification } from '../utils/utils';

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find('CourseList')).toHaveLength(0);
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

describe('Testing <App/> is logged in', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('the Login component is included', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('the CourseList component is not included', () => {
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('markNotificationasRead updates the listNotification in the state', () => {
    const mocklistNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
    ];
    wrapper.setState({ listNotifications: mocklistNotifications });
    const instance = wrapper.instance();
    instance.markNotificationAsRead(1);
    expect(wrapper.state().listNotifications).toHaveLength(2);
  });
});

describe('App', () => {
  it('state is updated when logOut is called', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, 'logOut');
    const alert = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      ctrlKey: true,
      key: 'h',
    });
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith('Logging you out');
    expect(logout).toBeCalled();
    expect(wrapper.state().user).toBe(user);
    alert.mockRestore();
    wrapper.unmount();
  });
});

describe('App with AppContect', () => {
  it('logIn function updates the state', () => {
    const newUser = {
      email: 'email@gmail.com',
      password: 'password',
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    const instance = wrapper.instance();
    instance.logIn(newUser.email, newUser.password);
    expect(wrapper.state().user).toEqual(newUser);
    wrapper.unmount();
  });

  it('logOut function updates the state', () => {
    const context = {
      user: {
        email: 'email@gmail.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    );
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});
