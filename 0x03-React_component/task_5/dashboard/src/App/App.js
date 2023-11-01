import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(false);
  };
  return (
   
    <React.Fragment>
      <div>
        <div>
          <Notifications displayDrawer={true}/>
        </div>
        <div>
          <Header/>
        </div>
        <div className="App-body">
          {!loggedIn && <Login onLogin={handleLogin} />}
          {loggedIn && <CourseList />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
