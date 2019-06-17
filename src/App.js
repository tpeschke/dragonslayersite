import React from 'react';
import './App.css';

import Routes from './routes'
import Nav from './components/nav/nav'
import Footer from './components/nav/foot'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
