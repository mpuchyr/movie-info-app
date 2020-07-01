import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchMovies from './components/FetchMovies'
import SearchMovies from './containers/SearchMovies'

function App() {
  return (
    <div className="App">
      <SearchMovies />
    </div>
  );
}

export default App;
