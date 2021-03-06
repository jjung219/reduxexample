import logo from './logo.svg';
// import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
