import logo from './logo.svg';
import './App.css';

function App() {

  const nom = 'React';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>
         yo what's up {nom.toLocaleUpperCase()} !
       </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>
      </header>
    </div>
  );
}

export default App;
