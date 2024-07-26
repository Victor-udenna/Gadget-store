import React from 'react'
import PosterStyle from './PosterStyle'
import Text from '../../atoms/Text/Text'
import Img from '../../atoms/Image/Img'
import posterImg from '../../../assets/Images/poster-img.svg'

const Poster = () => {
  return (
    <PosterStyle>
      <section className="container poster">
        <div className="poster-text-container">
          <h2 className="poster-header">
            Elevate Your
            <br /> Digital Lifestyle
          </h2>
          <Text
            className={'poster-text'}
            value={
              'Enhance your daily routine with our high-performance laptops. Perfectly balanced for work and play, they offer exceptional power and portability.'
            }
          />
        </div>
        <Img className="poster-img" image={posterImg} />
      </section>
    </PosterStyle>
  )
}

export default Poster
