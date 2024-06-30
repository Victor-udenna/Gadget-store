import React from 'react'
import PosterStyle from './PosterStyle'
import Text from '../../atoms/Text/Text'
import Img from '../../atoms/Image/Img'
import posterImg from '../../../assets/Images/poster-img.svg'

const Poster = () => {
  return (
    <PosterStyle>
      <section className=" container poster">
        <div className='poster-text-container'>
          <h2 className="poster-header">
            Aggrandize Your
            <br /> Computing Experience
          </h2>
          <Text
            className={'poster-text'}
            value={
              'Lorem ipsum dolor sit amet consectetur. Fringilla in posuere egestas pulvinar massa tristique viverra tortor integer. Sed quis at scelerisque viverra quis fermentum volutpat lobortis. Euismod porttitor ullamcorper ac mattis.'
            }
          />
        </div>
        <Img className="" image={posterImg} />
      </section>
    </PosterStyle>
  )
}

export default Poster
