import React, { useState } from 'react'
import './App.css';
import Card from './components/Card';
import Welcome from './components/Welcome';
import fakebook from './fakebook.jpeg'
import SearchControls from './components/SearchControls';

function App() {
    const [results, setResults] = useState(null) 
    const createCards = () => {
        return results.map(result => 
            <Card
                key={result.key}
                id={result.key}
                cover={fakebook}
                title={result.title}
                author={result.authors[0]? result.authors[0].name: 'Unknown'}
            />)
    } 
    return <div>
        <div className="intro">
            <h1 className="title">booknook</h1>
            <SearchControls setResults={setResults} />    
        </div>
        {results?
        <div className='wrapper'>
            {createCards()}
        </div>
        : 
        <Welcome/>}
    </div>
}

export default App;