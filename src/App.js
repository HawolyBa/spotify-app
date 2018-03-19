import React, { Component } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import User from './components/User';
import Playlists from './components/Playlists';

import queryString from 'query-string';



class App extends Component {

  constructor() {
    super()
    this.state = {
      userpic: "",
      username: "",
      playlists: []
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token;

    fetch("https://api.spotify.com/v1/me/", {
     headers: { 'Authorization': 'Bearer ' + accessToken }
   }).then(res => res.json())
     .then(data => this.setState({
       username: data.display_name,
       userpic: data.images[0].url
     }))

     fetch("https://api.spotify.com/v1/me/playlists", {
     headers: { 'Authorization': 'Bearer ' + accessToken }
   }).then(res => res.json())
     .then(data => this.setState({
       playlists: data.items
     }))

     if (!accessToken) {
      window.location = "http://playstify-backend.herokuapp.acom/login"
    }
     

  }

  render() {
    return (
      
      <div className="App">
        <div className="wrapper">
          <User username={this.state.username} userpic={this.state.userpic} />
          <Playlists playlists={this.state.playlists}>
            <SearchForm/>
          </Playlists>
        </div>
      </div>
    );
  }
}

export default App;
