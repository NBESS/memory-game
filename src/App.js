import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>Money game</h1>
        <h2>Match cards to win</h2>
      </header>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
    </div>
  );
}

export default App;
