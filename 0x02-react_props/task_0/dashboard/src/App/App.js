import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import './App.css';



function App() {
  return (
    <div>
    <div>
      <Notifications />
    </div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
