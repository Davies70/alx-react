import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });
    it('renders the correct html for type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toBe('<li data-notification-type="default">test</li>');
    });
    it('renders the correct html for html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toBe('<li><u>test</u></li>');
    });
});
