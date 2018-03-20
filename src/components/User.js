import React, { Component } from 'react';


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
      <section className="User">
        <h2>{this.props.username}</h2>
        <img src={this.props.userpic} alt={this.props.username} style={userpic} />
      </section>
    )
  }
}

export default User;