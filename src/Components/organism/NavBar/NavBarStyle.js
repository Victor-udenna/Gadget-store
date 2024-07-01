import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const NavBarStyle = styled.div`
  .navbar {
    background-color: ${Colors.white};
    padding-left: 0;
    padding-bottom: 0;
    padding-top: 0;
    box-shadow: 0px 0px 4px 0px #00000033;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    z-index: 100;
  }

  .navbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 123px;
    height: 118px;
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
      color: ${Colors.black};
    }
  }

  .mobile-nav-btn {
    visibility: hidden;
  }
`

export default NavBarStyle
