import React from 'react';
import logo from '../img/logo.png'
import '../style/User.css'


const User = props => {
  
  const tracks = props.tracks && props.tracks.reduce(function(a, b){ return a + b}, 0 )
  let merged = props.duration && [].concat.apply([], props.duration);
  const totalDuration = merged && merged.reduce(function(a, b){ return Number(a) + Number(b)}, 0 )

  return (
    <section className="User">
      <div className="details">
        <h2>{props.username}, {props.country}</h2>
        <img src={props.userpic} alt={props.username} className="avatar" />
      </div>
      <div className="group">
      <table cellSpacing={"5"}>
        <tbody>
          <tr>
            <td>{props.playlists.length}</td>
            <td>{tracks}</td>
            <td>{totalDuration && (totalDuration / 3600000).toFixed(0)}</td>
          </tr>
          <tr>
            <td>playlists</td>
            <td>tracks</td>
            <td>hours</td>
          </tr>
        </tbody>
      </table>
      <a className="user-btn" href={props.uri} target="_blank">Mon compte</a>
      </div>
    </section>
  )
}

export default User;