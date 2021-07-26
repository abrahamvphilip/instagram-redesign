import React, { useState } from 'react'
import './NavbarTop.scss'

// component import
import SearchBar from '../search-bar/SearchBar'

// icons imports
import Setting from '../../assets/outline/Setting.svg'
import Search from '../../assets/outline/Search.svg'
import Heart from '../../assets/outline/Heart.svg'
import Message from '../../assets/outline/Message.svg'

function NavbarTop() {

  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    setIsSearching(!isSearching)
  }

  return (
    <div className="navbarTop">
      <div className="navbarTop__left">
        <div className="iconBox">
          <img src={Setting} alt="settings" />
        </div>
      </div>
      <div className="navbarTop__right">
      { isSearching ? <SearchBar /> : 
        <div onClick={handleSearch} className="iconBox">
          <img src={Search} alt="search" />
        </div>
        }
        <div className="iconBox">
          <img src={Heart} alt="heart" />
        </div>
        <div className="iconBox">
          <img src={Message} alt="message" />
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
