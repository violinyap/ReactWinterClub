import logo from './logo.svg';
import './App.css';
import Main from "./screens/Main";
import Footer from './components/Footer';
import Travel from './screens/Travel'
import 'bootstrap/dist/css/bootstrap.min.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {
  return (
    <Travel />
  )
}

export default App;
