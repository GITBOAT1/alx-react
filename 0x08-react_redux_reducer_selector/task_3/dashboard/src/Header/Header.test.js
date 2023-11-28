import Header from "./Header";
import { shallow, mount} from "enzyme";
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import { AppProvider } from '../App/AppContext';

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
 
  /*
  it('renders logoutSection with user-defined context', () => {
    const wrapper = shallow(
      <AppProvider>
        <Header />
      </AppProvider>
    );

    // Update context to simulate logged-in user
    // For example, you can use the setUpdateUser function from your context
    // to set isLoggedIn and email.

    // Assert that logoutSection is created
    expect(wrapper.find('[data-testid="logoutSection"]')).toHaveLength(1);
  });

  it('clicking on logout link calls logOut spy', () => {
    // Mock logOut function
    const logOutSpy = jest.fn();

    const wrapper = mount(
      <AppProvider>
        <Header logOut={logOutSpy} />
      </AppProvider>
    );

    // Update context to simulate logged-in user
    // For example, you can use the setUpdateUser function from your context
    // to set isLoggedIn, email, and logOut.

    // Click on the logout link
    wrapper.find('[data-testid="logoutLink"]').simulate('click');

    // Assert that logOut spy is called
    expect(logOutSpy).toHaveBeenCalled();
  });*/

});
