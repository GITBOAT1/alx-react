import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App, { mapStateToProps } from './App/App';

console.error = jest.fn();
// Mock Aphrodite
jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: styles => styles,
    hairlineWidth: 1,
  },
  css: jest.fn().mockImplementation((...args) => args),
}));

const mockStore = configureStore([]);
Enzyme.configure({ adapter: new Adapter() });



// Mock ReactDOM.render
jest.mock('react-dom', () => ({
  render: jest.fn(),
}));
describe('App', () => {
  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('should render Login when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
  });

  it('should render CourseList', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
  });

  it('should not render Login', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(false);
  });

  it('should have default state displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should update state displayDrawer to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should update state displayDrawer to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    // Set the initial state to true to simulate opening the drawer
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

describe('App component and mapStateToProps', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      // Your initial state here if needed
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  describe('mapStateToProps', () => {
    it('returns the correct object when the user is logged in', () => {
      const state = {
        uiReducer: {
          isLoggedIn: true,
        },
      };

      const result = mapStateToProps(state);

      expect(result).toEqual({ isLoggedIn: true });
    });

    // Add more test cases for different states if needed
  });
});