import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ token, setToken ] = useState(false); 

  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  };
    
  useEffect(() => {
    tokenCheck();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
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
