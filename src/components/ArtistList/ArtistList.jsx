import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../Artist/Artist';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistList = artists.map(artist => (
    <Link to={`/albums/${artist.id}`} key={artist.id}>
      <li>
        <Artist {...artist} />
      </li>
    </Link>
  )); 

  return (
    <ul>
      { artistList }
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired
};

export default ArtistList;



