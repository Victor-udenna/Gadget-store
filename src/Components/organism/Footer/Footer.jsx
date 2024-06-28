import Text from '../../atoms/Text/Text'
import FooterStyle from './FooterStyle'
import Img from '../../atoms/Image/Img'
import twitterIcon from '../../../assets/icons/Twitter.svg'
import WhastappIcon from '../../../assets/icons/Whatsapp-icon.svg'
import facebookIcon from '../../../assets/icons/Facebook.svg'
import logo from '../../../assets/Images/crystal-ace-logo.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="container footer">
        <div className="footer-content">
          <div>
            <Img alt={'brand logo'} image={logo} />
          </div>
          <div className="footer-link-container">
            <ul>
              <li className="footer-link-header">Visit Link</li>
              <li className="footer-link-item">Shop</li>
              <li className="footer-link-item">Privacy</li>
              <li className="footer-link-item">Terms & Conditions</li>
            </ul>

            <ul>
              <li className="footer-link-header">Company</li>
              <li className="footer-link-item">Home</li>
              <li className="footer-link-item">About us</li>
              <li className="footer-link-item">Send a request</li>
            </ul>
            <ul>
              <li className="footer-link-header">Contact</li>
              <li className="footer-link-item">
                +234 806 000 0007 <br /> <br />
                +234 706 000 0009
              </li>
              <li className="footer-link-item">Crystalace@gmail.com</li>
            </ul>
            <ul>
              <li className="footer-link-header">Address</li>
              <li className="footer-link-item">
                2B, Adeyemo akapo street omole
                <br />
                <br /> phase 1 ojodu, Ikeja, Lagos
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
