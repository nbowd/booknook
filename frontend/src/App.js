import React, { useState } from 'react'
import './App.css';
import Card from './components/Card';
import fakebook from './fakebook.jpeg'
import SearchControls from './components/SearchControls';

function App() {
    const [results, setResults] = useState([])  
    return <div>
        <div className="intro">
            <h1 className="title">booknook</h1>
            <SearchControls setResults={setResults} />    
        </div>
        <div className='wrapper'>
            {/* <Card 
                cover={fakebook}
                title={'ur mom'}
                author={'lole'}
            /> */}
            {results.map(result => 
                <Card
                    key={result.key}
                    id={result.key}
                    cover={fakebook}
                    title={result.title}
                    author={result.authors[0]? result.authors[0].name: 'Unknown'}
                />
            )}
        </div>
    </div>
}

export default App;