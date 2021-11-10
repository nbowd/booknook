import React from 'react'
import defaultCover from '../default_book_cover.jpeg'
import Card from './Card'


function CreateCards({results}) {
    return (
        <div className='wrapper'>
            {results.map(result => 
            <Card
                key={result.key}
                id={result.key}
                cover={result.cover? result.cover: defaultCover}
                title={result.title}
                author={result.author}
                vendor={result.vendor}
            />)}
        </div>
    )
}

export default CreateCards
