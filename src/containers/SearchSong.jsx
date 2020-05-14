import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchSongs } from '../services/ApiFetch';

const SearchSong = ({}) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { albumID } = useParams();

  useEffect(() => { 
    if(albumId)
      setLoading(true);

    fetchSongs(albumId, page)
      .then(({ songs }) => {
        setSongs(songs);
        setLoading(false);
      });
  }, []);



  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <SongList songs={songs} />
    </>
  );
};
    
    
export default SearchSong;
    
