import React from 'react'
import Card from './Card'


function CreateCards({results, setResults, token}) {
    return (
        <div className='wrapper'>
            {results.map(result => 
            <Card
                key={result.key}
                result={result}
                results={results}
                setResults={setResults}
                token={token}
            />)}
        </div>
    )
}

export default CreateCards
