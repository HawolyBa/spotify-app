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
      playlists: [],
      filter: ''
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
       userpic: data.images[0].url,
       country: data.country,
       followers: data.followers.total,
       uri: data.external_urls.spotify
     }))

     fetch("https://api.spotify.com/v1/me/playlists", {
     headers: { 'Authorization': 'Bearer ' + accessToken }
   }).then(res => res.json())
     .then(playlistData => {
      let playlists = playlistData.items
      let trackDataPromises = playlists.map(playlist => {
        let responsePromise = fetch(playlist.tracks.href, {
          headers: { 'Authorization': 'Bearer ' + accessToken }
        })
        let trackDataPromise = responsePromise
        .then(response => response.json())
        return trackDataPromise;
      })
      let allTracksDataPromises = 
      Promise.all(trackDataPromises)
      let playlistPromise = allTracksDataPromises.then(trackDatas => {
        trackDatas.forEach((trackData, i) => {
          playlists[i].trackDatas = trackData.items
          .map(item => item.track)
          .map(trackData => ({
            name: trackData.name,
            duration: trackData.duration_ms
          }))
        })
        return playlists;
      })
      return playlistPromise;
     })
     .then(playlists => this.setState({
      playlists,
      tracks: playlists.map(item => {
         return item.tracks.total
      }),
      duration: playlists.map(item => {
         return item.trackDatas.map(it => {
           return it.duration
         })
     }),
     songNames: playlists.map(item => {
      return item.trackDatas.map(it => {
        return it.name
      })
    }),
  }))
}
  render() {
    console.log(this.state.playlists)
    return (
      <div className="App">
        { this.state.username ? 
        <div className="wrapper">
          <User 
          username={this.state.username} 
          userpic={this.state.userpic} 
          country={this.state.country}
          followers={this.state.followers}
          uri={this.state.uri}
          tracks={this.state.tracks}
          duration={this.state.duration}
          playlists={this.state.playlists} />
          <Playlists 
          playlists={this.state.playlists}
          filter={this.state.filter}
          song={this.state.songNames}
          >
            <SearchForm onTextChange={text => this.setState({filter: text})} />
          </Playlists>
        </div>
       : 
        <button onClick={() => {
          window.location = window.location.href.includes('localhost') 
          ? 'http://localhost:8888/login'
          : 'https://playstify-backend.herokuapp.com'
        }} >Se connecter à Spotify</button>
}
      </div>
    );
  }
}

export default App;
