import React, { Component } from 'react';
import './App.css';

import SearchForm from './components/SearchForm'
import User from './components/User'
import Playlists from './components/Playlists'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <User />
          <Playlists>
            <SearchForm/>
          </Playlists>
        </div>
      </div>
    );
  }
}

export default App;
