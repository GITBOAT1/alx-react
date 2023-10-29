import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';

function App() {
  return (
    <React.Fragment>
      <div >
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
