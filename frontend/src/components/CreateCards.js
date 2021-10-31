import React from 'react'
import fakebook from '../fakebook.jpeg'
import Card from './Card'


function CreateCards({results}) {
    return (
        <div className='wrapper'>
            {results.map(result => 
            <Card
                key={result.key}
                id={result.key}
                cover={fakebook}
                title={result.title}
                author={result.authors[0]? result.authors[0].name: 'Unknown'}
            />)}
        </div>
    )
}

export default CreateCards
