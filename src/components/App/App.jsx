
import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
//import ArtistSearch from '../ArtistSearch/ArtistSearch';
import Artist from '../Artist/Artist';
import ArtistDisplay from '../../containers/ArtistDisplay';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={ArtistDisplay}/>
          <Route exact path='/' component={Artist}/>  
        </Switch>
      </Router>
    </>
  );
}
  
