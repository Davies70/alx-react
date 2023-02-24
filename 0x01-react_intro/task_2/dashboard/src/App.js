import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">Login to access the full dashboard</div>
      <label for="email"></label>
      <input type="email" id="email" name="email"></input>
      <label for="password"></label>
      <input type="password" id="password" name="password"></input>
      <button>OK</button>
      <div className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</div>
    </div>
  );
}

export default App;
