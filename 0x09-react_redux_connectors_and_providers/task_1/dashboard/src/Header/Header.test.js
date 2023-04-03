import React from 'react';
import Header from './Header.js';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from '../App/AppContext.js';

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders img and h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

describe('Header', () => {
  let wrapper;
  it('logoutSection not created with default context', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
    wrapper.unmount();
  });
  it('logoutSection is created when context is defined', () => {
    const context = {
      user: {
        email: 'email@gmail.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    const link = wrapper.find('a');
    link.simulate('click');
    expect(context.logOut).toHaveBeenCalled();
    wrapper.unmount();
  });
});
