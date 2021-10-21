import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Button from './Button'

function SearchControls() {
    const subjects = ['Fantasy', 'Historical Fiction', 'Horror', 'Humor', 'Literature', 'Magic', 'Mystery and detective stories', 'Plays', 'Poetry', 'Science Fiction', 'Short Stories', 'Thriller', 'Young Adult', 'Art History', 'Music History', 'Ancient Civilizations', 'Archeology', 'Anthropology', 'War', 'Social Life and Customs', 'Autobiographies', 'History', 'Politics and Government', 'Cooking', 'Exercise', 'Nutrition', 'Self-help', 'Motivational', 'Religion', 'Psychology', 'Women', 'Fashion', 'Design', ]
    const [selectedOption,setSelectedOption] = useState(null)
    const options = []
    subjects.forEach(subject => {
        options.push({value: subject, label: subject})
    })

    const handleChange = (option) => {
        setSelectedOption(option)
        console.log('Option selected:', option);
    }

    const handleSearch = () => {
        console.log(selectedOption.value);
    }
    return (
    <div className="search">
        <SearchBar options={options} handleChange={handleChange} />
        <Button className="search-button" message="Search Books" onClick={handleSearch}/>
    </div>
    )
}

export default SearchControls
