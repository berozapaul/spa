import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Timer from "./Timer/Timer";
import Ref from "./Ref/Ref";
import Memo from "./Memo/Memo";
import Parent from "./PassData/Parent";
import PromiseEntity from "./Promise/PromiseEntity";
import RenderProps from "./RenderProps/RenderProps";
import useConstructor from "./Hooks/useConstructor";

function App() {
  const [initialValue, setInitialValue] = useState('');
  useConstructor(() => {
    console.log('It comes here once');
    setInitialValue('This should set before the render');
  });

  const handleClick = (event) => {
    setInitialValue('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <PromiseEntity/>
        <RenderProps/>
        {/*<Parent/>*/}
        {/*<Memo/>*/}
        {/*<Ref/>*/}
        {/*<Timer/>*/}
        <h2>{initialValue}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
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
