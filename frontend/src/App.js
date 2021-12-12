import React, { useState, useEffect } from 'react'
import './App.css';
import Welcome from './components/Welcome';
import SearchControls from './components/SearchControls';
import CreateCards from './components/CreateCards';
import loginService from './services/login' 


function App() {
    const [results, setResults] = useState(null)
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
   
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const credentials = await loginService.login({
              username, password,
            })
        
            window.localStorage.setItem(
                'loggedBookappUser', JSON.stringify(credentials)
              ) 
            setToken(credentials)
            setUser(credentials)
            setUsername('')
            setPassword('')
          } catch (exception) {
            console.log('Wrong Credentials');
          }
        console.log('logging in to', username)
      }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBookappUser')
        if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        setToken(user.token)
        }
    }, [])
 
    return <div id='app'>
        <div className='login-form'>
            <form onSubmit={handleLogin}>
                <div>
                username
                    <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
                </div>
                <div>
                password
                    <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                </div>
                <button type="submit">login</button>
            </form>
        </div>        
        <div className="intro">
            <h1 className="title">Booknook</h1>
            <SearchControls setResults={setResults} />    
        </div>

        {/* Search results displayed as cards, instructions displayed if no subject has been searched yet */}
        {results?
        <CreateCards token={token} results={results}/>
        : 
        <Welcome/>}
    </div>
}

export default App;