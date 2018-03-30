import React from 'react';
import logo from '../img/logo.png'

const userStyle = {
  padding: "30px",
  textAlign: "center",
  width: "20%",
  background: `url(${logo}) center 105% no-repeat, #1ed760`,
  backgroundSize: "50%",
  color: "white",
  borderRadius: "10px 0 0 10px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  userpic: {
    width: "120px",
    height: "120px",
    borderRadius: "50%"
  },
  button: {
    margin: "30px 0",
    padding: "5px 20px",
    backgroundColor: "white",
    color: "#222",
    boxShadow: "0 0 5px #717171"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    padding: "30px 0"
  }
}

const User = props => {
  
  const tracks = props.tracks && props.tracks.reduce(function(a, b){ return a + b}, 0 )
  let merged = props.duration && [].concat.apply([], props.duration);
  const totalDuration = merged && merged.reduce(function(a, b){ return Number(a) + Number(b)}, 0 )

  return (
    <section className="User" style={userStyle}>
      <h2>{props.username}, {props.country}</h2>
      <img src={props.userpic} alt={props.username} style={userStyle.userpic} />
      <table cellSpacing={"5"} style={userStyle.table}>
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
      <a style={userStyle.button} href={props.uri} target="_blank">Mon compte</a>
    </section>
  )
}

export default User;