import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import SearchControls from './components/SearchControls';
import CreateCards from './components/CreateCards';
import Login from './components/Login';
import jwt_decode from 'jwt-decode';

function App() {
  const [results, setResults] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const loginProps = {
    setUser,
    setToken,
    user,
    setResults,
  };

  // Check for saved login session and verifies that token is still valid
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBookappUser');

    if (!loggedUserJSON) return null;

    const user = JSON.parse(loggedUserJSON);

    let decodedToken = jwt_decode(user.token);
    let currentDate = new Date();

    if (decodedToken.exp * 1000 > currentDate.getTime()) {
      setUser(user);
      setToken(user.token);
    }
  }, []);

  return (
    <div id="app">
      <div className="intro">
        <h1 className="title">Booknook</h1>
        <SearchControls setResults={setResults} user={user} />
      </div>
      <Login props={loginProps} />

      {/* Search results displayed as cards, instructions displayed if no subject has been searched yet */}
      {results ? (
        <CreateCards token={token} results={results} setResults={setResults} />
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
