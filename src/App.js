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

import formatRelative from 'date-fns/formatRelative';
import nb from 'date-fns/locale/nb';
import { format } from 'date-fns'



function App() {
  const [initialValue, setInitialValue] = useState('');
  useConstructor(() => {
    console.log('It comes here once');
    setInitialValue('This should set before the render');
  });

  const handleClick = () => {
    setInitialValue('');
  };

  const formatRelativeLocale = {
    lastWeek: 'eeee HH:mm',
    yesterday: 'eeee HH:mm',
    today: 'HH:mm',
    other: 'dd.MM.yyyy',
  };

  const locale = {
    ...nb,
    formatRelative: (token) => formatRelativeLocale[token],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Polaris ad</h1>
        <PromiseEntity/>
        <RenderProps/>
        <Parent/>
        <Memo/>
        <Ref/>
        <Timer/>
        <h2>{format(new Date(2014, 1, 11), 'yyyy-MM-dd')}</h2>
        <h2>{formatRelative(new Date(2014, 1, 11), new Date(), { locale })}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {initialValue}
      </header>
    </div>
  );
}

export default App;
