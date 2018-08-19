import React from 'react'
import SearchForm from './SearchForm'
import SearchSort from './SearchSort'


const SearchBar = ({ onHandleSubmit, onChangeText, onSortBy, onFilterBy, searchQuery, trolley, viewTrolley }) => {
    return (
        <div className="searchBar">
            <div className="searchContaner">
                <SearchForm 
                    onHandleSubmit={onHandleSubmit}
                    onChangeText={onChangeText}
                    searchQuery={searchQuery}
                /> 
            </div>
            <div className="filterContainer">
                <SearchSort 
                    onSortBy={onSortBy}
                    onFilterBy={onFilterBy}
                    trolley={trolley}
                    viewTrolley={viewTrolley}
                />                
            </div>
        </div>
    )
}

export default SearchBar