import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  const { isLoggedIn } = props;

  return (
    <div>
      <div>
        <Notifications />
      </div>
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
