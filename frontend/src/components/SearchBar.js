import React from 'react'
import './SearchControls.css'
import Select from 'react-select'

function SearchBar({options, handleChange}) {
    return (
        <Select 
            className="search-bar"
            menuPortalTarget={document.body}
            options={options} 
            onChange={handleChange}
        />
    )
}

export default SearchBar