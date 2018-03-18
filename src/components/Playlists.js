import React, { Component } from 'react';

let playlistStyle = {
    padding: "50px 50px 50px 20px",
    width: "70%"
}

class Playlists extends Component {
  render() {
    return (
      <section className="User" style={playlistStyle}>
        {this.props.children}
        <h2>Playlists</h2>
      </section>
    )
  }
}

export default Playlists;