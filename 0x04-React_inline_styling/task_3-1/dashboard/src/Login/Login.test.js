import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });


describe('Login', () => {
    it('verify it renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeTruthy();
    });
    
    it('Should render 2 input tags and 2 lablel tags', () => {
        const wrapper = shallow(<Login />);
        const inputTags = wrapper.find('input');
        const lablelTags = wrapper.find('label');

        expect(inputTags).toHaveLength(3);
        expect(lablelTags).toHaveLength(2);
    })
    
});
