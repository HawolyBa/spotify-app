import React, { Component } from 'react';

let userStyle = {
    padding: "30px",
    textAlign: "center",
    width: "30%"
}

let userpic = {
    width: "120px",
    borderRadius: "50%"
}

class User extends Component {

    constructor(props){
        super()
    }
    
  render() {
    return (
      <section className="User" style={userStyle}>
        <h2>{this.props.username}</h2>
        <img src={this.props.userpic} alt={this.props.username} style={userpic} />
      </section>
    )
  }
}

export default User;