import logo from './logo.svg';
import './App.css';
import Timer from "./Timer/Timer";
import Ref from "./Ref/Ref";
import Memo from "./Memo/Memo";
import Parent from "./PassData/Parent";
import PromiseEntity from "./Promise/PromiseEntity";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PromiseEntity/>
        {/*<Parent/>*/}
        {/*<Memo/>*/}
        {/*<Ref/>*/}
        {/*<Timer/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
