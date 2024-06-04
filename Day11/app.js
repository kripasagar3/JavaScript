import logo from './logo.svg';
import './App.css';
import Demo from "./Component/Demo.js";
import Demo2 from "./Component/Demo2.js";
import Demo3 from './Component/Demo3.js';
import Democlassno from './Component/Democlassno.js';
import Student from './Component/classIheric.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>Welcome</h1>
          <h2> <Demo/></h2>
          <h2> <Demo2 /></h2>
          <h2> <Demo3 /></h2>
          <h2><Democlassno /> </h2>
          <h2><Student  name="raju" school="A2b" /></h2>
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

export default App;
