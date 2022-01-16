import React, { useState } from 'react'
import './SearchControls.css'
import SearchBar from './SearchBar'
import Button from './Button'
import axios from 'axios'
import {subjects} from '../assets/subjects'

function SearchControls({setResults,user}) {
    const baseURL = '/api/books'
    const [selectedOption,setSelectedOption] = useState(null)

    // Creates a pair containing: a url friendly version, and a human friendly version
    const options = []
    Object.keys(subjects).forEach(subject => {
        options.push({value: subject.toLocaleLowerCase().replaceAll(' ', '_'), label: subject})
    })

    const handleChange = (option) => {
        setSelectedOption(option)
    }

    const handleSearch = async() => {
        if (!selectedOption) return null
        let response = await axios.get(baseURL, 
            {params: {
                subject: selectedOption.value, 
                amount: subjects[selectedOption.label]
            }})
        setResults(response.data)  
    }

    const handleSaved = async () => {
        let response = await axios.get(`/api/users/${user.id}`, {params:{id: user.id}})
        if (response) {setResults(response.data)}
    }
    
    return (
    <div className="search">
        <div className="search-bar-title">
            <h2>Select a Subject:</h2>
            <SearchBar options={options} handleChange={handleChange} />
        </div>
        
        <Button className="search-button" onClick={handleSearch} message="Find Books"/>
        {user? <Button className="search-button find-books" message="Saved Books" onClick={handleSaved}/>:null}
    </div>
    )
}

export default SearchControls
