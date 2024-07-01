import React from 'react'
import HeroStyle from './HeroStyle'
import Text from '../atoms/Text/Text'
import Img from '../atoms/Image/Img'
import Heroimg from '../../assets/Images/hero-img.png'

const Hero = () => {
  return (
    <HeroStyle>
      <header className="container hero">
        <div className="hero-text-container">
          <h1 className="hero-text-header">
            Find a Perfect Laptops And <br />
            Accessories For Your Family
          </h1>
          <Text
            className={'hero-text-desc'}
            value={
              'Id condimentum pharetra facilisi eu laoreet leo vitae praesent non. Tortor diam dui imperdiet ac quis venenatis amet semper. Gravida enim morbi ante quis sem mauris. Enim eget vitae viverra dolor et. Ipsum nunc in nisl eleifend pretium diam. Tellus vitae tincidunt mauris et.'
            }
          />
        </div>
        <Img className={'hero-img'} image={Heroimg} />
      </header>
    </HeroStyle>
  )
}

export default Hero
