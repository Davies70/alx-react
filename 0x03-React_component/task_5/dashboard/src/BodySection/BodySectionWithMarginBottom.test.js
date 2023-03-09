import { shallow  } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import React  from 'react';

describe('BodySectionWithMarginBottom', () => {
    it('renders a BodySection component and props are passed to child component', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).props().title).toBe('test title');
    });
});
