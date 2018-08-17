import React from 'react'

const SearchForm = ({ onHandleSubmit, onChangeText, searchQuery }) => {
    return(
        <form id="searchForm" onSubmit={onHandleSubmit} className="searchForm">
            <label className="srOnly" htmlFor="searchTerm">Search:</label>
            <input 
                type="search"
                id="searchTerm"
                name="searchTerm" 
                placeholder="Search Argos..."
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                value={searchQuery}
                onChange={(event) => onChangeText(event.target.value)}
                className="searchInput"
            />

            <button className="submitBtn" type="submit" id="submitButton" name="submitButton">
                <span className="srOnly">Search button</span>
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    )
}

export default SearchForm