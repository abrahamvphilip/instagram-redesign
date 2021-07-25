import React from 'react'
import './NavbarTop.scss'

// icons imports
import Setting from '../../assets/outline/Setting.svg'
import Search from '../../assets/outline/Search.svg'
import Heart from '../../assets/outline/Heart.svg'
import Message from '../../assets/outline/Message.svg'

function NavbarTop() {
  return (
    <div className="navbarTop">
      <div className="navbarTop__left">
        <span className="iconBox">
          <img src={Setting} alt="settings icon" />
        </span>
      </div>
      <div className="navbarTop__right">
        <span className="iconBox">
          <img src={Search} alt="seearch icon" />
        </span>
        <span className="iconBox">
          <img src={Heart} alt="heart icon" />
        </span>
        <span className="iconBox">
          <img src={Message} alt="message icon" />
        </span>
      </div>
    </div>
  )
}

export default NavbarTop
