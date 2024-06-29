import React from 'react'
import TestimonialCardStyle from './TestimonialCardStyle'
import Img from '../../atoms/Image/Img'
import quoteIcon from '../../../assets/icons/quote-icon.svg'
import Text from '../../atoms/Text/Text'
import avatar from '../../../assets/Images/avatar.png'

const TestimonialCard = () => {
  return (
    <TestimonialCardStyle>
      <div className="testimonial-card">
        <Img className={'quote-icon'} image={quoteIcon} alt={quoteIcon} />
        <Text
          className="testimonial-card-text"
          value={
            'Lorem ipsum dolor sit amet consectetur. Nunc convallis tortor augue cursus. Quam dui dis purus.'
          }
        />
        <div className='avatar-info'>
          <Img className={'avatar-img'} image={avatar} />
          <Text className={'avatar-name'} value={'Jessica Fortune'} />
        </div>
      </div>
    </TestimonialCardStyle>
  )
}

export default TestimonialCard
