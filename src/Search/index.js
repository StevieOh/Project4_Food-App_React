import React from 'react';

const Search = (props) => {

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="search" name="city" onChange={props.handleChange} value={props.city} placeholder="Search" />

        <input type="submit" value="submit" />
      </form>
    </div>
    )
}



export default Search;