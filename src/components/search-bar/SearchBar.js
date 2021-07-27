import React from 'react'
import './SearchBar.scss'

import SearchSmall from '../../assets/outline/SearchSmall.svg'

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="searchIcon">
        <img src={SearchSmall} alt="search" />
      </div>
      <form action="">
        <input type="text" placeholder="Search" /> 
      </form>
    </div> 
  )
}

export default SearchBar
