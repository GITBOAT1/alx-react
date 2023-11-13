import Header from "./Header";
import { shallow } from "enzyme";
import React from 'react';
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

describe('Header Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeTruthy();
    });
    
    it('should render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
