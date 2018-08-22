import React from 'react';
import './index.css'

const Search = (props) => {

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="search" name="searchLocation" onChange={props.handleChange} value={props.searchLocation} placeholder="Search by Location" />
        <input type="search" name="searchTerm" onChange={props.handleChange} value={props.searchTerm} placeholder="Search by Food" />
        <input type="submit" value="submit" />
      </form>
    </div>
    )
}



export default Search;