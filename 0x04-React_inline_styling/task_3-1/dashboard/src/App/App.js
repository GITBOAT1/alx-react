import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import '../index.js';
// Import the newly created components
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5ab',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  footer: {
    backgroundColor: '#deb5b545',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    padding: '10px 0',
  },
});

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
      <div className={css(styles.body)}>
        <div>
          <Notifications displayDrawer={true} listNotifications={listNotifications} />
        </div>
        <Header />

        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}

        {/* Add a new block for "News from the School" */}
        <BodySection title="News from the School">
          <p>Some random text about news from the school.</p>
        </BodySection>

        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};

export default App;
