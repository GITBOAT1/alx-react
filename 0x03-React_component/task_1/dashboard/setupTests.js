import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

// Define a global KeyboardEvent constructor
global.KeyboardEvent = window.KeyboardEvent;

global.alert = (message) => {
  console.log(message); // Use console.log to log the alert messages for testing
};

// Add any other global variables or functions needed for your tests
