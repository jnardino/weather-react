import logo from './logo.svg';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from App!
        </p>
        <Weather />
      </header>
    </div>
  );
}

export default App;
