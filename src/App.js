import React from 'react';

const api = {
  key: "653da8bd8a3eadac10ed6832d5720dfb",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }

  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search...'>
          </input>
        </div>
        <div>
          <div className='location-box'>Lisboa</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
