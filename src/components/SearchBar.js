import React from "react";
const SearchBar = ({ searchChange}) => {
    return (
        <div>
           <input className="pa3 br4 b--red bg-lightest-yellow " type="search" placeholder="Search Kitty" onChange={searchChange} /> 
        </div>
    )
}
export default SearchBar;