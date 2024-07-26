import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const FooterStyle = styled.div`
  .footer {
    padding-top: 67px;
  }
  .footer-content {
    display: flex;
    align-items: start;
    gap: 16.1rem;
    border-bottom: 1px solid ${Colors.border};
    padding-bottom: 2rem;
    /* background-color: red; */
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        padding: 10px 0px;
      }
    }
  }

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

  .footer-link-container {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 20px 0px;
    flex-grow: 1;
  }

  .logo {
    padding-top: 20px;
  }

  .footer-link-header {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
  }

  .footer-link-item {
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.73px;
    text-align: left;
    cursor: pointer;
  }

  .copywrite {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copy-text {
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 20.8px;
    letter-spacing: 0.01em;
    text-align: left;
    padding: 1.5rem 0px 2rem 0px;
  }
  .icon-container {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 992px) {
    .footer-content,
    .footer-link-container {
      flex-direction: column;
    }
  }
`

export default FooterStyle
