import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from '../Notifications/Notifications.js';
import Header  from '../Header/Header';
import Footer  from '../Footer/Footer';
import Login  from '../Login/Login';

describe('<App />', () => {
  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
   });
   it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
   });
   it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
   });
   it('it should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
   });
});
