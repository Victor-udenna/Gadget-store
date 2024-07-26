import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const NavBarStyle = styled.div`
  .navbar {
    background-color: ${Colors.white};
    padding-left: 0;
    padding-bottom: 0;
    padding-top: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 50;
    transition: transform 0.3s ease-in-out;
    transform: ${({ showNavBar }) =>
      showNavBar ? 'translateY(0)' : 'translateY(-100%)'};
  }

  .navbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
  }

  .nav-link_container {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style-type: none;

    li {
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 15.73px;
      text-align: left;

      a {
        color: ${Colors.black};
        text-decoration: none;
      }

      a:hover {
        color: ${Colors.danger};
        text-decoration: underline;
        font-weight: 700;
      }
    }
  }

  .mobile-nav-btn {
    visibility: hidden;
  }

  .mobile-dropdown {
    display: none;
  }

  /* @media screen and (max-width: 992px) {

  } */

  @media screen and (max-width: 576px) {
    .navbar-wrapper {
      padding: 0 1.1rem 0.2rem 0.9rem;
    }

    .mobile-dropdown {
      display: block;
      background-color: ${Colors.transparentDark};
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: 100;
    }

    .mobile-dropdown-link_container {
      display: flex;
      flex-direction: column;
      background-color: ${Colors.white};
      width: 80%;
      align-items: start;
      justify-content: start;
      list-style-type: none;
      padding: 1.5rem 1.375rem;
      gap: 24px;
      height: inherit;

      li {
  font-size: 15.5px;
  font-weight: 600;

  a {
    color: ${Colors.black};
    text-decoration: none;
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }

  a:hover {
    color: ${Colors.red};
    text-decoration: underline;
  }
}

    }

    .nav-link_container {
      display: none;
    }

    .mobile-nav-btn {
      visibility: visible;
      background-color: inherit;
      border: none;
      .menu-icon {
        width: 40px;
        height: 40px;
      }
    }
  }
`

export default NavBarStyle
