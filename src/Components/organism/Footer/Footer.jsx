import Text from '../../atoms/Text/Text'
import FooterStyle from './FooterStyle'
import Img from '../../atoms/Image/Img'
import twitterIcon from '../../../assets/icons/Twitter.svg'
import WhastappIcon from '../../../assets/icons/Whatsapp-icon.svg'
import facebookIcon from '../../../assets/icons/Facebook.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="container footer">
        <div className="footer-content">
          <div className="footer-link-container">
            <ul>
              <li className="footer-link-header">Visit Link</li>
              <li className="footer-link-item">Shop</li>
              <li className="footer-link-item">Privacy</li>
              <li className="footer-link-item">Terms & Conditions</li>
            </ul>

            <ul>
              <li className="footer-link-header">Company</li>
              <li className="footer-link-item">
                {' '}
                <a href="#home">Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#about">About us</a>
              </li>
              <li className="footer-link-item">
                <a href="#contact">Send a request</a>
              </li>
            </ul>
            <ul>
              <li className="footer-link-header">Contact</li>
              <li className="footer-link-item">
                Tel: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="footer-link-item">
                {' '}
                Email:{' '}
                <a href="mailto:support@techserve.com">support@techserve.com</a>
              </li>
            </ul>
            <ul>
              <li className="footer-link-header">Address</li>
              <li className="footer-link-item">
                Address: 123 Tech Street, Tech City, TX 75001
              </li>
            </ul>
          </div>
        </div>
        <div className="copywrite">
          <Text className={'copy-text'} value={'© 2023. All Rights Reserved'} />
          <div className="icon-container">
            <Img alt={'facebook icon'} image={facebookIcon} />
            <Img alt={'twiiterIcon'} image={twitterIcon} />
            <Img alt={'twitterIcon'} image={WhastappIcon} />
          </div>
        </div>
      </footer>
    </FooterStyle>
  )
}

export default Footer
