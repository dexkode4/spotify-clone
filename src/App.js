import React, { useEffect } from 'react';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/login/Login';
import Player from './components/player/Player';
import { useDataLayerValue } from './context/dataLayer';
import {actionTypes} from './context/types';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: actionTypes.SET_USER,
          user: user
        })
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: actionTypes.SET_PLAYLIST,
          playlists: playlists 
        })
      })

      spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then(
        (response) =>
        dispatch({
          type: actionTypes.SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        })
      )
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player  spotify={spotify}/>
        ) : (
            <Login />
          )
      }

    </div>
  );
}

export default App;
