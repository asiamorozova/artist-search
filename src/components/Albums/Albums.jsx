import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Albums/Album';
import { Link } from 'react-router-dom';

const Albums = ({ albums }) => {
  const albumsList = albums.map(album => (
    <Link to={`/songs/${album.id}`} key={album.id}>
      <li>
        <Album {...album}/>
      </li>
    </Link>
  ));

  return (
    <ul>
      {albumsList}
    </ul>
  );
};
   


Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    albums: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    profileUrl: PropTypes.string.isRequired
  })).isRequired
};

export default Albums;
