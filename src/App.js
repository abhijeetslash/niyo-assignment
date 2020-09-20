import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Movies from './Movies/Movies';
import Favourites from './pages/Favourites/Favourites';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (

    <div className="App">
        <Movies />
    </div>
  );
}

export default App;
