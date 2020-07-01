import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchMovies from './components/FetchMovies'

function App() {
  return (
    <div className="App">
      <FetchMovies searchQuery={'lord of the rings'}/>
    </div>
  );
}

export default App;
