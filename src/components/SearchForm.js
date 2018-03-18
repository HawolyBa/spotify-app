import React, { Component } from 'react';

let formStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    borderBottom: "solid 1px green",
    color: "white",
    marginBottom: "50px",
    padding: "5px"
}

class SearchForm extends Component {
  render() {
    return (
      <form>
        <input type="text" name="searchform" style={formStyle} placeholder="Search a song or a playlist" />
      </form>
    )
  }
}

export default SearchForm