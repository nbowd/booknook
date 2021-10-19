import React from 'react'
import Select from 'react-select'

function SearchBar() {
    const options = [
        { value: 'horror', label: 'Horror' },
        { value: 'sci-fi', label: 'Sci-fi' },
        { value: 'fantasy', label: 'Fantasy' }
    ]
    return (
        <Select options={options} />
    )
}

export default SearchBar