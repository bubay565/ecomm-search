import React from 'react'

const SearchSort = ({ onSortBy, onFilterBy, trolley, viewTrolley }) => {
    return (
        <menu className="filterInput">            
            <li className="filterList"><button className="filterList" onClick={() => onSortBy('price')}>Price</button></li>
            <li className="filterList"><button className="filterList" onClick={() => onSortBy('avgRating')}>Star rating</button></li>
            <li className="filterList"><button className="filterList" onClick={() => onFilterBy('fastTrack')}>FastTrack</button></li>
            {
                trolley.length > 0 && 
                <li className="filterList">
                  <button className="filterList" onClick={() => viewTrolley()}>View Trolley</button>
                </li>
            }
        </menu>
    )
}

export default SearchSort