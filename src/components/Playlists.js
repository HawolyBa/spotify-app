import React, { Component } from 'react';

let playlistStyle = {
    padding: "50px 50px 50px 20px",
    width: "70%",
    overflow: "hidden"
}

let playlistGrid = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
}

let gridItem = {
    display: "flex",
    flexFlow: "column",
    marginRight: "15px",
    marginBottom: "15px",
    textAlign: "center",
    maxWidth: "160px"
}

class Playlists extends Component {
    constructor(props) {
        super()
    }
    
  render() {
      
      const playlists = this.props.playlists.map((playlist,i) =>(
        <div key={i} style={gridItem} >
            <a href={playlist.external_urls.spotify} target="_blank" >
                <img src={ playlist.images[0].url } style={{width: "160px"}} />
                <h3>{playlist.name}</h3>
            </a>
        </div>  
      ))
    return (
      <section className="Playlists" style={playlistStyle}>
        {this.props.children}
        <h2>Playlists</h2>
        <div style={playlistGrid} className="playlistGrid" >
             {playlists}
        </div>
      </section>
    )
  }
}

export default Playlists;