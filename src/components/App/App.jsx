
import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import ArtistDisplay from '../../containers/ArtistDisplay';
import AlbumDisplay from '../../containers/AlbumsContainer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={ArtistDisplay}/>
          <Route exact path='/artist/:id' component={AlbumDisplay}/>  
          
        </Switch>
      </Router>
    </>
  );
}
  
