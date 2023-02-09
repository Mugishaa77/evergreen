import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from './container/LogIn';
import NavScreen from './NavScreen';


function App() {
  return (
    <div className="App">
      <NavScreen />
      <LogIn />
      
      
    </div>
  );
}

export default App;
