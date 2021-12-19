import React from 'react'
import './Welcome.css'

function Welcome() {
    return (
        <div className='welcome'>
            <div>
                <p>Welcome to Booknook!</p>
                <p>Get unique book recommendations for dozens of subjects</p>
            </div>
            <div className='get-started'>
                <p>Getting Started:</p>
                <ul>
                    <li>Type or scroll through the subjects list</li>
                    <li>Click 'Find Books' to get results</li>
                    <li>Click 'More Info' to see a book description, shopping link, and save options</li>
                </ul>
            </div>
            <div>
                Register an account to save a book for later. While logged in, click 'Saved Books' to view/delete the user's saved selections.
            </div>
  
        </div>
    )
}

export default Welcome
