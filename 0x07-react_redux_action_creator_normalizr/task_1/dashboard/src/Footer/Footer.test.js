import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from '../App/AppContext';

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
  it('renders at least the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
  it('link is not displayed when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
    wrapper.unmount();
  });
  it('link is displayed when user is logged in', () => {
    const newUser = {
      user: {
        email: 'email@gmail.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={newUser}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
    wrapper.unmount();
  });
});
