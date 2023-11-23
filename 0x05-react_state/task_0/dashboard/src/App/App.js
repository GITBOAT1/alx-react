import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import '../index.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

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
    bottom: 0,
    padding: '10px 0',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false, // Set the default state to false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.displayDrawer !== this.props.displayDrawer) {
      console.log('Notifications component updated. Display Drawer State:', this.props.displayDrawer);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleDisplayDrawer = () => {
    this.setState((prevState) => ({ displayDrawer: !prevState.displayDrawer }));
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    const { isLoggedIn } = this.props;

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
          {/* Pass the state and functions to Notifications component */}
          <Notifications
            displayDrawer={this.state.displayDrawer}
            listNotifications={listNotifications}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
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
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
