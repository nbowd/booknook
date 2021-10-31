import React, { useState } from 'react'
import './App.css';
import Welcome from './components/Welcome';
import SearchControls from './components/SearchControls';
import CreateCards from './components/CreateCards';

function App() {
    const [results, setResults] = useState(null) 
 
    return <div>
        <div className="intro">
            <h1 className="title">booknook</h1>
            <SearchControls setResults={setResults} />    
        </div>

        {/* Search results displayed as cards, instructions displayed if no subject has been searched yet */}
        {results?
        <CreateCards results={results}/>
        : 
        <Welcome/>}
    </div>
}

export default App;