import React, { useState } from 'react'
import './SearchControls.css'
import SearchBar from './SearchBar'
import Button from './Button'
import axios from 'axios'


function SearchControls({setResults}) {
    const baseURL = 'https://try-booknook.herokuapp.com/api/books'
    
    // Hardcoded to avoid having to make a separate call for this value.
    const subjects = {
        'Fantasy': 12442,
        'Science Fiction':15253,
        'Action & Adventure': 1650,
        'Mystery':4785,
        'Horror': 1775,
        'Thriller': 2059,
        'Historical Fiction':6844,
        'Romance':19733,
        'Magic':13930,
        'Graphic Novels': 9748,
        'Short Story': 1507,
        'Juvenile': 2369,
        'Autobiography':2983,
        'Biography':622100,
        'Cooking': 24697,
        'Art':65208,
        'Self-help':3799,
        'History': 1639606,
        'True Crime': 1138,
        'Humor': 20240,
        'Essays': 3603,
        'Humanities':3560,
        'Parenting': 8174,
        'Science': 68592
    }

    const [selectedOption,setSelectedOption] = useState(null)

    // Creates a pair containing: a url friendly version and a human friendly version
    const options = []
    Object.keys(subjects).forEach(subject => {
        options.push({value: subject.toLocaleLowerCase().replaceAll(' ', '_'), label: subject})
    })

    const handleChange = (option) => {
        setSelectedOption(option)
    }

    const handleSearch = async() => {
        if (!selectedOption) return null
        let request = await axios.get(baseURL, {params: {subject: selectedOption.value, amount: subjects[selectedOption.label]}})
        let res = request.data
        setResults(res)  
    }
    
    return (
    <div className="search">
        <div className="search-bar-title">
            <h2>Select a Subject:</h2>
            <SearchBar options={options} handleChange={handleChange} />
        </div>            
        <Button className="search-button" message="Find Books" onClick={handleSearch}/>
    </div>
    )
}

export default SearchControls
