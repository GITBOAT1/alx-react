import React from 'react';
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

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const AppContent = () => {
  // Access the context values using the useAppContext hook
  const { user, logOut, setUpdateUser, setUpdateLogOut } = useAppContext();
  const [displayDrawer, setDisplayDrawer] = React.useState(true);

  const logIn = (email, password) => {
    setUpdateUser({ email, password, isLoggedIn: true });
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  const handleDisplayDrawer = () => {
    setDisplayDrawer((prevDisplayDrawer) => !prevDisplayDrawer);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
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
          displayDrawer={user.displayDrawer}
          listNotifications={user.listNotifications}
          handleDisplayDrawer={handleDisplayDrawer} 
          handleHideDrawer={handleHideDrawer} />
      </div>
      <Header />
      
      {user.isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={user.listCourses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={logIn} /> {/* Pass the logIn function to the Login component */}
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
  logOut: PropTypes.func.isRequired,
};

AppContent.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;

AppContent.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

AppContent.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};