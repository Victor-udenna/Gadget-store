import React, { useState, useEffect, useRef } from 'react'
import NavBarStyle from './NavBarStyle'
import Img from '../../atoms/Image/Img'
import hamburgerBtn from '../../../assets/icons/list.svg'
import cancelIcon from '../../../assets/icons/x.svg'
import Text from '../../atoms/Text/Text'

const NavBar = () => {
  const [isMobileDropdown, setiSMobileDropDown] = useState(false)
  const [showNavBar, setShowNavBar] = useState(true)
  const lastScrollTop = useRef(0)

  const handleMobileToggle = () => {
    setiSMobileDropDown(!isMobileDropdown)
  }

  const handleLinkClick = () => {
    if (isMobileDropdown) {
      setiSMobileDropDown(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY
      if (currentScrollTop > lastScrollTop.current) {
        // Scrolling down
        setShowNavBar(false)
      } else {
        // Scrolling up
        setShowNavBar(true)
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavBarStyle showNavBar={showNavBar}>
      <nav className="navbar">
        <div className="navbar-wrapper container">
          <Text className="logo" value={'TechServe'} />
          <ul className="nav-link_container">
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleLinkClick}>
                Our services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact us
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About us
              </a>
            </li>
          </ul>
          <button onClick={handleMobileToggle} className="mobile-nav-btn">
            <Img className={'menu-icon'} image={hamburgerBtn} />
          </button>
        </div>
      </nav>
      {isMobileDropdown && (
        <div className="mobile-dropdown">
          <ul className="mobile-dropdown-link_container">
            <button onClick={handleMobileToggle} className="mobile-nav-btn">
              <Img className={'menu-icon'} image={cancelIcon} />
            </button>
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleLinkClick}>
                Our services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact us
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About us
              </a>
            </li>
          </ul>
        </div>
      )}
    </NavBarStyle>
  )
}

export default NavBar
