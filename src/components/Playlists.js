import React, { Component } from 'react';

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
    maxWidth: "150px"
}

class Playlists extends Component {

  render() {
        const playlists = this.props.playlists && this.props.playlists.filter((playlist, i) => {
             return playlist && playlist.name.toLowerCase().includes(this.props.filter.toLowerCase())
         }).map((playlist,i) =>(
            <div key={i} style={gridItem} >
                <a href={playlist.external_urls.spotify} target="_blank" >
                    <img src={ playlist.images[0].url } style={{width: "150px"}} alt={playlist.name} />
                    <h3>{playlist.name}</h3>
                </a>
            </div>  
          ))
    return (
      <section className="Playlists">
        {this.props.children}
        <div style={playlistGrid} className="playlistGrid" >
             {this.props.playlists && playlists}
        </div>
      </section>
    )
  }
}

export default Playlists;