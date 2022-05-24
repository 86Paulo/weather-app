import React from 'react';
import './App.css';

const api = {
  key: "653da8bd8a3eadac10ed6832d5720dfb",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search...'>
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
