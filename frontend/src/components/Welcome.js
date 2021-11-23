import React from 'react'
import './Welcome.css'

function Welcome() {
    return (
        <div className='welcome'>
            <div>
                <p>Welcome to Booknook!</p>
                <p>Get book recommendations for dozens of subjects</p>
            </div>
            <div className='get-started'>
                <p>Getting Started:</p>
                <ul>
                    <li>Type or scroll through the subjects list</li>
                    <li>Click 'Find Books' to get results</li>
                    <li>Click 'More Info' to see a book description and shopping link</li>
                </ul>
            </div>
            <div>To ensure fresh results, each selection is taken from a random sample of books tagged with that subject.</div>
        </div>
    )
}

export default Welcome
