import React from 'react';
import './App.css';

import Nav from './components/nav';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default Nav(App);
