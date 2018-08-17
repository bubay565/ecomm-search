import React from 'react'
import SearchForm from './SearchForm'


const SearchBar = ({ onHandleSubmit, onChangeText, onChangeFilter, searchQuery }) => {
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
                <select className="filterInput" onChange={(event) => {onChangeFilter(event.target.value)}}>
                    <option value="">Filter</option>
                    <option value="price">Price</option>
                    <option value="rating">Star rating</option>
                    <option value="fastTrack">FastTrack</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar