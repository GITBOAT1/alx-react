import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import Login from './Login';

// Mock Aphrodite
jest.mock('aphrodite', () => ({
    StyleSheet: {
      create: styles => styles,
      hairlineWidth: 1,
    },
    css: jest.fn().mockImplementation((...args) => args),
  }));
  
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

    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(true);
      });
    
      it('submit button is enabled after changing input values', () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find('input#email');
        const passwordInput = wrapper.find('input#password');
        const submitButton = wrapper.find('input[type="submit"]');
      
        // Simulate input change
        emailInput.simulate('change', { target: { value: 'test@example.com' } });
        passwordInput.simulate('change', { target: { value: 'password123' } });
      
        // Force a re-render to reflect state changes
        wrapper.update();
      
        // Re-find the submit button after state update
        const updatedSubmitButton = wrapper.find('input[type="submit"]');
        
        //console.log('submitButton prop disabled:', updatedSubmitButton.prop('disabled'));
      
        expect(updatedSubmitButton.prop('disabled')).toBe(true);
      });   
});
