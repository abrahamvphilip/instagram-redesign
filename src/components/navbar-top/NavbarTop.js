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
        <div className="iconBox">
          <img src={Setting} alt="settings icon" />
        </div>
      </div>
      <div className="navbarTop__right">
        <div className="iconBox">
          <img src={Search} alt="seearch icon" />
        </div>
        <div className="iconBox">
          <img src={Heart} alt="heart icon" />
        </div>
        <div className="iconBox">
          <img src={Message} alt="message icon" />
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
