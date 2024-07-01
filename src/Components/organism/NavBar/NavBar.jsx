import React from 'react'
import NavBarStyle from './NavBarStyle'
import Img from '../../atoms/Image/Img'
import logo from '../../../assets/Images/crystal-ace-logo.svg'

const NavBar = () => {
  return (
    <NavBarStyle>
      <nav className="navbar">
        <div className="navbar-wrapper container">
          <Img alt={'brand logo'} className={'logo'} image={logo} />

          <ul className="nav-link_container">
            <li>Home</li>
            <li>Our services</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>

          <button className='mobile-nav-btn'>Mobile nav</button>
        </div>
      </nav>
    </NavBarStyle>
  )
}

export default NavBar
