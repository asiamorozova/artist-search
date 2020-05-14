import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ title, date }) => (
  <section>
    <h2>{title}</h2>
    <p>{date}</p>
  </section>
);

Album.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Album;

