import React from 'react';
import { connect } from 'react-redux';  // Import connect from Redux
import { AppProvider, useAppContext } from './AppContext';
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
import { uiReducer } from 'your-redux-store-path'; // Update this path with your actual store path
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions"

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

const App = ({ isLoggedIn }) => {
  return (
    <AppProvider>
      <AppContent isLoggedIn={isLoggedIn} />
    </AppProvider>
  );
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  };
};

// Connect the mapStateToProps function to the component
export default connect(mapStateToProps, mapDispatchToProps)(App);

const AppContent = ({
  isLoggedIn,
  displayDrawer,
  displayNotificationDrawer,
  hideNotificationDrawer,
  logOut,
  user,
}) => {
  // Access the context values using the useAppContext hook
  const { setUpdateUser, setUpdateLogOut } = useAppContext();

  const logIn = (email, password) => {
    setUpdateUser({ email, password, isLoggedIn: true });
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

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

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={css(styles.body)}>
      <div>
        <Notifications
          displayDrawer={displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
      </div>
      <Header />

      {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={logIn} />
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
};

AppContent.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object,
};

AppContent.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => {},
  user: {},
};
