import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    // Create the listCourses array with three elements
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <div>
        <div>
          <Notifications displayDrawer={true} listNotifications={listNotifications} />
        </div>
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired, // Add the logOut prop with the function type
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}, // Set the default value to an empty function
};

export default App;
