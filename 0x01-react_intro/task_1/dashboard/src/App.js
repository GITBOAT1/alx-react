import holberton_logo from './holberton_logo.png'
import './App.css';
import Notifications from './Notifications';
import getFooterCopy from './utils.js'
import getFullYear from './utils.js';


function App() {
  const isIndex =  true;
  return (
    <div>
      <div>
      {/* Other elements */}
      <Notifications />
      {/* Other elements */}
    </div>
      <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
