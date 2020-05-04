import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ artist, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}> 
    <label>
      <input type="text" 
        name="search" 
        placeholder="Enter Artist Here" 
        value={artist} 
        onChange={onChange}
      > 
      </input>

    </label>
    <button type="submit">Search</button>
  </form>
);

Search.propTypes = {
  artist: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

};

export default Search; 

