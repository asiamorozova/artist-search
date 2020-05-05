import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetail = ({ artistName }) => {

  return (
    <p>About {artistName} </p>
  //<p> { artistDetail } </p>
  );
};

ArtistDetail.PropTypes = {
  artistName: PropTypes.string.isRequired,
  artistDetail: PropTypes.string.isRequired
};

export default ArtistDetail;
