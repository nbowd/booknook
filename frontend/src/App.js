import React, { useState, useEffect } from 'react'
import './App.css';
import Welcome from './components/Welcome';
import SearchControls from './components/SearchControls';
import CreateCards from './components/CreateCards';
import Login from './components/Login';
import jwt_decode from "jwt-decode";



function App() {
    const [results, setResults] = useState(null)
    const [email, setEmail] = useState('') 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    
    // TRY TO MOVE THIS TO LOGIN COMPONENT
    const loginProps = {email, setEmail, username, setUsername, password, setPassword, setUser, setToken, user, setResults}

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBookappUser')
        
        if (!loggedUserJSON) return null
        
        const user = JSON.parse(loggedUserJSON)
        
        let decodedToken = jwt_decode(user.token);
        let currentDate = new Date();
        // Checks that token is still valid 
        if (decodedToken.exp * 1000 > currentDate.getTime()) {
            setUser(user)
            setToken(user.token)
        }
    }, [])
 
    return <div id='app'>
        <Login props={loginProps} />
        <div className="intro">
            <h1 className="title">Booknook</h1>
            <SearchControls setResults={setResults} user={user} />    
        </div>

        {/* Search results displayed as cards, instructions displayed if no subject has been searched yet */}
        {results?
        <CreateCards token={token} results={results} setResults={setResults} />
        : 
        <Welcome/>}
    </div>
}

export default App;