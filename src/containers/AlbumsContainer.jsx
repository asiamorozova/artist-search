import React, { useState, useEffect } from 'react';
import Albums from '../components/Albums/Albums';
import { fetchArtist, fetchAlbum } from '../services/ApiFetch';
import PropTypes from 'prop-types';

const AlbumsContainer = ({ match }) => {
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchArtist(match.params.id)
      .then(artist => setArtist(artist));

    fetchAlbum(match.params.id)
      .then(albums => setAlbums(albums));
  }, []);

  const handleNoImage = e => {
    e.target.src = 'https://www.placecage.com/gif/200/300';
  };

  return (
    <Albums artist={artist} albums={albums} onBrokenImage={handleNoImage} />
  );

};

AlbumsContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default AlbumsContainer;

