import React from 'react'
import Select from 'react-select'

function SearchBar({options, handleChange}) {
    return (
        <Select 
            className="search-bar"
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 })}}
            menuPortalTarget={document.body}
            options={options} 
            onChange={handleChange}
        />
    )
}

export default SearchBar