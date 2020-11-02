import React, { useEffect } from 'react';
import { getTokenFromResponse, getToken } from './spotify'
import Login from './components/login/Login';


function App() {
  useEffect(() => {
    console.log(getTokenFromResponse());

  })
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
