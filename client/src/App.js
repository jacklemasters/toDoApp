import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bryce, Brady, and Jack's React Application
        </p>
        <a
          className="App-link"
          href="https://github.com/jacklemasters/toDoApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </header>
    </div>
  );
}

export default App;
