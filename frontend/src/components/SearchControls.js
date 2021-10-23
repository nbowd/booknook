import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Button from './Button'
import axios from 'axios'


function SearchControls({setResults}) {
    const baseURL = 'http://localhost:3001/api/books'
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
        'Travel': 55114,
        'True Crime': 1138,
        'Humor': 20240,
        'Essays': 3603,
        'Guide / How to': 557,
        'Religion':71494,
        'Humanities':3560,
        'Parenting': 8174,
        'Science': 68592
    }
    // console.log();
    const [selectedOption,setSelectedOption] = useState(null)
    const options = []
    Object.keys(subjects).forEach(subject => {
        options.push({value: subject.toLocaleLowerCase().replaceAll(' ', '_'), label: subject})
    })

    const handleChange = (option) => {
        setSelectedOption(option)
        console.log('Option selected:', option);
    }

    const handleSearch = async() => {
        // console.log(selectedOption.value);
        // const searchResults = await axios.get(`http://www.openlibrary.org/subjects/${selectedOption.value}.json?limit=5`)
        // console.log(subjects[selectedOption.label]);
        if (!selectedOption) return null
        let request = await axios.get(baseURL, {params: {subject: selectedOption.value, amount: subjects[selectedOption.label]}})
        let res = request.data
        setResults(res)
        
    }
    return (
    <div className="search">
        <SearchBar options={options} handleChange={handleChange} />
        <Button className="search-button" message="Search Books" onClick={handleSearch}/>
    </div>
    )
}

export default SearchControls
