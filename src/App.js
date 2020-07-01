import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchMovies from './components/FetchMovies'

function App() {
  return (
    <div className="App">
      <FetchMovies searchQuery={'star wars'}/>
    </div>
  );
}

export default App;
