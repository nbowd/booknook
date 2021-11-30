import React from 'react'
import Card from './Card'


function CreateCards({results}) {
    return (
        <div className='wrapper'>
            {results.map(result => 
            <Card
                key={result.key}
                id={result.key}
                cover={result.cover}
                title={result.title}
                author={result.author}
            />)}
        </div>
    )
}

export default CreateCards
