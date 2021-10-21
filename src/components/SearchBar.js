import React from 'react'
import Select from 'react-select'

function SearchBar({options, handleChange}) {
    return (
        <Select className="search-bar" options={options} onChange={handleChange} />
    )
}

export default SearchBar