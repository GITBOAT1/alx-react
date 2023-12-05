import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

// Mock Aphrodite
jest.mock('aphrodite', () => ({
    StyleSheet: {
      create: styles => styles,
      hairlineWidth: 1,
    },
    css: jest.fn().mockImplementation((...args) => args),
  }));
  
Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('Footer component it renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeTruthy();
    });
    
    it('Should render the text "Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
    
});
