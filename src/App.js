import React from 'react';

// Compnents
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widget from './components/Widget';

// Styles
import './App.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app-body">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widget></Widget>
      </div>
    </div>
  );
}

export default App;
