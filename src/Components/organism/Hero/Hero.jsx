import React from 'react'
import HeroStyle from './HeroStyle'
import Text from '../../atoms/Text/Text'
import Img from '../../atoms/Image/Img'
import Heroimg from '../../../assets/Images/hero-img.png'

const Hero = () => {
  return (
    <HeroStyle>
      <header className="container hero">
        <div className="hero-text-container">
          <h1 className="hero-text-header">
            Find Perfect <span>Laptops</span> And <br />
            <span>Accessories</span>
          </h1>
          <Text
            className={'hero-text-desc'}
            value={
              'Explore our wide range of laptops and accessories to find the perfect match for your needs. Enjoy top-quality products, great prices, and exceptional service.'
            }
          />
        </div>
        <Img className={'hero-img'} image={Heroimg} />
      </header>
    </HeroStyle>
  )
}

export default Hero
