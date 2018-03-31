import React, { Component } from 'react';
import '../style/Playlists.css'


class Playlists extends Component {

  render() {
        const playlists = this.props.playlists && this.props.playlists.filter((playlist, i) => {
             return playlist && playlist.name.toLowerCase().includes(this.props.filter.toLowerCase())
         }).map((playlist,i) =>(
            <div key={i} className="gridItem" >
                <a href={playlist.external_urls.spotify} target="_blank" >
                    <img src={ playlist.images[0].url } alt={playlist.name} />
                    <h3>{playlist.name}</h3>
                </a>
            </div>  
          ))
    return (
      <section className="Playlists">
        {this.props.children}
        <div className="playlistGrid" className="playlistGrid" >
             {this.props.playlists && playlists}
        </div>
      </section>
    )
  }
}

export default Playlists;