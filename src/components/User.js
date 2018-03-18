import React, { Component } from 'react';

let userStyle = {
    padding: "30px",
    textAlign: "center",
    width: "30%"
}

class User extends Component {
  render() {
    return (
      <section className="User" style={userStyle}>
        <h2>User</h2>
      </section>
    )
  }
}

export default User;