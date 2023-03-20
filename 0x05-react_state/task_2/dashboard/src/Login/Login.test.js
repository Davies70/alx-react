import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

// suppress style injection during testing
StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('should render', () => {
    shallow(<Login />);
  });
  it('renders 3 inputs tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });
  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const button = wrapper.find('.button_1f2bzsc');
    expect(button.prop('disabled')).toBe(true);
  });
  it('button is enabled when inputs are changed', () => {
    const wrapper = mount(<Login />);
    wrapper.find('#email').simulate('change', { target: { value: 'John' } });
    wrapper.find('#password').simulate('change', { target: { value: 'Does' } });
    expect(wrapper.find("input[type='submit']").prop('disabled')).toEqual(
      false
    );
  });
});
