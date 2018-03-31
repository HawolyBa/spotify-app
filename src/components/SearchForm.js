import React, { Component } from 'react';

let formStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    borderBottom: "solid 1px green",
    color: "#222",
    marginBottom: "30px",
    padding: "5px",
    height: "50px"
}

class SearchForm extends Component {
  
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input onKeyUp={e => this.props.onTextChange(e.target.value)} type="text" name="searchform" style={formStyle} placeholder="Search a playlist" />
      </form>
    )
  }
}

export default SearchForm